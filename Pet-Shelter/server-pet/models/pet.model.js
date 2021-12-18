const mongoose = require('mongoose');

const PetSchema = new mongoose.Schema({
    petName: {
        type: String,
        require: [true, "Pet Name is required"],
        minlength: [3, "Pet Name must be at least 3 characters long"],
    },
    petType: {
        type: String,
        require: [true, "Pet Type is a required"],
        minlength: [3, "Pet Type must be at least 3 characters long"],
    },
    petDescription: {
        type: String,
        require: [true, "Pet Description is required"],
        minlength: [3, "Pet Description must be at least 3 characters long"],
    },
    petSkill: [],
}, {
    timestamps: {createdAt: "created_at", updatedAt: "updated_at"}
});

const Pet = mongoose.model('Pet', PetSchema);

module.exports = Pet;