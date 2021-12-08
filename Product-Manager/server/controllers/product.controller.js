const Product = require('../models/product.model');

const healthcheckController = (req, res) => {
    res.send('controller is setup');
};

const createProduct = (req, res) => {
    const { body } = req;
    Product.create(body)
        .then(( newProduct ) => res.json( newProduct))
        .catch((err) => res.status(400).json({ errMessage: err }));
};

const findAllProducts = (req, res) => {
    Product.find()
        .then(( allProducts ) => res.json( allProducts ))
        .catch((err) => res.status(400).json({ errMessage: err}));
};

module.exports = {
    healthcheckController,
    createProduct,
    findAllProducts,
}