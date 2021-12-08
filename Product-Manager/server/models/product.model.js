const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
    },
    price: {
        type: Number,
    },
    description: {
        type: String,
    }
}, {
    timestamps: {createdAt: "created_at", updatedAt: "updated_at"}
});

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;