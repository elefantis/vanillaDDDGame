Tests.TestViewer = class TestViewer extends Tests.ITestSubscriber {
    #tests
    #currentGroup   
    constructor() {
        super();
        this.#tests = {}
        this.#currentGroup = null;
        this.viewer = new Tests.TestConsoleViewer();
        this.#tests.testResults = { "Passed test": 0, "Failed tests": 0, "Total tests": 0 }
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

        this.#tests.testResults["Passed test"]++;
        this.#tests.testResults["Total tests"]++;
    }

    addFailedTest(testName, error) {
        if(this.#currentGroup == null) {
            this.#tests[testName] = new Tests.TestSubViewer(testName, Tests.TestState.Succeed, error);
        } else {
            this.#tests[this.#currentGroup][testName] = new Tests.TestSubViewer(testName, Tests.TestState.Succeed, error);
            this.#tests[this.#currentGroup].failedGroup = true;
        }

        this.#tests.testResults["Failed tests"]++;
        this.#tests.testResults["Total tests"]++;
    }

    display() {
        this.viewer.displayTests(this.#tests);        
    }

    clear() {
        this.#tests = {}
        this.#currentGroup = null;
    }
}