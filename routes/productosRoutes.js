

const express = require('express');
const router = express.Router();

const productosController = require("../controller/productosController")

router.get("/productos", productosController.list);
router.get("/productos/:id", productosController.show); // Nueva ruta para detalles

router.get("/create", productosController.create);
router.post('/', productosController.store);

module.exports = router;
