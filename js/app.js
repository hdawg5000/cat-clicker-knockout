var ViewModel = function() {
  this.clickCount = ko.observable(0);
  this.name = ko.observable('Tabby');
  this.imgSrc = ko.observable('img/434164568_fea0ad4013_z.jpg');
  this.imgAttribution = ko.observable('https://www.flickr.com/photos/');

  this.incrementCounter = function() {
    this.clickCount(this.clickCount() + 1);
    this.level();
  };

  this.level = ko.computed(function() {
    if (this.clickCount() > 10) {
      return "Infant";
    }
    return "Newborn";
  }, this);

};

ko.applyBindings(new ViewModel());
