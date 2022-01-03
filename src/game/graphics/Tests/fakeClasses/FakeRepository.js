Graphics.Test.FakeRepository = class FakeRepository {
    constructor() {                      
    }

    async getCanvasSetup() {       
        return new Graphics.Test.FakeCanvasSetup();;
    } 

    async getScene(sceneId) {        
        var scenes = await Service.Loader.LoadJsonAsync("data/test/scenes.json");
        if(sceneId in scenes)
        {           
            return scenes[sceneId];
        }

        throw new KeyNotFoundError("There is no scene with sceneid = " + sceneId);
    }

    async getLayers(sceneId) {
        try {
            return await Service.Loader.LoadJsonAsync("data/test/layers.json")[sceneId];           
         } catch(error) {
             throw error;
         }
    }
}