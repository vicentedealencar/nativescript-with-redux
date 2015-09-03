var observable = require("data/observable");
var redux = require("./redux-stuff");

var counterModel = new observable.Observable();

Object.defineProperty(counterModel, "count", {
    get: function () {
        return redux.store.getState();
    },
});

counterModel.increment = redux.increment;

counterModel.decrement = redux.decrement;

exports.counterModel = counterModel;
