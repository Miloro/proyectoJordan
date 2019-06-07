let express = require('express');
let app = express();
let anteojoController = require('../controllers/anteojo.controller');

app.get('/stock', anteojoController.stockDeAnteojo);
app.get('/stockConPrecioCompra', anteojoController.stockDeAnteojoConPrecioCompra);
app.patch('/stock', anteojoController.disminuirStock);
app.post('/', anteojoController.altaModeloAnteojo);

module.exports = app;
