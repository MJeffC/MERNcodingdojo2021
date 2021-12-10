const Product = require('../models/product.model');

const healthcheckController = (req, res) => {
    res.send('controller is setup');
};

const createProduct = (req, res) => {
    const { body } = req;
    Product.create(body)
        .then(( newProduct ) => res.json( newProduct ))
        .catch((err) => res.status(400).json({ errMessage: err }));
};

const findAllProducts = (req, res) => {
    Product.find()
        .then(( allProducts ) => res.json( allProducts ))
        .catch((err) => res.status(400).json({ errMessage: err}));
};

const getOneProduct = (req, res) => {
    const { params } = req;
    Product.findOne({ _id: params.id })
        .then(( oneProduct ) => res.json( oneProduct ))
        .catch(( err ) => res.status(400).json({ errMessage: err }));
}

const updateOneProduct = (req, res) => {
    const { params } = req;
    Product.findOneAndUpdate(
        { _id: params.id },
        req.body,
        { new: true, runValidators: true}
    )
        .then( updatedProduct => res.json( updatedProduct ))
        .catch((err) => res.status(400).json({ errMessage: err}));
};

const deleteOneProduct = (req, res) => {
    const { params } = req;
    Product.deleteOne({ _id: params.id })
        .then( result  => res.json( result ))
        .catch((err) => res.status(400).json({ errMessage: err}));
}

module.exports = {
    healthcheckController,
    createProduct,
    findAllProducts,
    getOneProduct,
    updateOneProduct,
    deleteOneProduct,
}