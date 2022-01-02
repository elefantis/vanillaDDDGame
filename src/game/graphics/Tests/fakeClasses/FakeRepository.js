Graphics.Test.FakeRepository = class FakeRepository {
    constructor() {                      
    }

    async getCanvasSetup() {       
        return new Graphics.Test.FakeCanvasSetup();;
    } 

    async getScene(sceneId) {
        var sceneStorage = new Graphics.Test.FakeScenes();
        var scenes = sceneStorage.scenes;     
        return scenes[sceneId];
    }
}