'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class socio extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  socio.init({
    vigencia: DataTypes.BOOLEAN,
    nombre: DataTypes.STRING,
    apellido_paterno: DataTypes.STRING,
    apellido_materno: DataTypes.STRING,
    genero: DataTypes.STRING,
    edad: DataTypes.INTEGER,
    peso: DataTypes.NUMERIC,
    estatura: DataTypes.NUMERIC,
    correo_electronico: DataTypes.STRING,
    direccion: DataTypes.TEXT,
    fecha_inicio: DataTypes.DATE,
    fecha_renovacion: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'socio',
  });
  return socio;
};