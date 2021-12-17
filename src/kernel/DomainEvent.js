class DomainEvent {
    #name
    constructor() {       
        this.#name = this.constructor.name.replace("Event", "");
    }

    get name() {
        return this.#name;
    }
}