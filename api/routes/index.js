import express from 'express';
const router = express.Router({mergeParams: true}); // eslint-disable-line

router.use('/login', require('./authenticate-routes'));
 router.use('/users', require('./user-routes'));

module.exports = router;
