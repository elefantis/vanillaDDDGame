Tests.Test = class Test {
    #name
    constructor() {
        this.#name = this.constructor.name;  
    }

    get name() {
        return this.#name;
    }

    getTestNames() {
        return Object.getOwnPropertyNames(this.constructor.prototype).filter((name) =>  {
            return name != "constructor";
        })
    }
}