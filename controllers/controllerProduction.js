const { ProductionHouse } = require ('../models/index.js')

class productionController {
  static findAll ( req, res ) {
    // console.log ( ProductionHouse )
    ProductionHouse.findAll ( {
      order: [ [ 'name_prodHouse', 'ASC' ] ]
    } )
      .then ( ( DataProduction ) => {
        // console.log ( DataProduction )
        res.render ( 'homeProductionHouse', { DataProduction: DataProduction } )
        
      } )
      .catch( ( err ) => {
        res.send ( err )
      } )
  }
}

module.exports = productionController