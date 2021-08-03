const { Movie, ProductionHouse, Cast, MovieCast } = require ('../models')

class movieController {
  static findAll ( req, res ) {
    Movie.findAll ( {
      order: [ [ 'released_year', 'DESC' ] ],
      include: ProductionHouse
    } )
      .then ( ( DataMovie ) => {
        res.render ( 'homeMovie', { DataMovie } )
      } )
      .catch ( ( err ) => {
        res.send ( err )
      } ) 
  }

  static getAdd ( req, res ) {
    res.render ( 'addMovie' )
  }

  static postAdd ( req, res ) {
    Movie.create ( req.body )
      .then ( () => {
        // res.send ( 'sukses' )
        res.redirect ( '/movie' )
      } )
      .catch ( ( err ) => {
        res.send ( err )
      } )
  }

  static delete ( req, res ) {
    let id = +req.params.id
    Movie.destroy ( {
      where: { id }
    } )
      .then ( () => {
        res.redirect ( '/movie' )
      } )
      .catch ( ( err ) => {
        res.send ( err )
      } )
  }

  static getEdit ( req, res ) {
    let id = +req.params.id
    let MovieRecord
    Movie.findByPk ( id )
      .then ( ( data ) => {
        MovieRecord = data
        return ProductionHouse.findAll()
      } )
      .then ( ( ProductionRecord ) => {
        res.render ( 'editMovie', { MovieRecord, ProductionRecord } )
      } )
      .catch ( ( err ) => {
        res.send ( err )
      } )
  }

  static postEdit ( req, res ) {
    let id = +req.params.id
    Movie.update ( {
      name: req.body.name,
      released_year: req.body.released_year,
      genre: req.body.genre,
      ProductionHouseId: +req.body.ProductionHouseId
    }, {
      where: { id }
    } )
      .then ( () => {
        res.redirect ( '/movie' )
      } )
      .catch ( ( err ) => {
        res.send ( err )
      } )
  }

  static getAddMovieCast ( req, res) {
    let MovieIdParam = +req.params.id
    let MovieRecord
    let MovieCastRecord
    MovieCast.findAll ( {
      where : {
        MovieId: MovieIdParam
      }, 
      include: [ Movie, Cast ] 
    } )
      .then ( ( DataMovieCast ) => {
        MovieCastRecord = DataMovieCast
        return Movie.findAll ()
      } )
      .then ( ( DataMovie ) => {
        MovieRecord = DataMovie
        return Cast.findAll ()
      } )
      .then ( ( CastRecord ) => {
        res.render ( 'addMovieCast', { CastRecord, MovieCastRecord, MovieRecord } )
      } )
      .catch ( ( err ) => {
        res.send ( err )
      } )
  }

  static postAddMovieCast ( req, res ) {
    let id = +req.params.id
    MovieCast.create ( {
      CastId : req.body.CastId,
      MovieId : id,
      role : req.body.role
    } )
      .then ( () => {
        res.redirect ( '/movie' )
      } )
      .catch ( ( err ) => {
        res.send ( err )
      } )
  }


}

module.exports = movieController