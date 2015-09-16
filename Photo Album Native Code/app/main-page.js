var imageSourceModule = require("image-source");
var fileSystemModule = require("file-system");
var cameraModule = require("camera");

var observable = require("data/observable");
var dialogs = require("ui/dialogs");
var redux = require("./create-store");
var pDuck = require("./photos-duck");

var model = new observable.Observable();

function onPageLoaded(args) {
  var page = args.object;
  page.bindingContext = model;
}

exports.onPageLoaded = onPageLoaded;

var store = redux.createAppStore();


model.set("photoItems", store.getState());

store.subscribe(function () {
    var state = store.getState();
    //dialogs.alert(state.toString())
	model.set("photoItems", state);
	model.set("message", 'x: ' + (state.length || 0));
});

var i = 1;
model.tapAction = function() {
    var image = imageFromSource("0" + i++ + ".jpg");
    
	pDuck.photoAdded(image);
};

model.takePhoto = function() {
    
	cameraModule.takePicture({
        width: 300,
        height: 300,
        keepAspectRatio: true
    }).then(function (picture) {
        
        pDuck.photoAdded(picture);

        var file = {
            "Filename": Math.random().toString(36).substring(2, 15) + ".jpg",
            "ContentType": "image/jpeg",
            "base64": picture.toBase64String(enums.ImageFormat.jpeg, 100)
        };

        everlive.Files.create(file,
            function (data) {},
            function (error) {});
    });
};

var directory = "/res/";
function imageFromSource(imageName) {
  return imageSourceModule.fromFile(fileSystemModule.path.join(__dirname, directory + imageName));
};
