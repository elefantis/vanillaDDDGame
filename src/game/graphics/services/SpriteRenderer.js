Graphics.SpriteRenderer = class {
    #strategies
    constructor() {
        this.#strategies = {
            0: new Graphics.RectRenderer()
        }
    }

    renderSprite(ctx, sprite) {
        this.#strategies[sprite.type].render(ctx, sprite);
    }
}