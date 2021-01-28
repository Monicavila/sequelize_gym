'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class actividad extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  actividad.init({
    descripcion: DataTypes.STRING,
    dia: DataTypes.STRING,
    hora_inicio: DataTypes.TIME,
    hota_salida: DataTypes.TIME
  }, {
    sequelize,
    modelName: 'actividad',
  });
  return actividad;
};