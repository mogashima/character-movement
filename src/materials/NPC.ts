import { Material } from './Material';

export abstract class NPC extends Material {
    constructor(id: string, x: number, y: number) {
        super(id, x, y);
    }

    getType(): string {
        return "npc";
    }

    abstract interact(): void;
}
