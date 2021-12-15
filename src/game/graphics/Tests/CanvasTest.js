Graphics.Test.CanvasTest = class CanvasTest extends Test {
    constructor() {
        super();
    }

    async deployTest() {
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

        // Act
        await canvas.deploy();
        transaction.dispatchEvents();
           
        // Assert
        Assert.areEqual(fakeCanvasSetup.backgroundColor, canvas.backgroundColor);
        Assert.areEqual(fakeCanvasSetup.width, canvas.width);    
        Assert.areEqual(fakeCanvasSetup.virtualHeight, canvas.virtualHeight);
    }
}