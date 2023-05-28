const {Router} = require('express');
const citasController = require('../controllers/citas.controller');
const router = Router();
router.get('/',citasController.obtenerCitas);
router.get('/:cb',citasController.obtenerCita);
router.post('/insertar',citasController.insertarCita);
router.put('/actualizar/:cb',citasController.actualizarCita);
router.delete('/eliminar/:cb',citasController.eliminarCita);
module.exports = router;