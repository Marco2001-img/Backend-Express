const {Router} = require('express')
const router  = Router()
const mitiendaController = require('../controller/miTienda.controller.js')


router.get('/todos' , mitiendaController.getUsuarios)
router.post('/registrar', mitiendaController.nuevoUsuario)
router.post('/login', mitiendaController.login)

module.exports=router