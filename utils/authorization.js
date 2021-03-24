const User = require('../models/user');
module.exports = {
    addUserToRequest,
};
// a function to add the user to a property called user on the request object
// aka req.user
function addUserToRequest(req, res, next) {
    // TODO: check if user is added to request
    if (req.user) return next(); // req.user already added!
    if (req.session && req.session.userId) {
        User.findById(req.session.userId, function (err, foundUser) {
            req.user = foundUser;
            next();
        });
    } else {
        next();
    }
}
