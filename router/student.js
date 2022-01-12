const Router = require('koa-router');

const { createStudent, getStudents, getStudentById } = require('../api/student');

const router = new Router({
    prefix: '/student'
});

router.post('/', async ctx => {
    await createStudent(ctx);
});

router.get('/', async ctx => {
    await getStudents(ctx);
});

router.get('/:id', async ctx => {
    const studentId = ctx.params.id;
    await getStudentById(ctx);
});

module.exports = router;