const addDefaultColumns = require('../addDefaultColumns');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('Users', addDefaultColumns({
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      password: {
        type: Sequelize.TEXT
      },
      role: {
        type: Sequelize.INTEGER
      }
    }));
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Users');
  }
};
