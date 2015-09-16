var INCREMENT = 'INCREMENT';
var DECREMENT = 'DECREMENT';

var initialState = 0;
exports.reducer = function (state, action) {
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

exports.increment = function() {
    return {
        type: INCREMENT
    };
}

exports.decrement = function() {
    return {
        type: DECREMENT
    };
}