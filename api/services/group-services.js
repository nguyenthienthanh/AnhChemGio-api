import firebase, { database } from 'firebase';

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
      .then(resolve(group))
      .catch(err => reject(err));
  });
}
