import { NPC } from './NPC';

export class WeaponShopNPC extends NPC {
    constructor(id: string, x: number, y: number) {
        super(id, x, y);
    }

    interact(): void {
        console.log("武器屋：いらっしゃいませ！武器はいかがですか？");
    }
}
