const login = require('./google');
const express = require('express');
const app = express();

module.exports = class Route{  
    constructor(jwtToken, userid){
        this.jwtToken = jwtToken;
        this.userid = userid;
    }
    getRouter(){
        const router = express();
        const AuthToken = new login();
        const user = new loginUser(this.userid);
        router.use("/verify", AuthToken.getRouter());
        router.use("/user", this.jwtAuth.authenticate(), login.getRouter());
        return router;
    }
}