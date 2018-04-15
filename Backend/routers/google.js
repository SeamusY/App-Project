const express =require('express');
const axios =require('axios');
const jwtSimple =require('jwt-simple');
const config = require('../config/secretconfigs');
const UserService = require('../services/UserService');
const { NODE_ENV } = require('../config/server-config');
const knexFile = require('../knexfile')[NODE_ENV];
const knex = require('knex')(knexFile);
const app = express();
const router = express.Router();

class AuthRouter{
    constructor() {
    }
    getRouter() {
        const router = express.Router();
        router.post("/google", this.loginWithGoogle.bind(this));
        return router;
    }
    async loginWithGoogle(req, res) {
        const accessToken = req.body.accessToken;
        if (!accessToken) { 
            res.sendStatus(401);
        }
        try {
            let Userservice = new UserService();
            const authResult  = await axios.get(`https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${accessToken}`);
            if (authResult.data.error) {
                res.sendStatus(401);
            }
            if(Userservice.findid(authResult.data.email) != null || undefined){
                console.log(authResult.data);
                let userid = Userservice.create(authResult.data);
                const token = jwtSimple.encode({ id: accessToken, info: authResult.data }, config.jwtSecret);
                res.json({ token: token, id:userid, email: authResult.data.email, name: authResult.data.name});
            }
                
            
        } catch(err) {
            console.log("ERROR " + err)
            res.sendStatus(401);
        }
    }
}

module.exports = AuthRouter;