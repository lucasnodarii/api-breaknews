import User from "../models/User.js";

const loginService = (email) => {
    return User.findOne({email}).select("+password");
};

export default loginService;