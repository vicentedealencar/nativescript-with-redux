var redux = require("./node_modules/redux");

var INCREMENT = 'INCREMENT';
var DECREMENT = 'DECREMENT';

var initialState = 0;
var reducer = function (state, action) {
    if (typeof state === 'undefined') {
    	state =  initialState;
	}

    switch(action.type) {
        case INCREMENT:
            return state + 1;
        case DECREMENT:
            return state - 1;
        default:
            return state;
    }
};

var store = redux.createStore(reducer);

exports.store = store;

exports.increment = function() {
    store.dispatch({
        type: INCREMENT
    });
}

exports.increment = function() {
    store.dispatch({
        type: DECREMENT
    });
}