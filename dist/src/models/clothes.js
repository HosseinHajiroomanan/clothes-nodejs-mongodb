"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const clothesSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
    },
    material: {
        type: String,
        enum: ['Linen', 'Denim', 'Cotton', 'Leather'],
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    discount: {
        type: Number,
        min: 0,
        max: 100,
        default: 0
    }
});
module.exports = (0, mongoose_1.model)('Clothes', clothesSchema);
