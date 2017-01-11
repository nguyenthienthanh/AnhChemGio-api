import firebase, {
  database
} from 'firebase';

import * as UserServices from './user-services';

export function getById(key) {
  return new Promise((resolve, reject) => {
    database().ref(`/conversations/${key}`).once('value').then(conversation => {
        resolve(conversation.val());
      })
      .catch(err => reject(err));
  });
}

export function create(conversation) {
  return new Promise((resolve, reject) => {
    const key = database().ref().child('conversations').push().key;
    database()
      .ref(`/conversations/${key}`)
      .update({conversationID: key, lastMessage: '', time: firebase.database.ServerValue.TIMESTAMP, ...conversation})
      .then(resolve({
        id: key,
        ...conversation
      }))
      .catch(err => reject(err));
  });
}

export function invite(conversationId, userId) {
  return new Promise((resolve, reject) => {
    UserServices.getById(userId)
      .then(user => {
        database()
          .ref(`/conversations/${conversationId}/peoples/${userId}`)
          .update(user);
        resolve({
          id: userId,
          ...user
        });
      })
      .catch(err => reject(err));
  });
}

// Lấy DS group cua thanh vien
export function getByUserId(userId){
  return new Promise((resolve,reject) =>{
    database()
      .ref(`/conversations`)
      .once('value')
      .then(conversations => {
        let groups = {};
        for(const id in conversations.val()) {
          const peoples = conversations.val()[id].peoples;
          if (peoples && peoples[userId]) {
            groups[id] = conversations.val()[id];
          }
        }
        resolve(groups);
      })
      .catch(err => reject(err));
  });
}
 // DS user trong group.
export function get(conversationsid) {
  return new Promise((resolve, reject) => {
    database().ref(`/conversations/${conversationsid}/user`)
      .once('value')
      .then(user => {
        resolve(user.val());
      })
      .catch(err => reject(err));
  });
}
