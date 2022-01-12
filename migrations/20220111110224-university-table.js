const addDefaultColumns = require('../addDefaultColumns');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Universities', addDefaultColumns({
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT
      },
      name: {
        type: Sequelize.STRING
      },
      country: {
        type: Sequelize.STRING,
        allowNull: true
      }
    }));
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Universities');
  }
};
