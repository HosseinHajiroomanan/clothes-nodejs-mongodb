import { Schema, model } from 'mongoose';

interface IUser {
    username: string,
    password: string,
}

const userSchema = new Schema<IUser>({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
});

module.exports = model('User', userSchema);
