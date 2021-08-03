const router = require ( 'express' ).Router ()
const castController = require ( '../controllers/controllerCast' )

router.get ( '/', castController.findAll )
router.get ( '/add', castController.getAdd )
router.post ( '/add', castController.postAdd )
router.get ( '/:id/edit', castController.getEdit )
router.post ( '/:id/edit', castController.postEdit )
router.get ( '/:id/delete', castController.delete )
router.get ( '/:id/seeMovie', castController.getSeeMovie )


module.exports = router