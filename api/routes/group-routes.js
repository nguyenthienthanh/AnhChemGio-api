import express from 'express';
import InternalError from '../utils/ErrorHandlers';
import accessManager from './accessManager';

const router = express.Router({
  mergeParams: true
}); // eslint-disable-line
import * as GroupServices from '../services/group-services';

router.route('/')
  .get()
  .post(accessManager, (req, res, next) => {
    const {name} = req.body;
    const people = {};
    const userId = req.user.id;
    delete req.user.id;
    people[userId] = req.user;
    GroupServices.create({name, people})
      .then(createdGroup => res.json(createdGroup))
      .catch(err => next(InternalError(err)));
  });

router.route('/:groupId/invite')
  .post((req, res, next) => {
    const groupId = req.params.groupId;
    const userId = req.body.userId;
    GroupServices.invite(groupId, userId)
      .then(group => res.json(group))
      .catch(err => next(InternalError(err)));
  });

module.exports = router;
