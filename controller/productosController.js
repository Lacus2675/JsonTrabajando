const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productos.json');
const productos = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const productosController = {

    list: (req, res) => {
        res.render("productos/list", { productos });
    },

    create: (req, res) => {
        res.render("productos/creacionProd");
    },

    store: (req, res) => {
        let nuevoProducto = {
            id: productos[productos.length - 1].id + 1, //Para no sobrescribir productos
            ...req.body,
            marca: req.body.marca,
            modelo: req.body.modelo,
            precio: req.body.precio
        };

        productos.push(nuevoProducto);
        fs.writeFileSync(productsFilePath, JSON.stringify(productos, null, " "));
        res.redirect("/productos/list");
    },

    show: (req, res) => {
        const productoId = parseInt(req.params.id);

        // Buscar el producto por su ID en el array de productos
        const producto = productos.find(producto => producto.id === productoId);

        if (producto) {
            res.render("productos/detalle", { producto });
        } else {
            res.status(404).send('Producto no encontrado');
        }
    }

};

module.exports = productosController;
