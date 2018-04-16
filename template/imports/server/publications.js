import { Meteor } from 'meteor/meteor';
import { Docs } from '/imports/lib/collections.js';


Meteor.publish('docs', function(){
    return Docs.find({});
});


