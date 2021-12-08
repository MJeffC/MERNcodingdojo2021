const productController = require('../controllers/product.controller');

module.exports = app => {
    app.get("/api/healthcheck", productController.healthcheckController);
    app.post("/api/product", productController.createProduct);
    app.get("/api/product", productController.findAllProducts);
}