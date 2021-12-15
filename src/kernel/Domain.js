class Domain {
    #domainEvents
    #id
    constructor(transaction) {              
        this.#domainEvents = [];
        this.#id = UID.getNewUID();
        transaction.addDomain(this);       
    }

    AddDomainEvent(event) {
        Guard.validateDomainEvent(event);
        this.#domainEvents.push(event);      
    }

    get id() {
        return this.#id;
    }

    popDomainEvent() {
        return this.#domainEvents.pop();
    }
}