import InternalError from '../utils/ErrorHandlers';
import * as UserServices from '../services/user-services';

export default function accessManager(req, res, next) {
  const userId = req.body.userId || req.query.userId || req.headers['x-access-userId'];
  if (!userId) {
    next(InternalError('No userId provided.', 403));
    return;
  }
  UserServices.getById(userId)
    .then(dbUser => {
      delete dbUser.password;
      req.user = {id: userId, ...dbUser};
      next();
    })
    .catch(_error => next(InternalError(_error)));
}

// export default function accessManager(req, res, next) {
//   const token = req.body.token || req.query.token || req.headers['x-access-token'];

//   if (!token) {
//     next(InternalError('No token provided.', 403));
//     return;
//   }

//   jwt.verify(token, global.secret, (error, user) => {
//     if (error) {
//       next(InternalError('Failed to validate token.', 401));
//       return;
//     }
//     UserServices.findByUsername(user.username)
//       .then(dbUser => {
//         if (dbUser.password === user.password) {
//           UserServices.hasActivity(dbUser._id);
//           delete dbUser.password;
//           req.user = dbUser;
//           next();
//         } else {
//           next(InternalError('Failed to validate token.', 401));
//           return;
//         }
//       })
//       .catch(_error => next(InternalError(_error)));
//   });
// }

