import express from 'express';
import _md5 from 'md5';
const router = express.Router({
  mergeParams: true
}); // eslint-disable-line
import Users from '../models/user-models';

const md5 = text => _md5(_md5(text));

router.route('/')
  .get((req, res, next) => {
    const userId = req.query.userId;
    Users(userId).once('value').then(user => {
      res.json(user.val());
    });
  })
  .post((req, res, next) => {
    const {
      name,
      username,
      password
    } = req.body;
    const pass = md5(password);
    Users().update({
      name,
      username,
      pass
    });
    res.json({
      name,
      username,
      pass
    });
  });

module.exports = router;
