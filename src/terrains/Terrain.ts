import { Plain } from './Plain';
import { Mountain } from './Mountain';
import { River } from './River';
import type { Terrain } from './TerrainBase';

// 文字記号ごとのTerrainインスタンスマップ
const terrainMap: Record<string, Terrain> = {
    p: new Plain(),
    m: new Mountain(),
    r: new River(),
};

// 記号からTerrainを返す関数
export function terrainFromSymbol(symbol: string): Terrain | undefined {
    return terrainMap[symbol];
}

// もしTerrainクラスなどのエクスポートが必要ならここに
export { Terrain } from './TerrainBase';
