'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class rutina extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  rutina.init({
    id_actividad: DataTypes.INTEGER,
    observaciones: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'rutina',
  });
  return rutina;
};