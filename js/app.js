var initialCats = [
  {
       clickCount : 0,
       name : 'Tabby',
       imgSrc : 'https://github.com/udacity/ud989-cat-clicker-premium-vanilla/blob/master/img/1413379559_412a540d29_z.jpg?raw=true',
       imgAttribution : 'https://www.flickr.com/photos/bigtallguy/434164568',
       nicknames: [
         { name: "Hammad" },
         { name: "Hammy" },
         { name: "hdawg" }
       ]
   },
   {
       clickCount : 0,
       name : 'Tiger',
       imgSrc : 'https://github.com/udacity/ud989-cat-clicker-premium-vanilla/blob/master/img/22252709_010df3379e_z.jpg?raw=true',
       imgAttribution : 'https://www.flickr.com/photos/xshamx/4154543904',
       nicknames: [
         { name: "Hammad" },
         { name: "Hammy" },
         { name: "hdawg" }
       ]
   },
   {
       clickCount : 0,
       name : 'Scaredy',
       imgSrc : 'https://github.com/udacity/ud989-cat-clicker-premium-vanilla/blob/master/img/4154543904_6e2428c421_z.jpg?raw=true',
       imgAttribution : 'https://www.flickr.com/photos/kpjas/22252709',
       nicknames: [
         { name: "Hammad" },
         { name: "Hammy" },
         { name: "hdawg" }
       ]
   },
   {
       clickCount : 0,
       name : 'Shadow',
       imgSrc : 'https://github.com/udacity/ud989-cat-clicker-premium-vanilla/blob/master/img/434164568_fea0ad4013_z.jpg?raw=true',
       imgAttribution : 'https://www.flickr.com/photos/malfet/1413379559',
       nicknames: [
         { name: "Hammad" },
         { name: "Hammy" },
         { name: "hdawg" }
       ]
   },
   {
       clickCount : 0,
       name : 'Sleepy',
       imgSrc : 'https://github.com/udacity/ud989-cat-clicker-premium-vanilla/blob/master/img/9648464288_2516b35537_z.jpg?raw=true',
       imgAttribution : 'https://www.flickr.com/photos/onesharp/9648464288',
       nicknames: [
         { name: "Hammad" },
         { name: "Hammy" },
         { name: "hdawg" }
       ]
   }
];

var ViewModel = function() {
  //self maps to ViewModel
  var self = this;

  this.catList = ko.observableArray([]);

  initialCats.forEach(function(catItem) {
    self.catList.push (new Cat(catItem));
  });

  this.currentCat = ko.observable(this.catList()[0]);

  this.incrementCounter = function() {
    this.clickCount(this.clickCount() + 1);
    this.level();
  };

  this.setCat = function(clickedCat) {
    self.currentCat(clickedCat);
  }

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
