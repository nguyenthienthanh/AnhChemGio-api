import database from '../connect-firebase';

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
