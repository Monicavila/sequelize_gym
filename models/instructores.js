'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class instructores extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  instructores.init({
    nombre_instructor: DataTypes.STRING,
    apellido_paterno_instructor: DataTypes.STRING,
    apellido_materno_instructor: DataTypes.STRING,
    edad_instructor: DataTypes.INTEGER,
    especialidad: DataTypes.INTEGER,
    celular_instructor: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'instructores',
  });
  return instructores;
};