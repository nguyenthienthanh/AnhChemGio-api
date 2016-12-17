import database from './connect-firebase';

const key = database.ref().child('users').push().key;

module.exports = database.ref(`/users/${key}`);