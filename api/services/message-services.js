import firebase, { database } from 'firebase';

import * as UserServices from './user-services';

export function getById(key) {
  return new Promise((resolve, reject) => {
    database().ref(`/conversations/${key}`).once('value').then(user => {
      resolve(user.val());
    })
      .catch(err => reject(err));
  });
}

export function create(groupId, message) {
  return new Promise((resolve, reject) => {
    const msgKey = database().ref()
      .child(`/conversations/${groupId}/messages`)
      .push().key;
    database().ref(`/conversations/${groupId}/messages/${msgKey}`)
      .update({...message, time: firebase.database.ServerValue.TIMESTAMP})
      .then(resolve({id: msgKey, ...message, time: firebase.database.ServerValue.TIMESTAMP}))
      .catch(err => reject(err));
  });
}

export function invite(groupId, userId) {
  return new Promise((resolve, reject) => {
    UserServices.getById(userId)
      .then(user => {
        delete user.pass;
        database()
          .ref(`/conversations/${groupId}/peoples/${userId}`)
          .update(user);
        resolve({id: userId, ...user});
      })
      .catch(err => reject(err));
  });
}
