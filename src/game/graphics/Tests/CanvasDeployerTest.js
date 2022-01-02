Graphics.Test.CanvasDeployerTest = class CanvasDeployerTest extends Tests.Test {
    constructor() {
        super();
    }

    setupTest() {
        var deployer = new Graphics.CanvasDeployer();
        var fakeCanvasSetup = new Graphics.Test.FakeCanvasSetup();

        var canvas = deployer.setup(fakeCanvasSetup);

        Assert.areEqual(fakeCanvasSetup.backgroundColor, canvas.style.backgroundColor);
        Assert.areEqual(fakeCanvasSetup.width, canvas.width);    
        Assert.areEqual(fakeCanvasSetup.virtualHeight, canvas.style.height);
    }

    deployTest() {
        var deployer = new Graphics.CanvasDeployer();
        var fakeCanvasSetup = new Graphics.Test.FakeCanvasSetup();
       
        var canvas = deployer.setup(fakeCanvasSetup);
        var expected = "fakeCanvas";
        canvas.id = expected;
        deployer.deploy();
        var result = document.getElementById("fakeCanvas").id;
        
        Assert.areEqual(expected, result);
    }
}