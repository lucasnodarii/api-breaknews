import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name: {type: String, required: true, minlength: 3, maxlength: 50},
    username: {type: String, required: true, minlength: 3, maxlength: 50},
    email: {type: String, required: true, unique: true, minlength: 3, maxlength: 100},
    password: {type: String, required: true, minlength: 3, maxlength: 100},
    avatar:{type: String, required: true, minlength: 3, maxlength: 100},
    background:{type: String, required: true, minlength: 3, maxlength: 100}
});

const User = mongoose.model("User", UserSchema);

export default User;