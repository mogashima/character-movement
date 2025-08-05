// ベースクラスとして抽象クラスを使う例

export abstract class Terrain {
    // 地形の名前（例："Plain", "Mountain", "River"）
    abstract name: string;

    // HTMLやCanvasで描画するときに使うCSSクラス名など
    abstract cssClass: string;

    // その地形が歩行可能かどうか
    abstract walkable: boolean;

    abstract color: string;

    // 追加でコストなどを設定する場合はここに
    get cost(): number {
        return this.walkable ? 1 : Infinity;
    }
}
