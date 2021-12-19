Tests.TestViewer = class TestViewer extends Tests.ITestSubscriber {
    #tests
    #currentGroup
    constructor() {
        super();
        this.#tests = {}
        this.#currentGroup = null;
        this.viewer = new Tests.TestConsoleViewer();
    }
    
    addTestNameGroup(groupName) {        
        this.#tests[groupName] = { failedGroup: false }
        this.#currentGroup = groupName;
    }

    addSuccessfulTest(testName) {
        if(this.#currentGroup == null) {
            this.#tests[testName] = new Tests.TestSubViewer(testName, Tests.TestState.Succeed);
        } else {
            this.#tests[this.#currentGroup][testName] = new Tests.TestSubViewer(testName, Tests.TestState.Succeed);
        }
    }

    addFailedTest(testName, error) {
        if(this.#currentGroup == null) {
            this.#tests[testName] = new Tests.TestSubViewer(testName, Tests.TestState.Succeed, error);
        } else {
            this.#tests[this.#currentGroup][testName] = new Tests.TestSubViewer(testName, Tests.TestState.Succeed, error);
            this.#tests[this.#currentGroup].failedGroup = true;
        }
    }

    display() {
        this.viewer.displayTests(this.#tests);
        this.#tests = {}
        this.#currentGroup = null;
    }
}