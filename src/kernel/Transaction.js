class Transaction 
{
    #domains
    #domainEventDispatcher
    constructor(dispatcher) {
        this.#domains = [];
        this.#domainEventDispatcher = dispatcher;
    }

    addDomain(domain) {
        this.#domains.push(domain);
    }

    dispatchEvents() {
        let domainEvents = [];       
        for(let domain of this.#domains) {
            var event = domain.popDomainEvent();            
            if(event) {
                domainEvents.push(event);            
            }
        }      
        this.#domainEventDispatcher.dispatchHandlers(domainEvents);
    }
}