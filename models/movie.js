'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Movie extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Movie.belongsTo ( models.ProductionHouse, {
        foreignKey: 'ProductionHouseId'
      } )
      Movie.belongsToMany ( models.Cast, { 
        through: "MovieCasts"
      } )
    }
  };
  Movie.init({
    name: DataTypes.STRING,
    released_year: {
      type: DataTypes.INTEGER,
      validate: {
        isLeap ( num ) {
          if ( ( num % 4 === 0 ) && ( num % 100 != 0 ) || ( num % 400 == 0 ) ) {
            throw new Error ( "It's Leap Year" )
          } 
        }
      }
    },
    genre: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Movie',
  });
  return Movie;
};