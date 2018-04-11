// const login = require('./google');
// const express = require('express');
// const app = express();

// export default class Route{
//     private jwtAtuh;
//     private userid;
    
//     constructor(jwtToken, userid){
//         this.jwtToken = jwtToken;
//         this.userid = userid;
//     }
//     getRouter(){
//         const router = express();
//         const AuthToken = new login();
//         const user = new loginUser();
//         router.use("/verify", login.getRouter());
//         router.use("/user", this.jwtAuth.authenticate(), login.getRouter());
//         return router;
//     }
// }