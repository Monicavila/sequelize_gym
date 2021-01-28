'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class socio_rutina extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  socio_rutina.init({
    id_socio: DataTypes.INTEGER,
    id_rutina: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'socio_rutina',
  });
  return socio_rutina;
};