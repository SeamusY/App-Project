import * as express     from 'express';
import * as bodyParser  from 'body-parser';
import * as cors        from 'cors';

import * as Knex        from 'knex';

import * as Knexfile    from './knexfile';
import config           from './config';
import jwtStrategy      from './util/auth/JwtStrategy';
import ApiRouter        from './routers/ApiRouter';
import UserService      from './services/UserService';

const knex = Knex(Knexfile[config.env]);
const app = express();

const userService = new UserService(knex);
const jwtAuth = jwtStrategy(userService);
const apiRouter = new ApiRouter(jwtAuth, userService);

app.use(bodyParser());
app.use(cors());
app.use(jwtAuth.initialize());
app.use("/api", apiRouter.getRouter());

app.listen(config.port,() => {
    console.log(`Application started at port: ${config.port}`);
});