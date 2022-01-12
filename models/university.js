module.exports = (sequelize, DataTypes) => {
    var University = sequelize.define('University', {
      name: DataTypes.TEXT,
      country: DataTypes.TEXT
    });
  
    // Class Method - associations
    University.associate = function(models) {
        // University.hasMany(models.Student, {
        //     foreignKey: {
        //       name: 'zoneId'
        //     }
        //   });
    };
  
    return University;
  };