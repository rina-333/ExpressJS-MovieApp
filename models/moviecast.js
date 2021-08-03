'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MovieCast extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      MovieCast.belongsTo ( models.Movie, { foreignKey: "MovieId" } )
      MovieCast.belongsTo ( models.Cast, { foreignKey: "CastId" } )
    }
  };
  MovieCast.init({
    CastId: DataTypes.INTEGER,
    MovieId: DataTypes.INTEGER,
    role: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'MovieCast',
  });
  return MovieCast;
};