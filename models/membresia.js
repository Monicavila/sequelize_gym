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
      this.belongsToMany(models.socios,{
        through: "socio_membresia",
        foreignKey: "id_membresia"
      });

      this.hasMany(models.pagos,{
        foreignKey: "id_membresia"
      });
    }
  };
  membresia.init({
    clase: DataTypes.STRING,
    costo: DataTypes.FLOAT,
    duracion: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'membresia',
  });
  return membresia;
};