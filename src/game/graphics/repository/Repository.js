Graphics.Repository = class {
    #currentScene
    constructor() { 
        this.#currentScene = null;
    }

    async getCanvasSetup() {
        try {
            return await Service.Loader.LoadJsonAsync("data/canvasSetup.json");
         } catch(error) {
             throw error;
         }    
    }

    async getScene(sceneId) {
        try {
            return await this.#tryGetScene(sceneId);           
         } catch(error) {
             throw error;
         }  
    }

    async #tryGetScene(sceneId) {
        var scenes = await Service.Loader.LoadJsonAsync("data/scenes.json");
        return scenes[sceneId];
    }
}