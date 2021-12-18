const Pet = require('../models/pet.model');

const healthcheckController = (req, res) => {
    res.send('controller is setup');
};

const createPet = (req, res) => {
    const { body } = req;
    const newPetSkill = [ req.body.petSkillOne, req.body.petSkillTwo, req.body.petSkillThree];
    req.body.petSkill = newPetSkill;
    Pet.create(body)
        .then( newPet => res.json( newPet ))
        .catch((err) => res.status(400).json( err ));
};

const findAllPets = (req, res) => {
    Pet.find()
        .then( (allPets) => res.json( allPets ))
        .catch((err) => res.status(400).json({ errMessage: err }));
};

const getOnePet = (req, res) => {
    const { params } = req;
    Pet.findOne({ _id: params.id })
        .then(( onePet ) => res.json( onePet ))
        .catch(( err ) => res.status(400).json({ errMessage: err }));
};

const updateOnePet = (req, res) => {
    const { params } = req;
    const updatedPetSkill = [ req.body.petSkillOne, req.body.petSkillTwo, req.body.petSkillThree];
    req.body.petSkill = updatedPetSkill;
    Pet.findOneAndUpdate(
        { _id: params.id },
        req.body,
        { new: true, runValidators: true}
    )
        .then( updatedPet => res.json( updatedPet ))
        .catch((err) => res.status(400).json( err ));
};

const deleteOnePet = (req, res) => {
    const { params } = req;
    Pet.deleteOne({ _id: params.id })
        .then( result  => res.json( result ))
        .catch((err) => res.status(400).json({ errMessage: err}));
}

module.exports = {
    healthcheckController,
    createPet,
    findAllPets,
    getOnePet,
    updateOnePet,
    deleteOnePet,
}