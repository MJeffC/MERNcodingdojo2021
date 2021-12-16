const Author = require("../models/author.model");

const healthcheckController = (req, res) => {
    res.send('controller is setup');
};

const createAuthor = (req, res) => {
    const { body } = req;
    Author.create(body)
        .then( newAuthor => res.json( newAuthor ))
        .catch((err) => res.status(400).json({ errMessage: err}));
};

const findAllAuthors = (req, res) => {
    Author.find()
        .then(( allAuthors ) => res.json( allAuthors ))
        .catch((err) => res.status(400).json({ errMessage: err}));
};

const getOneAuthor = (req, res) => {
    const { params } = req;
    Author.findOne({ _id: params.id })
        .then(( oneAuthor ) => res.json( oneAuthor ))
        .catch(( err ) => res.status(400).json({ errMessage: err }));
}

const updateOneAuthor = (req, res) => {
    const { params } = req;
    Author.findOneAndUpdate(
        { _id: params.id },
        req.body,
        { new: true, runValidators: true}
    )
        .then( updatedAuthor => res.json( updatedAuthor ))
        .catch((err) => res.status(400).json({ errMessage: err}));
};

const deleteOneAuthor = (req, res) => {
    const { params } = req;
    Author.deleteOne({ _id: params.id })
        .then( result  => res.json( result ))
        .catch((err) => res.status(400).json({ errMessage: err}));
}

module.exports = {
    healthcheckController,
    createAuthor,
    findAllAuthors,
    getOneAuthor,
    updateOneAuthor,
    deleteOneAuthor,
}