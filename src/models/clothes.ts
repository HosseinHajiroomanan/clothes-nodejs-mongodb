import { Schema, model } from 'mongoose';

interface IClothes {
    name: string
    material: string
    price: number
    discount: number

}

const clothesSchema = new Schema<IClothes>({
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

module.exports = model('Clothes', clothesSchema);
