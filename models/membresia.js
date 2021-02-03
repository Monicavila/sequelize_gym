'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class membresia extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  membresia.init({
    clase: DataTypes.STRING,
    costo: DataTypes.NUMERIC,
    duracion: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'membresia',
  });
  return membresia;
};