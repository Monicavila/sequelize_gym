'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class pagos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  pagos.init({
    id_usuario: DataTypes.INTEGER,
    id_membresia: DataTypes.INTEGER,
    total_a_pagar: DataTypes.FLOAT,
    fecha_pago: DataTypes.DATE,
    tipo_pago: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'pagos',
  });
  return pagos;
};