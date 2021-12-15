(function() {
    var executer = new TestExecuter();
    executer.addTest(new UIDTest());
    executer.addTest(new Graphics.Test.CanvasTest());
    executer.addTest(new Graphics.Test.CanvasDeployerTest());

    executer.executeTests();
})();