Graphics.Canvas = class extends Domain {
    #canvas
    #context
    #hasDeployed
    constructor(transaction) {        
        super(transaction); 
        this.repository = new Graphics.Repository();
        this.deployer = new Graphics.CanvasDeployer();     
        this.#hasDeployed = false;
    }

    async deploy() {
        if(this.#hasDeployed == true) throw "Canvas cannot deploy. It is already deployed";

        var canvasSetup = await this.repository.getCanvasSetup();
        this.#canvas = this.deployer.setup(canvasSetup);
        this.deployer.deploy();

        this.#context = this.#canvas.getContext("2d");
        this.AddDomainEvent(new Graphics.Events.CanvasLoadedEvent());
        this.#hasDeployed = true;
    }

    get width() { return this.#canvas.width; }
    get height() { return this.#canvas.height; }
    get virtualWidth() { return this.#canvas.style.width; }
    get virtualHeight() { return this.#canvas.style.height; }
    get backgroundColor() { return this.#canvas.style.backgroundColor; }
}