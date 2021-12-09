const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Product title is required"],
        minlength: [3, "Product title must be at least 3 characters"],
    },
    price: {
        type: Number,
        required: [true, "Price must be populated"],
        min: [0.01, "Price must be greater than $0.01."],
    },
    description: {
        type: String,
    }
}, {
    timestamps: {createdAt: "created_at", updatedAt: "updated_at"}
});

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;