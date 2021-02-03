'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('rutinas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_actividad: {
        allowNull: false,
        autoIncrement: true,
        type: Sequelize.INTEGER
      },
      actividad: {
        type: Sequelize.STRING
      },
      dia: {
        type: Sequelize.STRING
      },
      hora_inicio: {
        type: Sequelize.TIME
      },
      hota_salida: {
        type: Sequelize.TIME
      },
      observaciones: {
        type: Sequelize.TEXT
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
    await queryInterface.dropTable('rutinas');
  }
};