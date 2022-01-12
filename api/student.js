const db = require('../models');


const createStudent = async ctx => {
    let transaction = null;
    try {
        const { User, Student} = db;
        const requestData = ctx.request.body;
        transaction = await db.sequelize.transaction();

        const createdStudent = await User.create({
            email: requestData.email,
            password: requestData.password,
            role: Number(requestData.role),
          }, { transaction });

        await Student.create({
            firstname: requestData.firstname,
            lastname: requestData.lastname,
            age: Number(requestData.age),
            userId: createdStudent.id
        }, {transaction});

        await transaction.commit();
        ctx.status = 200;
        ctx.body = createdStudent;
        return;
    } catch (error) {
        await transaction.rollback();
        ctx.status = 500;
        ctx.body = {
          status: 'Error',
          message: error.message
        };
    }

};

const getStudents = async ctx => {
    try {
        const { Student } = db;
        const students = await Student.findAndCountAll();
        return ctx.body = students;
        
    } catch (error) {
        ctx.status = 500,
        ctx.body = {
            status: 'Error',
            message: error.message
        };
    }
    
};

const getStudentById = async ctx => {
    try {
        const { Student } = db;
        const studentId = ctx.params.id;

        const student = await Student.findOne({
            where: {
              id: Number(studentId)
            }
          });

        return ctx.body = student;
        
    } catch (error) {
        ctx.status = 500,
        ctx.body = {
            status: 'Error',
            message: error.message
        };
    }

}

module.exports = {createStudent, getStudents, getStudentById};