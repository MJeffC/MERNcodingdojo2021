const productController = require('../controllers/product.controller');

module.exports = app => {
    app.get("/api/healthcheck", productController.healthcheckController);
    app.post("/api/product", productController.createProduct);
    app.get("/api/product", productController.findAllProducts);
    app.get("/api/product/:id", productController.getOneProduct);
    app.put("/api/product/:id", productController.updateOneProduct);
    app.delete("/api/product/:id", productController.deleteOneProduct);
}