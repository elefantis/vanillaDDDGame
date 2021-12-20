class Assert {
    static areEqual(expected, result) {
        if(expected != result) {
            throw new Tests.AssertError(expected, result);
        }
    }
}