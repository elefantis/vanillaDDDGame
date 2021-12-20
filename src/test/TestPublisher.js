Tests.TestPublisher = class TestPublisher {
    #subscribers
    constructor() {
        this.#subscribers = [];
    }

    subscribe(subscriber) {
        this.#subscribers.push(subscriber);
    }

    addTestNameGroup(name) {
        this.#subscribers.forEach((subscriber) => {
            subscriber.addTestNameGroup(name);
        });
    }

    addSuccessfulTest(name) {
        this.#subscribers.forEach((subscriber) => {
            subscriber.addSuccessfulTest(name);
        });
    }

    addFailedTest(name, error) {
        this.#subscribers.forEach((subscriber) => {
            subscriber.addFailedTest(name, error);
        });
    }
}