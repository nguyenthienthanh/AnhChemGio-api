import firebase, { database } from 'firebase';

import * as UserServices from './user-services';

export function get(groupId) {
  return new Promise((resolve, reject) => {
    database().ref(`/conversations/${groupId}/messages`)
      .orderByChild('time')
      .limitToLast(20)
      .once('value')
      .then(msg => {
        resolve(msg.val());
      })
      .catch(err => reject(err));
  });
}

export function set(groupId, message) {
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

