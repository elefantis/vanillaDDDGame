Tests.Runner = class TestRunner {
    #executer
    #viewer
    constructor() {
        this.#executer = new Tests.TestExecuter();
        this.#viewer = new Tests.TestViewer();
        this.#executer.subscribe(this.#viewer);
    }

    addTest(test) {
        this.#executer.addTest(test);
    }

    async executeTests() {
        await this.#executer.executeTests();
        this.#viewer.display();
    }
}