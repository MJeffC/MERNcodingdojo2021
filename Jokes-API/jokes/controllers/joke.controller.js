const Joke = require("../models/joke.model");

const healthcheckController = (req, res) => {
    res.send('controller is setup');
};

const findAllJokes = (req, res) => {
    Joke.find()
        .then(( allDaJokes ) => res.json( allDaJokes ))
        .catch((err) => res.status(400).json({ errMessage: err}));
};

const createJoke = (req, res) => {
    const {body} = req;
    Joke.create(body)
        .then(( newJoke ) => res.json(newJoke))
        .catch((err) => res.status(400).json({ errMessage: err}));
};

const getOneJoke = (req, res) => {
    const { params } = req;
    Joke.findOne({_id: params.id})
        .then(( oneJoke ) => res.json( oneJoke ))
        .catch((err) => res.status(400).json({ errMessage: err}));
};

const updateOneJoke = (req, res) => {
    const { params } = req;
    Joke.findOneAndUpdate(
        { _id: params.id },
        req.body,
        { new: true, runValidators: true}
    )
        .then(( updatedJoke ) => res.json( updatedJoke ))
        .catch((err) => res.status(400).json({ errMessage: err}));
};

const deleteOneJoke = (req, res) => {
    const { params } = req;
    Joke.deleteOne({ _id: params.id })
        .then(( result ) => res.json({ result }))
        .catch((err) => res.status(400).json({ errMessage: err}));
}

module.exports = {
    healthcheckController,
    findAllJokes,
    createJoke,
    getOneJoke,
    updateOneJoke,
    deleteOneJoke
};