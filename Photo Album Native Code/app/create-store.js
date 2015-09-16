var redux = require("./node_modules/redux");
var photos = require('./photos-duck');
var counter = require('./counter-duck');
var reduceReducers = require('./node_modules/reduce-reducers');

var reducer = reduceReducers(
    photos.reducer, 
    counter.reducer
);

exports.createAppStore = function () {
	var store = redux.createStore(reducer);

    return store;
}
