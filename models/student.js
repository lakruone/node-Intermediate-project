module.exports = (sequelize, DataTypes) => {
    var Student = sequelize.define('Student', {
        firstname: DataTypes.TEXT,
        lastname: DataTypes.TEXT,
        age: DataTypes.INTEGER,
    });
  
    // Class Method - associations
    Student.associate = function(models) {
      Student.belongsTo(models.User, {
        foreignKey: {
          name: 'userId'
        }
      });

      Student.belongsTo(models.University, {
        foreignKey: {
          name: 'universityId'
        }
      });
      
    };
  
    return Student;
  };