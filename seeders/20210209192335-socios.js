'use strict';

const socios = [
  {
    "vigencia": true,
    "nombre": "Sari",
    "apellido_paterno": "Moreno",
    "apellido_materno": "Barrera",
    "genero": "femenino",
    "edad": 65,
    "peso": 68,
    "estatura": 1.54,
    "correo_electronico": "sari@gmail.com",
    "direccion": "Alegría 23",
    "fecha_inicio": "2021-02-08",
    "fecha_renovacion": "2022-02-08",
    "updatedAt": "2021-02-08T06:32:30.852Z",
    "createdAt": "2021-02-08T06:32:30.852Z"
  },
  {
    "vigencia": true,
    "nombre": "Miguel",
    "apellido_paterno": "Avila",
    "apellido_materno": "Hernandes",
    "genero": "masculino",
    "edad": 65,
    "peso": 78,
    "estatura": 1.62,
    "correo_electronico": "mike@gmail.com",
    "direccion": "Alegría 23",
    "fecha_inicio": "2021-02-08",
    "fecha_renovacion": "2022-02-08",
    "updatedAt": "2021-02-08T06:32:30.852Z",
    "createdAt": "2021-02-08T06:32:30.852Z"
  }
]

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('socios', socios, {});

    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
