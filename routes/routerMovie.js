const router = require ( 'express' ).Router ()
const movieController = require ( '../controllers/controllerMovie' )

router.get ( '/', movieController.findAll )
router.get ( '/add', movieController.getAdd )
router.post ( '/add', movieController.postAdd )
router.get ( '/:id/edit', movieController.getEdit )
router.post ( '/:id/edit', movieController.postEdit )
router.get ( '/:id/delete', movieController.delete )
router.get ( '/:id/addMovieCast', movieController.getAddMovieCast )
router.post ( '/:id/addMovieCast', movieController.postAddMovieCast)

module.exports = router