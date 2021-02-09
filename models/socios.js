'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class socios extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      /*this.hasOne(models.expediente, {
        foreignKey: "id"
      });

      this.hasOne(models.contacto_en_emergencias, {
        foreignKey: "id"
      });*/

      this.belongsToMany(models.membresia, {
        through: "socio_membresia",
        foreignKey: "id_socio"
      });

      this.hasMany(models.pagos, {
        foreignKey: "id_socio"
      });
    }
  };
  socios.init({
    vigencia: DataTypes.BOOLEAN,
    nombre: DataTypes.STRING,
    apellido_paterno: DataTypes.STRING,
    apellido_materno: DataTypes.STRING,
    genero: DataTypes.STRING,
    edad: DataTypes.INTEGER,
    peso: DataTypes.FLOAT,
    estatura: DataTypes.FLOAT,
    correo_electronico: DataTypes.STRING,
    direccion: DataTypes.TEXT,
    fecha_inicio: DataTypes.DATE,
    fecha_renovacion: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'socios',
  });
  return socios;
};