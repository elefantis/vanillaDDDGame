KernelTests.UIDTest =  class UIDTest extends Tests.Test{
    constructor() {
        super();
    }

    getNewUIDTest() {
        var firstUID =  UID.getNewUID();
        Assert.areEqual(firstUID + 1, UID.getNewUID());
        Assert.areEqual(firstUID + 2, UID.getNewUID());
        Assert.areEqual(firstUID + 3, UID.getNewUID());
        Assert.areEqual(firstUID + 4, UID.getNewUID());
    }

    getNewUIDTest2() {
        var firstUID =  UID.getNewUID();
        Assert.areEqual(firstUID + 1, UID.getNewUID());
        Assert.areEqual(firstUID + 2, UID.getNewUID());
        Assert.areEqual(firstUID + 3, UID.getNewUID());
        Assert.areEqual(firstUID + 4, UID.getNewUID());
    }
}