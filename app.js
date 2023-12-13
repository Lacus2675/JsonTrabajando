const express = require('express');
const app = express();
const path = require('path');

app.use(express.static('public'));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'))
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.listen(3000, ()=>{
    console.log('Servidor corriendo en puerto 3000');
 });

 app.get('/', (req,res)=>{
    res.render(__dirname  + '/views/home.ejs');
});

const rutasProductos = require("./routes/productosRoutes")
app.use("/", rutasProductos )