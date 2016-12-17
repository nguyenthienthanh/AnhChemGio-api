import database from '../connect-firebase';
import _md5 from 'md5';
const md5 = text => _md5(_md5(text));

export function getUserById(key) {
  return new Promise((resolve, reject) => {
    database.ref(`/users/${key}`).once('value').then(user => {
      resolve(user.val());
    })
      .catch(err => reject(err));
  });
}

export function createUser(user) {
  return new Promise((resolve, reject) => {

  });
}
