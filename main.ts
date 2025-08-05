const canvas = document.getElementById("gameCanvas") as HTMLCanvasElement;
const ctx = canvas.getContext("2d")!;

// キャラクター情報
interface Character {
  x: number;
  y: number;
  width: number;
  height: number;
  speed: number;
}

const player: Character = {
  x: 100,
  y: 100,
  width: 32,
  height: 32,
  speed: 4
};

const keys: { [key: string]: boolean } = {};

// キーボードイベントの登録
window.addEventListener("keydown", (e) => {
  keys[e.key] = true;
});

window.addEventListener("keyup", (e) => {
  keys[e.key] = false;
});

// ゲームループ
function update() {
  // 入力に応じた移動処理
  if (keys["ArrowUp"]) player.y -= player.speed;
  if (keys["ArrowDown"]) player.y += player.speed;
  if (keys["ArrowLeft"]) player.x -= player.speed;
  if (keys["ArrowRight"]) player.x += player.speed;

  // 画面クリア
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // キャラクター描画
  ctx.fillStyle = "blue";
  ctx.fillRect(player.x, player.y, player.width, player.height);

  // 次のフレームを要求
  requestAnimationFrame(update);
}

// ゲーム開始
update();
