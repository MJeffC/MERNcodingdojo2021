const mongoose = require('mongoose');

const AuthorSchema = new mongoose.Schema({
    name: {
        type: String,
        require: [true, "Author name is required"],
        minlength: [3, "Author name has to be at least 3 characters long"]
    }
}, {
    timestamps: {createdAt: "created_at", updatedAt: "updated_at"}
});

const Author = mongoose.model("Author", AuthorSchema);

module.exports = Author;