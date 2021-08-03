const router = require ( 'express' ).Router ()
const productionController = require ( '../controllers/controllerProduction' )

router.get ( '/', productionController.findAll )

module.exports = router