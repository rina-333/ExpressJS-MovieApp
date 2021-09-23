'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cast extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */

    fullName () {
      return this.first_name + " " + this.last_name
    }


    static associate(models) {
      // define association here
      Cast.belongsToMany ( models.Movie, {
        through: "MovieCasts",
        foreignKey: "MovieId"
      } )
    }
  };
  Cast.init({
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    phone_number: DataTypes.STRING,
    birth_year: DataTypes.INTEGER,
    gender: DataTypes.STRING
  }, {
    hooks: {
      beforeCreate: ( newInstance, option ) => {
        if ( !newInstance.last_name ) {
          newInstance.last_name = newInstance.first_name
        }
      },
      beforeUpdate: ( newInstance, option ) => {
        if ( !newInstance.last_name ) {
          newInstance.last_name = newInstance.first_name
        }
      }
    },
    sequelize,
    modelName: 'Cast',
  });
  return Cast;
};