var ViewModel = function() {

  this.currentCat = ko.observable(new Cat({
    clickCount: 0,
    name: 'Tabby',
    imgSrc: 'img/434164568_fea0ad4013_z.jpg',
    imgAttribution: 'https://www.flickr.com/photos/',
    nicknames: [
      { name: "Hammad" },
      { name: "Hammy" },
      { name: "hdawg" }
    ]

  }));

  this.incrementCounter = function() {
    this.clickCount(this.clickCount() + 1);
    this.level();
  };

};

var Cat = function(data) {
  this.clickCount = ko.observable(data.clickCount);
  this.name = ko.observable(data.name);
  this.imgSrc = ko.observable(data.imgSrc);
  this.imgAttribution = ko.observable(data.imgAttribution);
  this.nicknames = ko.observableArray(data.nicknames);

  this.level = ko.computed(function() {
    if (this.clickCount() > 10) {
      return "Infant";
    }
    return "Newborn";
  }, this);
};

ko.applyBindings(new ViewModel());
