
var redux = require("./node_modules/redux");

var PHOTO_ADDED = 'PHOTO_ADDED';

var initialState = [];
var reducer = function (state, action) {
    if (typeof state === 'undefined') {
    	state =  initialState;
	}

	switch (action.type) {
		case PHOTO_ADDED:
			return state.concat({itemImage: action.picture});
		default:
        	return state;
    }
}

var store = redux.createStore(reducer);

exports.store = store;

exports.photoAdded = function(picture) {
    store.dispatch({
		type: PHOTO_ADDED,
        picture: picture
	});
}

var directory = "/res/";
function imageFromSource(imageName) {
  return imageSourceModule.fromFile(fileSystemModule.path.join(__dirname, directory + imageName));
};