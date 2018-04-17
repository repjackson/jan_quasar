
import { Mongo } from 'meteor/mongo';

const Docs = new Mongo.Collection('docs');
export {Docs};

const Messages = new Mongo.Collection('messages');
export {Messages};

const Notifications = new Mongo.Collection('notifications');
export {Notifications};

const Comments = new Mongo.Collection('comments');
export {Comments};


