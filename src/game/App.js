(function() {
    var dispatcher = new DomainEventDispatcher();
    var transaction = new Transaction(dispatcher);
    var canvas = new Graphics.Canvas(transaction);

    canvas.deploy();

    transaction.dispatchEvents();
})();