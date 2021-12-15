class Handler {
    #dispatcher
    #name
    constructor(dispatcher) {
        this.#dispatcher = dispatcher;
        this.#name = this.constructor.name.replace("Handler", "");
        this.#dispatcher.addHandler(this);
    }
    
    handle(domainEvent) { }

    get domainEventName() {
        return this.#name;
    }
}