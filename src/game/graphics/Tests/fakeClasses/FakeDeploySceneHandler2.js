Graphics.Handlers.FakeSceneDeployHandler2 = class SceneDeployedHandler extends Graphics.Handlers.SceneDeployedHandler {
    constructor(dispatcher) {
        super(dispatcher);     
        this.testMessage = "failed!";   
    }

    handle(sceneDeployedEvent) {
       this.testMessage = sceneDeployedEvent.scene.testMessage + "2";
    }
}