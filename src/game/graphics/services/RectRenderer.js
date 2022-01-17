Graphics.RectRenderer = class extends Graphics.SpriteRendererStrategy {
    constructor() {
        super();
    }

    render(ctx, sprite) {
        var oldColor = ctx.fillStyle;
        ctx.fillStyle = sprite.color;
        ctx.fillRect(sprite.x, sprite.y, sprite.width, sprite.height);
        ctx.fillStyle = oldColor;
    }
}