const login = require('./google');
const express = require('express');
const app = express();

export default class Route{
    constructor(option){
        this.email = option.email;
        this.id = option.user;
    }
    postRouter() {
        router.use("/user", login.getRouter());
        return router;
    }
    getRouter(){
        router.use("/user", login.getRouter());
        return router;
    }
}