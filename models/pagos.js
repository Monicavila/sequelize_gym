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
      this.belongsTo(models.socios, {
        foreignKey: "id_socio"
      });

      this.belongsTo(models.membresia, {
        foreignKey: "id_membresia"
      });
    }
  };
  pagos.init({
    id_socio: DataTypes.INTEGER,
    id_membresia: DataTypes.INTEGER,
    total_a_pagar: DataTypes.NUMERIC,
    fecha_pago: DataTypes.DATE,
    tipo_pago: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'pagos',
  });
  return pagos;
};