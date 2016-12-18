import firebase, { database } from 'firebase';

export function getById(key) {
  return new Promise((resolve, reject) => {
    database().ref(`/users/${key}`).once('value').then(user => {
      resolve(user.val());
    })
      .catch(err => reject(err));
  });
}

export function create(user) {
  return new Promise((resolve, reject) => {
    const key = database().ref().child('conversations').push().key;
    database().ref(`/conversations/${key}`)
      .update({...user, password: md5(user.password)})
      .then(resolve({...user, password: md5(user.password)}))
      .catch(err => reject(err));
  });
}
