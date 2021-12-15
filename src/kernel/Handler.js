class Handler {
    #dispatcher
    #name
    constructor(dispatcher) {
        this.#dispatcher = dispatcher;
        this.#dispatcher.addHandler(this);
        this.#name = this.constructor.name.replace("Handler", "");
    }
    
    handle(domainEvent) { }

    get domainEventName() {
        return this.#name;
    }
}