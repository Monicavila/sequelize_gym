'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('instructores', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nombre_instructor: {
        type: Sequelize.STRING
      },
      apellido_paterno_instructor: {
        type: Sequelize.STRING
      },
      apellido_materno_instructor: {
        type: Sequelize.STRING
      },
      edad_instructor: {
        type: Sequelize.INTEGER
      },
      especialidad: {
        type: Sequelize.INTEGER
      },
      celular_instructor: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('instructores');
  }
};