'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class expediente extends Model {
    
    static associate(models) {
      /*this.belongsTo(models.socios, {
        foreignKey: "id_socio"
      });*/
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