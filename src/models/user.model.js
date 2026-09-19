import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Please provide a name"],
        unique: [true, "Name must be unique"]
    },
    email: {
        type: String,
        required: [true, "Please provide an email"],
        unique: [true, "Email must be unique"]
    },
    password: {
        type: String,
        required: [true, "Please provide a password"]
    }
}, { timestamps: true });

const UserModel = mongoose.model("Users", userSchema);

export default UserModel;