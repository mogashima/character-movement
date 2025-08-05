import type { Terrain } from './Terrain';

export class Tile {
    x: number;
    y: number;
    terrain: Terrain;

    constructor(x: number, y: number, terrain: Terrain) {
        this.x = x;
        this.y = y;
        this.terrain = terrain;
    }

    isWalkable(): boolean {
        return this.terrain.walkable;
    }
}
