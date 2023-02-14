import User from "../models/User.js";

const userServices = {
  createUserService: function (body) {
    return User.create(body);
  },
  findAllService: function () {
    return User.find();
  },
  findByIdService: function (id) {
    return User.findById(id); //Esse findById é um método do mongoose
  },
  updateByIdService: function (
    id,
    name,
    username,
    email,
    password,
    avatar,
    background
  ) {
    return User.findOneAndUpdate(
      { _id: id },
      { name, username, email, password, avatar, background }
    );
  },
};

export default userServices;
