const {Router} = require('express');
const citasController = require('../controllers/citas.controller');
const router = Router();
router.get('/',citasController.obtenerCitas);
module.exports = router;