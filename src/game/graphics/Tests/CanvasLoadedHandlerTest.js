Graphics.Test.CanvasLoadedHandlerTest = class CanvasLoadedHandlerTest extends Test {
    constructor() {
        super();
    }

    async handleTest() {
         // Arrange
         var dispatcher = new DomainEventDispatcher();
         var transaction = new Transaction(dispatcher);
         var canvas = new Graphics.Canvas(transaction);
         var fakeCanvasSetup = new Graphics.Test.FakeCanvasSetup();
         var fakeRepo = {
            getCanvasSetup: function() {
                return fakeCanvasSetup;
            } 
        }
        canvas.repository = fakeRepo;
        var handler = new Graphics.Handlers.CanvasLoadedHandler(dispatcher);
        var fakeScene = {
            started: false,
            start: function() {
                this.started = true;
            },
        }
        handler.scene = fakeScene;
        handler.handle = (event) => { this.scene.started = true; }

        // Act
        await canvas.deploy();
        transaction.dispatchEvents();

        //Assert
        Assert.areEqual(true, fakeScene.started);
    }
}