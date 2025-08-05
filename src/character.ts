export interface Character {
    id: string;
    x: number;
    y: number;
    type: 'player' | 'npc';
}

export function createPlayer(): Character {
    return { id: 'player', x: 0, y: 0, type: 'player' };
}

export function createNPC(id: string, x: number, y: number): Character {
    return { id, x, y, type: 'npc' };
}
