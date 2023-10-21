import mongoose from "mongoose";

// this is the model(schema) of each product in the db:


// this is a schema only for the reviews in the website:
const reviewSchema = mongoose.Schema({
    user: { // to know which user added this review
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User"
    },
    name: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true,
    },
    comment: {
        type: String,
        required: true
    },
}, {
    timestamps: true,
})

//this is the schema for the products:
const productSchema = new mongoose.Schema({
    user: { // to know which user added each product
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User"
    },
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    brand: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    reviews: [reviewSchema],
    rating: {
        type: Number,
        required: true,
        default: 0
    },
    numReviews: {
        type: Number,
        required: true,
        default: 0
    },
    price: {
        type: Number,
        required: true,
        default: 0
    },
    countInStock: {
        type: Number,
        required: true,
        default: 0
    },
}, {
    timestamps: true, // create time stamps so we can modify and create them
});

const Product = mongoose.model("Product", productSchema);

export default Product;
