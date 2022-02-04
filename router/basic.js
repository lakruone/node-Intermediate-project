const { default: axios } = require('axios');
const Router = require('koa-router');

const router = new Router();

router.get('/', async ctx => {
    ctx.body = {
        status: 200,
        message: 'you are in public route. The data is not protected here' 
    }
});

router.get('/protected', async ctx => {

    try {
        // const accessToken = ctx.request.header.authorization.split(' ')[1];
        const accessToken = ctx.request.header.authorization;
        console.log(accessToken);

        const auth0Response = await axios.get('https://dev-t3uksfcn.us.auth0.com/userinfo', {
            headers: {
                authorization: accessToken
            }
        });

        const userInfo = auth0Response.data;
        userInfo.message = 'you are in protected route';
        console.log(userInfo);

        ctx.body = {
            status: 200,
            message: userInfo
        }
        
    } catch (error) {
        ctx.status = 500,
        ctx.body = {
            status: 'Error',
            message: error.message
        };
    }
});

module.exports = router;