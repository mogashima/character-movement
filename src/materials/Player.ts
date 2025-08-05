import { Material } from './Material';

export class Player extends Material {
    constructor(id: string, x: number, y: number) {
        super(id, x, y);
    }

    getType(): string {
        return "player";
    }
}
