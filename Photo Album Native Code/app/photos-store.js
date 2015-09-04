var imageSourceModule = require("image-source");
var fileSystemModule = require("file-system");

var redux = require("./node_modules/redux");

var PHOTO_ADDED = 'PHOTO_ADDED';

var initialState = [];
var reducer = function (state, action) {
    if (typeof state === 'undefined') {
    	state =  initialState;
	}

	switch (action.type) {
		case PHOTO_ADDED:
            var i = action.i;
			return state.concat({itemImage: imageFromSource("0" + i + ".jpg")});
		default:
        	return state;
    }
}

var store = redux.createStore(reducer);

exports.store = store;

exports.photoAdded = function(i) {
    store.dispatch({
		type: PHOTO_ADDED,
        i: i
	});
}

var directory = "/res/";
function imageFromSource(imageName) {
  return imageSourceModule.fromFile(fileSystemModule.path.join(__dirname, directory + imageName));
};