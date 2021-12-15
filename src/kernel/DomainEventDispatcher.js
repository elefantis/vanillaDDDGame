class DomainEventDispatcher {
    #handlers
    constructor() {
        this.#handlers = { };
    }

    addHandler(handler) {
        Guard.validateHandler(handler);

        if(!(handler.domainEventName in this.#handlers)) {
            this.#handlers[handler.domainEventName] = [];
        }

        this.#handlers[handler.domainEventName].push(handler);        
    }

    dispatchHandlers(domainEvents) {
        for(let event of domainEvents) {
            if(event.name in this.#handlers) {
                this.#executeEvent(event);
            }
        }
    }

    #executeEvent(event) {
        for(let handler of this.#handlers[event.name]) {
            handler.handle(event);
        }
    }
}