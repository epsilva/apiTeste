const express = require('express'); 
const routes = express.Router();
const multer = require('multer');
const multerConfig = require('./config/multer');
const ProductsController = require('./controllers/ProductController');
const UploadController = require('./controllers/UploadController');

//Products
routes.get("/products", ProductsController.index); 
routes.get("/products/:id", ProductsController.show); 
routes.post("/products", ProductsController.store);
routes.put("/products/:id", ProductsController.update);
routes.delete("/products/:id", ProductsController.destroy);

//Upload
routes.post("/upload", multer(multerConfig).single('file'),  UploadController.upload);

module.exports = routes;