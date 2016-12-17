import express from 'express';
const router = express.Router({mergeParams: true}); // eslint-disable-line

 router.use('/login', require('./login-routes'));

module.exports = router;
