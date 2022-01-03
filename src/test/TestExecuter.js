Tests.TestExecuter = class TestExecuter extends Tests.TestPublisher{
    #tests
    constructor() {
        super();
        this.#tests = {};
    }

    addTest(test) {
        Guard.validateTest(test);
        this.#tests[test.name] = test;
    }

    async executeTests() {
        for(let testName in this.#tests) {
            this.addTestNameGroup(testName);        
            for(let testMethodName of this.#tests[testName].getTestNames()) {                   
                await this.#tryTest(testMethodName, this.#tests[testName][testMethodName]);            
            }
        }
    }

    async #tryTest(testMethodName, test) {        
        try
        {
            await test();
            this.addSuccessfulTest(testMethodName);            
        } catch(error) {                          
            if(test.expectedError && error instanceof test.expectedError) {
                this.addSuccessfulTest(testMethodName); 
            }  else {
                this.addFailedTest(testMethodName, error);         
            }
        }
    }
}