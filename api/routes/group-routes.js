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
    people[0] = req.user;
    GroupServices.create({name, people})
      .then(createdGroup => res.json(createdGroup))
      .catch(err => next(InternalError(err)));
  });

module.exports = router;
