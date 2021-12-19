Tests.AssertError = class AssertError extends Error {
    constructor(expected, result) {
        super();
        this.expected = expected;
        this.result = result;
    }
}