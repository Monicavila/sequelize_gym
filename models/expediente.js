'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class expediente extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  expediente.init({
    id_socio: DataTypes.INTEGER,
    alergias: DataTypes.TEXT,
    tipo_dieta: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'expediente',
  });
  return expediente;
};