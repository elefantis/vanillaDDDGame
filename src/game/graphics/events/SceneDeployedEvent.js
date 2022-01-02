Graphics.Events.SceneDeployedEvent = class SceneDeployedEvent extends DomainEvent {
    #scene
    constructor(scene) {
        super();
        this.#scene = scene;     
    }

    get scene() { return this.#scene; }
}