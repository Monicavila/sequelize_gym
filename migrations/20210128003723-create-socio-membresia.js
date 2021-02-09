'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('socio_membresia', {
     
      id_socio: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        references: {
          model: 'socios',
          key: 'id'
        }
      },
      id_membresia: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        references: {
          model: 'membresia',
          key: 'id'
        }
      },
      promociones: {
        type: Sequelize.FLOAT,
        eferences: {
          model: 'pagos',
          key: 'total_a_pagar'
        }
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
    await queryInterface.dropTable('socio_membresia');
  }
};