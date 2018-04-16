import { Meteor } from 'meteor/meteor';
import { Stars } from '/imports/lib/collections.js';
import { Docs } from '/imports/lib/collections.js';

Meteor.publish('stars', function(){
    return Stars.find({});
});

Meteor.publish('docs', function(){
    return Docs.find({});
});


