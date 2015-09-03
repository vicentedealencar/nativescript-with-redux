var redux = require("redux");

var initialState = 0;
var reducer = function (state, action) {
    if (typeof state === 'undefined') {
    	return initialState;
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

exports.store = store;