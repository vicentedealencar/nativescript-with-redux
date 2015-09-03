var observable = require("data/observable");
var imageSourceModule = require("image-source");
var fileSystemModule = require("file-system");
var observableArrayModule = require("data/observable-array");
var enums = require("ui/enums");

var localImagesArray = new observableArrayModule.ObservableArray();
var directory = "/res/";
function imageFromSource(imageName) {
  return imageSourceModule.fromFile(fileSystemModule.path.join(__dirname, directory + imageName));
};
var item1 = {itemImage: imageFromSource("01.jpg")}; 
var item2 = {itemImage: imageFromSource("02.jpg")}; 
var item3 = {itemImage: imageFromSource("03.jpg")}; 
var item4 = {itemImage: imageFromSource("04.jpg")}; 
var item5 = {itemImage: imageFromSource("05.jpg")}; 
var item6 = {itemImage: imageFromSource("06.jpg")}; 
localImagesArray.push([item1, item2, item3, item4, item5, item6]);
var item7 = {itemImage: imageFromSource("07.jpg")}; 
var item8 = {itemImage: imageFromSource("08.jpg")};

var photoAlbumModel = new observable.Observable();
Object.defineProperty(photoAlbumModel, "photoItems", {
    get: function () {
        return localImagesArray;
    },
    enumerable: true,
    configurable: true
})

exports.photoAlbumModel = photoAlbumModel;

photoAlbumModel.tapAction = function () {
  localImagesArray.push(item7);
  localImagesArray.push(item8);
};

photoAlbumModel.set("message", "Images added. Total images: " + localImagesArray.length);




