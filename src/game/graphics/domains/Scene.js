Graphics.Scene = class extends Domain {
    #currentScene
    constructor(transaction, repository) {
        super(transaction); 
        this.#currentScene = null;
        this.repository = repository;
    }

    async deployScene(sceneId) {
        this.#currentScene = await this.repository.getScene(sceneId);
        this.AddDomainEvent(new Graphics.Events.SceneDeployedEvent(this.#currentScene));     
    }
 }