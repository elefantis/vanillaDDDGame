Graphics.CanvasDeployer = class {
    #canvas
    constructor() {

    }

    setup(canvasSetup) {
        this.#canvas = document.createElement("canvas");
        this.#canvas.width = canvasSetup.width;
        this.#canvas.height = canvasSetup.height;
        this.#canvas.style.width = canvasSetup.virtualWidth;
        this.#canvas.style.height = canvasSetup.virtualHeight;      
        this.#canvas.style.backgroundColor = canvasSetup.backgroundColor;
        this.#canvas.style.border = canvasSetup.border;
                
        return this.#canvas;
    }

    deploy() {
        document.body.appendChild(this.#canvas); 
    }
}