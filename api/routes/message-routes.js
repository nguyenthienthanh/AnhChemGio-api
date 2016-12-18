import express from 'express';
import InternalError from '../utils/ErrorHandlers';
import accessManager from './accessManager';
const router = express.Router({mergeParams: true});

import * as MessageServices from '../services/message-services';

router.route('/')
  .get((req, res, next) => {
    res.json(req.params.groupId);
  })
  .post((req, res, next) => {
    const {content} = req.body;
    const userId = req.user.id;
    delete req.user.id;
    delete req.user.pass;
    const user = req.user;
    MessageServices.create(req.params.groupId, {content, [userId]: user})
      .then(message => res.json(message))
      .catch(err => next(InternalError(err)));
  });

module.exports = router;
