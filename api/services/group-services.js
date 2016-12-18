import firebase, { database } from 'firebase';

import * as UserServices from './user-services';

export function getById(key) {
  return new Promise((resolve, reject) => {
    database().ref(`/users/${key}`).once('value').then(user => {
      resolve(user.val());
    })
      .catch(err => reject(err));
  });
}

export function create(group) {
  return new Promise((resolve, reject) => {
    const key = database().ref().child('conversations').push().key;
    database().ref(`/conversations/${key}`)
      .update(group)
      .then(resolve({id: key, ...group}))
      .catch(err => reject(err));
  });
}

export function invite(groupId, userId) {
  return new Promise((resolve, reject) => {
    UserServices.getById(userId)
      .then(user => {
        database()
          .ref(`/conversations/${groupId}/peoples/${userId}`)
          .update(user);
        resolve({id: userId, ...user});
      })
      .catch(err => reject(err));
  });
}
