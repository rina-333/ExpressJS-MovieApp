const { Cast, Movie, ProductionHouse, MovieCast } = require ('../models')

class castController {
  static findAll ( req, res ) {
    Cast.findAll ( {
      order: [ [ 'id', 'ASC' ] ],
      // include: Movie,
      // include: MovieCast
    } )
      .then ( ( DataCast ) => {
        res.render ( 'homeCast', { DataCast } )
      } )
      .catch ( ( err ) => {
        res.send ( err )
      } )
  }

  static getAdd ( req, res ) {
    res.render ( 'addCast' )
  }

  static postAdd ( req, res ) {
    Cast.create ( req.body )
      .then ( () => {
        res.redirect ( '/cast' )
      } )
      .catch ( ( err ) => {
        res.send ( err )
      } )
  }

  static delete ( req, res ) {
    let id = +req.params.id
    Cast.destroy ( {
      where: { id }
    } )
      .then ( () => {
        res.redirect ( '/cast' )
      } )
      .catch ( ( err ) => {
        res.send ( err )
      } )
  }

  static getEdit ( req, res ) {
    let id = +req.params.id
    Cast.findByPk ( id )
      .then ( ( CastRecord ) => {
        res.render ( 'editCast', { CastRecord: CastRecord } )
      } )
      .catch ( ( err ) => {
        res.send ( err )
      } )
  }

  static postEdit ( req, res ) {
    let id = +req.params.id
    Cast.update ( {
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      phone_number: req.body.phone_number,
      birth_year: req.body.birth_year,
      gender: req.body.gender
    }, {
      where: { id },
      individualHooks: true
    } )
      .then ( () => {
        res.redirect ( '/cast' )
      } )
      .catch ( ( err ) => {
        res.send ( err )
      } )
  }

  static getSeeMovie ( req, res ) {
    let CastId = +req.params.id
    Cast.findByPk ( CastId, {
      include: Movie
    } )
      .then ( ( CastRecord) => {
        console.log ( CastRecord )
        res.render ( 'seeMovie', { CastRecord, yearFormatter } )
      } )
      .catch ( ( err ) => {
        res.send ( err )
      } )
  }

}

module.exports = castController