Graphics.Repository = class {
    constructor() { }

    async getCanvasSetup() {
        try {
            return await Service.Loader.LoadJsonAsync("data/canvasSetup.json");
         } catch(error) {
             throw error;
         }    
    }
}