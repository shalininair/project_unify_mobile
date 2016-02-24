/// <reference path="../typings/tsd.d.ts" />

module Services {
    export interface IChatsService {
        all(): Array<IChatUser>;
        remove(chat: IChatUser);
        get(chatId: string);
    }

    export interface IChatUser {
        id: Number;
        name: String;
        lastText: String;
        face: String;
    }

    export class Chats implements IChatsService {
        chats: Array<IChatUser>;
        constructor() {
            this.chats = [{
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
        }
        all() {
            return this.chats;
        };
        remove(chat: IChatUser) {
            this.chats.splice(this.chats.indexOf(chat), 1);
        };
        get(chatId: string) {
            for (var i = 0; i < this.chats.length; i++) {
                if (this.chats[i].id === parseInt(chatId)) {
                    return this.chats[i];
                }
            }
            return null;
        }
    }

    export interface IProfileService {
        get() : IProfile;
    }

    export interface IProfile {
        username: string,
        email: string,
        firstName: string,
        lastName: string,
        age: number,
        interests: string[],
        location: {
            city:string,
            coordinates: {
                lat: number,
                long: number
            }
        },
        shareProfile: boolean,
        thumbnail: string
    }

    export class Profile implements IProfileService {
        get() {
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

            return profile;
        }

    }
}

angular.module('unify.services', [])
       .service('Chats', Services.Chats)
       .service('Profile', Services.Profile);
