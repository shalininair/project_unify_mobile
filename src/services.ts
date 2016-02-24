/// <reference path="../typings/tsd.d.ts" />

angular.module('unify.services', [])

.factory('Chats', function() {
    // Some fake testing data
    var chats = [{
      id: 0,
      name: 'Ben Sparrow',
      lastText: 'You on your way?',
      face: 'img/ben.png'
    }, {
      id: 1,
      name: 'Max Lynx',
      lastText: 'Hey, it\'s me',
      face: 'img/max.png'
    }, {
      id: 2,
      name: 'Adam Bradleyson',
      lastText: 'I should buy a boat',
      face: 'img/adam.jpg'
    }, {
      id: 3,
      name: 'Perry Governor',
      lastText: 'Look at my mukluks!',
      face: 'img/perry.png'
    }, {
      id: 4,
      name: 'Mike Harrington',
      lastText: 'This is wicked good ice cream.',
      face: 'img/mike.png'
    }];

    return {
      all: function() {
        return chats;
      },
      remove: function(chat) {
        chats.splice(chats.indexOf(chat), 1);
      },
      get: function(chatId) {
        for (var i = 0; i < chats.length; i++) {
          if (chats[i].id === parseInt(chatId)) {
            return chats[i];
          }
        }
        return null;
      }
    };
})

.factory('Profile', function() {
  var profile = {
    username: "fred",
    email: "fred@flintstones.com",
    firstName: "Fred",
    lastName: "Flintstone",
    age: 45,
    interests: [
        "Ruby",
        "C#",
        "Cycling"
    ],
    location: {
      city: "StockHolm",
      coordinates: {
        lat: 59.3325800,
        long: 18.0649000
      }
    },
    shareProfile: true,
    thumbnail: 'img/fred.jpg'
  };

  return {
    get: function() {
      return profile;
    }
  }
})

;
