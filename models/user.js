module.exports = (sequelize, DataTypes) => {
    var User = sequelize.define('User', {
      email: DataTypes.TEXT,
      password: DataTypes.TEXT,
      role: DataTypes.INTEGER,
    },{
      charset: 'utf8',
      collate: 'utf8_general_ci'
    });
  
    // Class Method - associations
    User.associate = function(models) {
    //   User.belongsTo(models.Student, {
    //     foreignKey: {
    //       name: 'userId'
    //     }
    //   });
    };
  
    return User;
  };