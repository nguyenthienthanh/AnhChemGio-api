import express from 'express';
import _md5 from 'md5';
const router = express.Router({
  mergeParams: true
}); // eslint-disable-line
import * as UserServices from '../services/user-services';

const md5 = text => _md5(_md5(text));

router.route('/:userId')
  .get((req, res, next) => {
    const userId = req.params.userId;
    console.log(userId);
    UserServices.getUserById(userId)
      .then(user => res.json(user))
      .catch(err => next(err));
  });
router.route('/create')
  .post();

module.exports = router;
