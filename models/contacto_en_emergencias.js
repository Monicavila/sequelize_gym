'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class contacto_en_emergencias extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  contacto_en_emergencias.init({
    id_socio: DataTypes.INTEGER,
    nombre_urgencia: DataTypes.STRING,
    apellido_paterno_urgencias: DataTypes.STRING,
    apellido_materno_urgencias: DataTypes.STRING,
    celular_urgencias: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'contacto_en_emergencias',
  });
  return contacto_en_emergencias;
};