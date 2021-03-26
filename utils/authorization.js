const User = require('../models/user');
module.exports = {
    addUserToRequest,
};

function addUserToRequest(req, res, next) {
    //skips middleware if req.user is already defined
    if (req.user) return next();
    if (req.session && req.session.userId) {
        User.findById(req.session.userId, function (err, foundUser) {
            //defines req.user as the current session user
            req.user = foundUser;
            next();
        });
    } else {
        next();
    }
}
