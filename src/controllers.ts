/// <reference path="../typings/tsd.d.ts" />
/// <reference path="./services.ts" />

import IChatUser = Services.IChatUser;
import IProfile = Services.IProfile;
import IProfileService = Services.IProfileService;
import IChatsService = Services.IChatsService;

interface IChatsScope extends ng.IScope {
    chats: IChatUser[];
    remove(chat: IChatUser);
    chat: IChatUser;
}

interface IProfileScope extends ng.IScope {
    profile: IProfile;
}

angular.module('unify.controllers', [])

.controller('MatchCtrl', function() {})

.controller('ChatsCtrl', function($scope: IChatsScope, Chats: IChatsService) {

  $scope.chats = Chats.all();
  $scope.remove = function(chat: IChatUser) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope: IChatsScope, $stateParams, Chats: IChatsService) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('ProfileCtrl', function($scope: IProfileScope, Profile: IProfileService) {
  $scope.profile = Profile.get();
});


class MatchCtrl {
    constructor() { }
}

class ChatsCtrl {
    public $inject = ['Chats'];
    chats: IChatUser[];
    constructor(
        public Chats: Services.IChatsService
    ) {
        this.chats = Chats.all();
    }
    remove(chat: IChatUser) {
        this.Chats.remove(chat);
    };
}

class ProfileCtrl {
    profile : IProfile;
    constructor(public Profile: Services.IProfileService) {
        this.profile = Profile.get();
    }
}

interface IStateParams extends ng.ui.IStateParamsService {
    chatId: string;
}

class ChatDetailCtrl {
    public $inject = ['Chats', '$stateParams'];
    chat: IChatUser;
    constructor(
        public Chats: Services.IChatsService,
        public $stateParams: IStateParams
    ) {
        this.chat = Chats.get($stateParams.chatId);
    }

}

angular.module('unify.controllers', [])

    .controller('MatchCtrl', MatchCtrl)

    .controller('ChatsCtrl', ChatsCtrl)

    .controller('ChatDetailCtrl', ChatDetailCtrl)

    .controller('ProfileCtrl', ProfileCtrl);