'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class socio_membresia extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  socio_membresia.init({
    id_socio: DataTypes.INTEGER,
    id_membresia: DataTypes.INTEGER,
    promociones: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'socio_membresia',
  });
  return socio_membresia;
};