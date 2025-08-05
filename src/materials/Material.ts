export abstract class Material {
    constructor(
        public id: string,
        public x: number,
        public y: number,
    ) { }

    abstract getType(): string;

    moveTo(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
}
