import mongoose from "mongoose";
import bcrypt from "bcrypt";

const UserSchema = new mongoose.Schema({
    name: {type: String, required: true, minlength: 3, maxlength: 50},
    username: {type: String, required: true, minlength: 3, maxlength: 50},
    email: {type: String, required: true, unique: true, lowercase: true, minlength: 3, maxlength: 100},
    password: {type: String, required: true, select: false, minlength: 3, maxlength: 100},
    avatar:{type: String, required: true, minlength: 3, maxlength: 100},
    background:{type: String, required: true, minlength: 3, maxlength: 100}
});

UserSchema.pre('save', async function (next){
    this.password = await bcrypt.hash(this.password, 10);
    next();
})
const User = mongoose.model("User", UserSchema);

export default User;