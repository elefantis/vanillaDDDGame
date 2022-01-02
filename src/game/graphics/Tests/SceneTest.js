Graphics.Test.SceneTest = class SceneTest extends Tests.Test {
    constructor() {
        super();
    }

    async deploySceneTest() {
        var dispatcher = new DomainEventDispatcher();
        var transaction = new Transaction(dispatcher);
        var deployHandler = new Graphics.Handlers.FakeSceneDeployHandler(dispatcher);
        var deployHandler2 = new Graphics.Handlers.FakeSceneDeployHandler2(dispatcher);
        
        var fakeRepo = new Graphics.Test.FakeRepository();
        var scene = new Graphics.Scene(transaction, fakeRepo);

        //Act
        await scene.deployScene(1);
        transaction.dispatchEvents();

        //Assert
        Assert.areEqual("succeed!", deployHandler.testMessage);
        Assert.areEqual("succeed!2", deployHandler2.testMessage);
    }
}