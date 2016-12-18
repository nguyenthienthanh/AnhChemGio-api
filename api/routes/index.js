import express from 'express';
const router = express.Router({mergeParams: true}); // eslint-disable-line

router.use('/auth', require('./authenticate-routes'));
router.use('/users', require('./user-routes'));
router.use('/groups', require('./group-routes'));

module.exports = router;
