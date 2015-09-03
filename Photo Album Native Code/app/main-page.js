var modelModule = require("./counter");
var model = modelModule.counterModel;

function onPageLoaded(args) {
  var page = args.object;
  page.bindingContext = model;
}

exports.onPageLoaded = onPageLoaded;
