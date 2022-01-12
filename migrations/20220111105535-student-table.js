const addDefaultColumns = require('../addDefaultColumns');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Students', addDefaultColumns({
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT
      },
      firstname: {
        type: Sequelize.STRING
      },
      lastname: {
        type: Sequelize.STRING
      },
      age: {
        type: Sequelize.INTEGER
      },
      universityId: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          key: 'id',
          model: 'Universities',
          as: 'universityId'
        }
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull:false,
        references: {
          key: 'id',
          model: 'Users',
          as: 'userId'
        }
      }
    }));
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Students');
  }
};
