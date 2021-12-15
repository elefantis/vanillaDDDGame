class Assert {
    static areEqual(expected, result) {
        if(expected != result) {
            throw new AssertError(expected, result);
        }
    }
}