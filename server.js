const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
require('dotenv').config()

const StudentRoutes = require('./router/student');
const app = new Koa();

app.use(bodyParser());

app.use(StudentRoutes.routes())
    .use(StudentRoutes.allowedMethods());



app.listen(process.env.PORT, () => {
    console.info(`App listening at port ${process.env.PORT}`);
});
