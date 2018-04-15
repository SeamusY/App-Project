const passport = require('passport')
const PassportJWT = require('passport-jwt');
const users = require('../services/UserService');
const config = require('../config/secretconfigs');

module.exports = function(userService){
    const strategy = new PassportJWT.Strategy({
        secretOrKey     : config.jwtSecret,
        jwtFromRequest  : PassportJWT.ExtractJwt.fromAuthHeaderAsBearerToken()
    }, async (payload, done) => { 
        console.log(payload);
        // const user = await userService.findByEmail(payload.id);
        // return (user) ? done(null, {id: user.id}) : done(new Error("User not found"), null);
    });

    passport.use(strategy);

    return {
        initialize: () => passport.initialize(),
        authenticate: () => passport.authenticate("jwt", config.jwtSession)
    };
}
