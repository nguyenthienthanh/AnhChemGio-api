import express from 'express';
import InternalError from '../utils/ErrorHandlers';
import accessManager from './accessManager';

const router = express.Router({
  mergeParams: true
}); // eslint-disable-line
import * as GroupServices from '../services/group-services';

router.route('/')
  .get(accessManager, (req, res, next) => {
    const userId = req.user.id;
    GroupServices.getByUserId(userId)
      .then(groups => res.json(groups))
      .catch(err => next(InternalError(err)));
  })
  .post(accessManager, (req, res, next) => {
    const {
      name
    } = req.body;
    const peoples = {};
    const userId = req.user.id;
    delete req.user.id;
    peoples[userId] = req.user;
    GroupServices.create({
        name,
        peoples
      })
      .then(createdGroup => res.json(createdGroup))
      .catch(err => next(InternalError(err)));
  });

router.route('/:groupId/invite')
  .post((req, res, next) => {
    const groupId = req.params.groupId;
    const userId = req.body.userId;
    GroupServices.invite(groupId, userId)
      .then(user => res.json(user))
      .catch(err => next(InternalError(err)));
  });

module.exports = router;
