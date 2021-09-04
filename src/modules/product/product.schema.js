import { Schema, model } from "mongoose";

const ProductSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
        default: 0
    },
    quantity: {
        type: Number,
        require: true
    },
    images: {
        url: String,
    }
}, {
    timestamps: true,
    versionKey: false
});

export default model('Product', ProductSchema);