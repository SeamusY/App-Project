import * as express from 'express';
import UserService from '../services/UserService';

/**
 * User Routes
 * -------------------------
 * Handle requests from /users
 */
export default class UserRouter{
    private userService: UserService;

    constructor(userService: UserService){
        this.userService = userService;
    }

    getRouter(){
        let router = express.Router();
        router.get("/", this.get.bind(this));
        return router;
    }

    get(req: express.Request, res: express.Response) {
        return this.userService.list()
                .then((data) => {
                    res.json(data)
                })
                .catch((err: express.Errback) => {
                    res.status(500).json(err)
                });
    }
}


