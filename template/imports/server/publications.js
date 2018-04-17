import { Meteor } from 'meteor/meteor';
import { Docs } from '/imports/lib/collections.js';
import { Messages } from '/imports/lib/collections.js';
import { Notifications } from '/imports/lib/collections.js';


Meteor.publish('docs', function(){
    return Docs.find({});
});


Meteor.publish('messages', function(){
    return Messages.find({});
});


Meteor.publish('notifications', function(){
    return Notifications.find({});
});


