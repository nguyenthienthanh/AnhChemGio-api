import express from 'express';
import InternalError from '../utils/ErrorHandlers';
import _md5 from 'md5';
const router = express.Router({
  mergeParams: true
}); // eslint-disable-line
import * as UserServices from '../services/user-services';

const md5 = text => _md5(_md5(text));

router.route('/login')
  .post((req, res, next) => {
  	const username = req.body.username;
  	const password = req.body.password;
  	UserServices.getByUsername(username)
  		.then(user => {
  			if (user && user.password === md5(password)) {
  				res.json(user);
  			} else next(InternalError('Sai thông tin đăng nhập', 403));
  		})
  		.catch(err => next(InternalError(err)));
  });

router.route('/signup')
  .post((req, res, next) => {
    const {displayName, username, password} = req.body;
    UserServices.create({displayName, username, password})
      .then(createdUser => res.json(createdUser))
      .catch(err => next(InternalError(err)));
  });

module.exports = router;
