const login = require('./google');
const express = require('express');
const app = express();
const userService = require('../services/UserService');
const UserRouter = require('./userRouter');

module.exports = class Route{  
    constructor(jwtToken, userid){
        this.jwtToken = jwtToken;
        this.userService =userService;
    }
    getRouter(){
        const router = express();
        const AuthToken = new login();
        const userRouter = new UserRouter(this.userService);
        router.use("/verify", AuthToken.getRouter());
        router.use("/user", this.jwtToken.authenticate(), userRouter.getRouter());
        return router;
    }
}
