var ViewModel = function() {

  this.currentCat = ko.observable(new Cat());

  this.incrementCounter = function() {
    this.currentCat().clickCount(this.currentCat().clickCount() + 1);
    this.currentCat().level();
  };

};

var Cat = function() {
  this.clickCount = ko.observable(0);
  this.name = ko.observable('Tabby');
  this.imgSrc = ko.observable('img/434164568_fea0ad4013_z.jpg');
  this.imgAttribution = ko.observable('https://www.flickr.com/photos/');
  this.nicknames = ko.observableArray([
    { name: "Hammad" },
    { name: "Hammy" },
    { name: "hdawg" }
  ]);

  this.level = ko.computed(function() {
    if (this.clickCount() > 10) {
      return "Infant";
    }
    return "Newborn";
  }, this);
};

ko.applyBindings(new ViewModel());
