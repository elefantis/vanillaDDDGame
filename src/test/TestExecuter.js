Tests.TestExecuter = class TestExecuter extends Tests.TestPublisher{
    #tests
    #failed
    #passed
    constructor() {
        super();
        this.#tests = {};
    }

    addTest(test) {
        Guard.validateTest(test);
        this.#tests[test.name] = test;
    }

    async executeTests() {
        var testCount = 0;
        this.#failed = 0;
        this.#passed = 0;

        for(let testName in this.#tests) {
            this.addTestNameGroup(testName);        
            for(let testMethodName of this.#tests[testName].getTestNames()) {                   
                await this.#tryTest(testMethodName, this.#tests[testName][testMethodName]);
                testCount++;
            }            
        }        

        console.log(" ");
        console.log("Tests Passed: " + this.#passed);
        console.log("Tests Failed: " + this.#failed);
        console.log("Total Tests:  " + testCount);
    }

    async #tryTest(testMethodName, test) {
        try
        {
            await test();
            this.addSuccessfulTest(testMethodName);            
            this.#passed++;
        } catch(error) {
            this.addFailedTest(testMethodName, error);
            this.#failed++;            
        }
    }
}