import { Terrain } from './TerrainBase';

export class River extends Terrain {
    name = "River";
    cssClass = "terrain-river";
    walkable = false;
    color = '#4488ff'; // 青
}
