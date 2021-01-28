'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('contacto_en_emergencias', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_socio: {
        type: Sequelize.INTEGER
      },
      nombre_urgencia: {
        type: Sequelize.STRING
      },
      apellido_paterno_urgencias: {
        type: Sequelize.STRING
      },
      apellido_materno_urgencias: {
        type: Sequelize.STRING
      },
      celular_urgencias: {
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
    await queryInterface.dropTable('contacto_en_emergencias');
  }
};