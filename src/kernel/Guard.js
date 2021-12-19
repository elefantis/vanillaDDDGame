class Guard {
    static validateDomainEvent(domainEvent) {
        if(domainEvent instanceof DomainEvent) {
            return true;
        }
        console.log(domainEvent);
        throw 'Argument exception: is not a valid domain event';
    }

    static validateHandler(handler) {
        if(handler instanceof Handler) {
            return true;
        }
        throw 'Argument exception: is not a valid handler';
    }

    static validateDispatcher(dispatcher) {
        if(dispatcher instanceof DomainEventDispatcher) {
            return true;
        }
        throw 'Argument exception: is not a valid DomainEventDispatcher';
    }

    static validateDispatcher(domain) {
        if(domain instanceof Domain) {
            return true;
        }
        throw 'Argument exception: is not a valid Domain';
    }

    static validateTest(test) {
        if(test instanceof Tests.Test) {
            return true;
        }
        throw 'Argument exception: is not a valid Test';
    }
}