import { Terrain } from './TerrainBase';

export class Mountain extends Terrain {
    name = "Mountain";
    cssClass = "terrain-mountain";
    walkable = false;
    color = '#888888'; // グレー
}