class Handler {
    #dispatcher
    #name
    constructor(dispatcher) {        
        this.#name = this.constructor.name.replace("Handler", "");
        this.#dispatcher = dispatcher;
        this.#dispatcher.addHandler(this);        
    }
    
    handle(domainEvent) { }

    get domainEventName() {
        return this.#name;
    }
}