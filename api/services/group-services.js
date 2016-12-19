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
      .update(conversation)
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

// Lấy DS group, DS user trong group.
export function get(userId){
  return new Promise((resolve,reject) =>{
    database()
      .ref(`/conversations/$conversationsid/peoples/${userId}`)
      .once('value')
      .then(conversations => resolve(conversations))
      .catch(err => reject(err));
  });
}
