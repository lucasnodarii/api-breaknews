import User from "../models/User.js";
import jwt from "jsonwebtoken";

const authService = {
  loginService: function (email) {
    return User.findOne({ email }).select("+password");
  },

  generateTokenService: function (id) {
    return jwt.sign({ id: id }, process.env.JWT_SECRET, { expiresIn: 86400 });
  },
};

export default authService;
