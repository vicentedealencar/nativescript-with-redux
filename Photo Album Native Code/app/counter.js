var observable = require("data/observable");
var redux = require("./redux-stuff");
var dialogs = require("ui/dialogs");

var model = new observable.Observable();

function onPageLoaded(args) {
  var page = args.object;
  page.bindingContext = model;
}

exports.onPageLoaded = onPageLoaded;

model.set("state", redux.store.getState());

redux.store.subscribe(function () {
    var state = redux.store.getState();
    
	model.set("state", state);
});

model.set('increment', function() {
    redux.increment();
});

model.set('decrement', function() {
    redux.decrement();
});
