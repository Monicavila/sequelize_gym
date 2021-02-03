'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('socios', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      vigencia: {
        type: Sequelize.BOOLEAN
      },
      nombre: {
        type: Sequelize.STRING
      },
      apellido_paterno: {
        type: Sequelize.STRING
      },
      apellido_materno: {
        type: Sequelize.STRING
      },
      genero: {
        type: Sequelize.STRING
      },
      edad: {
        type: Sequelize.INTEGER
      },
      peso: {
        type: Sequelize.NUMERIC
      },
      estatura: {
        type: Sequelize.NUMERIC
      },
      correo_electronico: {
        type: Sequelize.STRING
      },
      direccion: {
        type: Sequelize.TEXT
      },
      fecha_inicio: {
        type: Sequelize.DATE
      },
      fecha_renovacion: {
        type: Sequelize.DATE
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
    await queryInterface.dropTable('socios');
  }
};