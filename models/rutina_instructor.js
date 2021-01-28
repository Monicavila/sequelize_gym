'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class rutina_instructor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  rutina_instructor.init({
    id_rutina: DataTypes.INTEGER,
    id_instructor: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'rutina_instructor',
  });
  return rutina_instructor;
};