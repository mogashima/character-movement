import { Tile } from './terrains/Tile.ts';
import { Plain } from './terrains/Plain';
import { Mountain } from './terrains/Mountain';
import { River } from './terrains/River';

export const TILE_SIZE = 32;

// 地形記号 → 地形インスタンスの対応
const terrainSymbolMap = {
    p: new Plain(),
    m: new Mountain(),
    r: new River(),
} as const;

export type TerrainSymbol = keyof typeof terrainSymbolMap;

// 改行付きの文字列でマップを定義
export const predefinedMapText = `
mmmmmmmmmmmmmmmm
mppppppppppppppm
mppppppppppppppm
mppppppppppppppm
mppppppppppppppm
mppppppppppppppm
mppppppppppppppm
mppppppppppppppm
mppppppppppppppm
mppppppppppppppm
mppppppppppppppm
mppppppppppppppm
mppppppppppppppm
mppppppppppppppm
mppppppppppppppm
mmmmmmmmmmmmmmmm
`;


// 文字列からTile[][]を生成
export function createFieldFromTextMap(mapText: string): Tile[][] {
    const lines = mapText.trim().split('\n');
    const height = lines.length;
    const width = lines[0].length;

    const field: Tile[][] = [];

    for (let y = 0; y < height; y++) {
        const row: Tile[] = [];
        for (let x = 0; x < width; x++) {
            const char = lines[y][x] as TerrainSymbol;
            const terrain = terrainSymbolMap[char];
            if (!terrain) throw new Error(`Unknown terrain symbol: '${char}' at (${x}, ${y})`);
            row.push(new Tile(x, y, terrain));
        }
        field.push(row);
    }

    return field;
}
