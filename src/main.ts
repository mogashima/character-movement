import './styles/main.scss';  // SCSSをインポート（環境に応じてパス調整）
import { createFieldFromTextMap, TILE_SIZE, predefinedMapText } from './field';
import { Player } from './materials/Player';
import { findPath } from './pathfinding';
import { animateMovement } from './animations/animateMovement';

const canvas = document.getElementById('gameCanvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d')!;

const field = createFieldFromTextMap(predefinedMapText);
const player = new Player('player1', 2, 2);

canvas.width = TILE_SIZE * field[0].length;
canvas.height = TILE_SIZE * field.length;

// フィールドとキャラクターを描画する関数
function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (const row of field) {
        for (const tile of row) {
            const terrain = tile.terrain;
            ctx.fillStyle = terrain.color;  // terrain に color プロパティがある前提
            ctx.fillRect(tile.x * TILE_SIZE, tile.y * TILE_SIZE, TILE_SIZE, TILE_SIZE);
            ctx.strokeStyle = '#333';
            ctx.strokeRect(tile.x * TILE_SIZE, tile.y * TILE_SIZE, TILE_SIZE, TILE_SIZE);
        }
    }

    // プレイヤー描画
    ctx.fillStyle = 'blue';
    ctx.fillRect(player.x * TILE_SIZE, player.y * TILE_SIZE, TILE_SIZE, TILE_SIZE);
}

draw();

// クリック時にプレイヤーが移動する処理
canvas.addEventListener('click', (e) => {
    const rect = canvas.getBoundingClientRect();
    const targetX = Math.floor((e.clientX - rect.left) / TILE_SIZE);
    const targetY = Math.floor((e.clientY - rect.top) / TILE_SIZE);

    // 移動可能な経路を探索
    const path = findPath({ x: player.x, y: player.y }, { x: targetX, y: targetY }, field);
    if (path.length === 0) return;

    // アニメーション処理にパスとプレイヤーを渡す
    animateMovement(player, path, () => {
        draw();
    });
});

// 毎フレーム描画が必要なら requestAnimationFrame で制御も可
