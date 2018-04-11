import * as express from 'express';

import AuthRouter   from './AuthRouter';
import UserRouter   from './UserRouter';
import UserService  from '../services/UserService';

/**
 * API Routes
 * -------------------------
 * Handle requests from /api
 */
export default class ApiRouter{
    private jwtAuth;
    private userService: UserService;

    constructor(jwtAuth: any, userService: UserService) {
        this.jwtAuth     = jwtAuth;
        this.userService = userService;
    }

    getRouter() {
        const router = express.Router();
        const authRouter  = new AuthRouter();
        const userRouter  = new UserRouter(this.userService);

        router.use("/auth", authRouter.getRouter());
        router.use("/users", this.jwtAuth.authenticate(), userRouter.getRouter());
        return router;
    }
}


