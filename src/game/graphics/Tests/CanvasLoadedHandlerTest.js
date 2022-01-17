Graphics.Test.CanvasLoadedHandlerTest = class CanvasLoadedHandlerTest extends Tests.Test {
    constructor() {
        super();
    }

    async handleTest() {
         // Arrange
        var dispatcher = new DomainEventDispatcher();
        var transaction = new Transaction(dispatcher);
        var fakeRepo = new Graphics.Test.FakeRepository(); 
        var canvas = new Graphics.Canvas(transaction, fakeRepo);
        var handler = new Graphics.Handlers.CanvasLoadedHandler(dispatcher);
        var fakeScene = {
            started: false,
            start: function() {
                this.started = true;
            },
        }
        handler.scene = fakeScene;
        handler.handle = function(event) 
        {            
            this.scene.started = true; 
        }

        // Act
        await canvas.deploy();
        transaction.dispatchEvents();

        //Assert
        Assert.areEqual(true, fakeScene.started);
    }
}