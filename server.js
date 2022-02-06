const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
require('dotenv').config()
const cors = require('@koa/cors');
const jwt = require('koa-jwt');
const jwtrsa = require('jwks-rsa');
const schedule = require('node-schedule');

const StudentRoutes = require('./router/student');
const BasicRoutes = require('./router/basic');
const backgroundJobs = require('./api/jobs/backgroundJobs');
const app = new Koa();

//Execute background jobs
backgroundJobs();

const whitelist = [
    '/',
    '/student/'
];

const jwtCheck = jwt({
    secret: jwtrsa.koaJwtSecret({
        jwksUri: process.env.AUTH_JWKS_URI,
        cache: true,
        cacheMaxEntries: 5
    }),
    audience: process.env.AUTH_CLIENT_ID,
    issuer: process.env.AUTH_DOMAIN,
    algorithms: ['RS256']
}).unless({ path: whitelist })

app.use(cors());
app.use(jwtCheck);

app.use(bodyParser());

app.use(StudentRoutes.routes())
    .use(StudentRoutes.allowedMethods());
app.use(BasicRoutes.routes())
    .use(BasicRoutes.allowedMethods());



app.listen(process.env.PORT, () => {
    console.info(`App listening at port ${process.env.PORT}`);
});
