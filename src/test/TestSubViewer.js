Tests.TestSubViewer = class TestSubViewer{
    #name
    #state
    #error
    #isFailed
    constructor(name, state, error) {
        this.#name = name;
        this.#state = state;
        this.#error = error;
        this.#isFailed = error instanceof Error;
    }

    get name() { return this.#name; }
    get state() { return this.#state; }
    get error() { return this.#error; }
    get isFailed() { return this.#isFailed; }
}