Tests.TestConsoleViewer = class TestConsoleViewer {
    constructor() { }

    displayTests(tests) {
        for(let key in tests) {
            if(tests[key] instanceof Tests.TestSubViewer) {
                this.#displayTest(tests[key]);
            } else {
                this.#displayGroup(key, tests[key]);
            }
        } 
       
        console.table(tests.testResults);
    }
    
    #displayGroup(groupName, group) {        
        if(group.failedGroup == true) {
            console.group(groupName);
        } else if(groupName != "testResults") {
            console.groupCollapsed(groupName);
        }

        for(let key in group) {
            if(group[key] instanceof Tests.TestSubViewer) 
            {
                this.#displayTest(group[key]);
            }
        }        
        console.groupEnd();
    }

    #displayTest(test) {
        if(test.isFailed == true) {
            this.#displayFailedTest(test);
        } else {
            this.#displaySuccessfulTest(test);
        }
    }

    #displayFailedTest(test) {
        var error = test.error;
        if(error instanceof Tests.AssertError) {
            console.log('%c' + test.name + ': Failed, Expected: ' + error.expected + ', but result: ' + error.result, 'color: red');
        } else {
            console.log('%c' + test.name + ': Failed. The test throws and exception. Exception:', 'color: red');
            console.log(error);
        }
    }

    #displaySuccessfulTest(test) {
        console.log('%c' + test.name + ': Passed!', 'color: green');
    }
}