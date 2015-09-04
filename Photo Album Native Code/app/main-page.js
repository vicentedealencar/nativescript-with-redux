var observable = require("data/observable");
var redux = require("./photos-store");
var dialogs = require("ui/dialogs");

var model = new observable.Observable();

function onPageLoaded(args) {
  var page = args.object;
  page.bindingContext = model;
}

exports.onPageLoaded = onPageLoaded;


model.set("photoItems", redux.store.getState());

redux.store.subscribe(function () {
    var state = redux.store.getState();
    //dialogs.alert(state.toString())
	model.set("photoItems", state);
	model.set("message", 'x: ' + state.length);
});

model.tapAction = function() {
	redux.photoAdded(model.get("photoItems").length);
};

