var PHOTO_ADDED = 'PHOTO_ADDED';

var initialState = [];
exports.reducer = function (state, action) {
    if (typeof state === 'undefined') {
    	state =  initialState;
	}

	switch (action.type) {
		case PHOTO_ADDED:
			return state.concat({itemImage: action.picture});
		default:
        	return state;
    }
};

exports.photoAdded = function(picture) {
    return {
		type: PHOTO_ADDED,
        picture: picture
	};
};
