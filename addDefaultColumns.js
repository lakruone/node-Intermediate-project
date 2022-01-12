const _ = require('lodash');
const Sequelize = require('sequelize');

module.exports = function(table) {
  return _.extend({
    createdAt: {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: new Date()
    },
    updatedAt: {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: new Date()
    }
  }, table);
};