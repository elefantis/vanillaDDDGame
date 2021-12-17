class TestExecuter {
    #tests
    #failed
    #passed
    constructor() {
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
            console.group(testName);
            for(let testMethodName of this.#tests[testName].getTestNames()) {                   
                await this.#tryTest(testMethodName, this.#tests[testName][testMethodName]);
                testCount++;
            }
            console.groupEnd()
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
            console.log('%c' + testMethodName + ': Passed!', 'color: green');
            this.#passed++;
        } catch(error) {
            if(error instanceof AssertError) {
                console.log('%c' + testMethodName + ': Failed, Expected: ' + error.expected + ', but result: ' + error.result, 'color: red');
            } else {
                console.log('%c' + testMethodName + ': Failed. The test throws and exception. Exception:', 'color: red');
                console.log(error);
            }
            this.#failed++;            
        }
    }
}