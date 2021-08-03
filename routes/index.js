const express = require ( 'express' )
const router = express.Router()

const routerMovie = require( './routerMovie' )
const routerProduction = require( './routerProduction' )
const routerCast = require ( './routerCast' )


router.use( '/movie', routerMovie )
router.use( '/production', routerProduction )
router.use( '/cast', routerCast )

router.get( '/', ( req, res ) => {
  res.render( 'home' )
} )

module.exports = router