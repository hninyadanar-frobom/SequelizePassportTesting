var exports = module.exports = {}
 //for register
exports.signup = function(req, res) {
 
    res.render('signup');
 
}
//for signing in
exports.signin = function(req, res) {
 
    res.render('signin');
 
}
//for home page
exports.dashboard = function(req, res) {
 
    res.render('dashboard');
 
}

//for profile
exports.profile = function(req, res) {

    /*  var user = req.session.user;
    res.render('profile', {user: user});
 
   models.User.findAll({
        include: [ models.Task ]
    })
    .then(function(users) {
        res.render('profile', {
        title: 'Sequelize: Express Example',
         users: users
    });
     });*/
    res.render('profile');
 
}


exports.logout = function(req, res) {
 
    req.session.destroy(function(err) {
 
        res.redirect('/');
 
    });
 
}

