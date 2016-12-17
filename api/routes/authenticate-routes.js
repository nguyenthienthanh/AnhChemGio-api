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

  });

router.route('/signup')
  .post((req, res, next) => {
    const {name, username, password} = req.body;
    UserServices.create({name, username, password})
      .then(createdUser => res.json(createdUser))
      .catch(err => next(InternalError(err)));
  });

module.exports = router;
