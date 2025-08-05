import { Terrain } from './TerrainBase';

export class Plain extends Terrain {
    name = "Plain";
    cssClass = "terrain-plain";  // SCSSで色付けなどに使うクラス名
    walkable = true;
    color = '#88cc88'; // 緑
}
