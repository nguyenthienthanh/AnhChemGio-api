
import firebase, { database } from 'firebase';
import _md5 from 'md5';
const md5 = text => _md5(_md5(text));

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
    const key = database().ref().child('users').push().key;
    database().ref(`/users/${key}`)
      .update({...user, password: md5(user.password)})
      .then(resolve({...user, password: md5(user.password)}))
      .catch(err => reject(err));
  });
}
