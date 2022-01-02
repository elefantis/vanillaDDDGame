(async function() {
    var executer = new Tests.Runner();
    executer.addTest(new KernelTests.UIDTest());
    executer.addTest(new Graphics.Test.CanvasTest());
    executer.addTest(new Graphics.Test.CanvasDeployerTest());
    executer.addTest(new Graphics.Test.CanvasLoadedHandlerTest());

    executer.addTest(new Graphics.Test.SceneTest());

    await executer.executeTests();
    document.body.innerHTML = "";
})();