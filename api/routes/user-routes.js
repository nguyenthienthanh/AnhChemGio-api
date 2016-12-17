import express from 'express';
const router = express.Router({
  mergeParams: true
}); // eslint-disable-line
import * as UserServices from '../services/user-services';


router.route('/:userId')
  .get((req, res, next) => {
    const userId = req.params.userId;
    UserServices.getUserById(userId)
      .then(user => res.json(user))
      .catch(err => next(err));
  });
router.route('/create')
  .post();

module.exports = router;
