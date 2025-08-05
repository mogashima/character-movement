import type { Tile } from './terrains/Tile';

type Point = { x: number; y: number };

function heuristic(a: Point, b: Point): number {
    return Math.abs(a.x - b.x) + Math.abs(a.y - b.y); // マンハッタン距離
}

function getNeighbors(tile: Tile, field: Tile[][]): Tile[] {
    const directions = [
        { dx: -1, dy: 0 },
        { dx: 1, dy: 0 },
        { dx: 0, dy: -1 },
        { dx: 0, dy: 1 },
    ];

    const neighbors: Tile[] = [];

    for (const dir of directions) {
        const x = tile.x + dir.dx;
        const y = tile.y + dir.dy;

        if (
            y >= 0 &&
            y < field.length &&
            x >= 0 &&
            x < field[0].length &&
            field[y][x].isWalkable()
        ) {
            neighbors.push(field[y][x]);
        }
    }

    return neighbors;
}

export function findPath(start: Point, goal: Point, field: Tile[][]): Point[] {
    const openSet: Tile[] = [field[start.y][start.x]];
    const cameFrom = new Map<Tile, Tile>();

    const gScore = new Map<Tile, number>();
    const fScore = new Map<Tile, number>();

    for (const row of field) {
        for (const tile of row) {
            gScore.set(tile, Infinity);
            fScore.set(tile, Infinity);
        }
    }

    gScore.set(field[start.y][start.x], 0);
    fScore.set(field[start.y][start.x], heuristic(start, goal));

    while (openSet.length > 0) {
        // fScoreが一番小さいタイルを取得
        openSet.sort((a, b) => (fScore.get(a)! - fScore.get(b)!));
        const current = openSet.shift()!;

        if (current.x === goal.x && current.y === goal.y) {
            // ゴールに到達した場合、経路を再構築
            const path: Point[] = [];
            let temp: Tile | undefined = current;
            while (temp) {
                path.unshift({ x: temp.x, y: temp.y });
                temp = cameFrom.get(temp);
            }
            path.shift(); // スタート地点を除外（移動開始なので）
            return path;
        }

        const neighbors = getNeighbors(current, field);

        for (const neighbor of neighbors) {
            const tentativeG = gScore.get(current)! + 1;

            if (tentativeG < gScore.get(neighbor)!) {
                cameFrom.set(neighbor, current);
                gScore.set(neighbor, tentativeG);
                fScore.set(neighbor, tentativeG + heuristic(neighbor, goal));

                if (!openSet.includes(neighbor)) {
                    openSet.push(neighbor);
                }
            }
        }
    }

    // 経路が存在しない場合
    return [];
}
