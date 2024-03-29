const mongoose = require('mongoose');
 
const JokeSchema = new mongoose.Schema({
    setup: String,
    punchline: String,
}, {
    timestamps: {createdAt: "created_at", updatedAt: "updated_at"}
});
 
const Joke = mongoose.model('Joke', JokeSchema);
 
module.exports = Joke;
