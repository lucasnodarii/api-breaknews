import userServices from "../services/user.service.js";
import mongoose from "mongoose";

const userController = {
  createUser: async function (req, res) {
    const { name, username, email, password, avatar, background } = req.body;

    if (!name || !username || !email || !password || !avatar || !background) {
      res.status(400).send({ message: "Submit all fields for sign up" });
    }

    const createdUser = await userServices.createUserService(req.body);

    if (!createdUser) {
      return res.status(400).send({ message: "Error creating user" });
    }

    res.status(201).send({
      message: "User created successfully",
      user: {
        id: createdUser._id,
        name,
        username,
        email,
        avatar,
        background,
      },
    });
  },
  findAll: async function (req, res) {
    const users = await userServices.findAllService();

    if (users.length === 0) {
      return res.status(400).send({ message: "There are no registered users" });
    }

    res.send(users);
  },
  findById: async function (req, res) {
    const id = req.params.id;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).send({ message: "Invalid Id" });
    }

    const user = await userServices.findByIdService(id);

    if (!user) {
      return res.status(400).send({ message: "User not found" });
    }

    res.send(user);
  },
  updateById: async function (req, res) {
    const { name, username, email, password, avatar, background } = req.body;
    if (!name && !username && !email && !password && !avatar && !background) {
      res.status(400).send({ message: "Submit at least one field for update" });
    }

    const id = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).send({ message: "Invalid Id" });
    }

    const user = await userServices.findByIdService(id);
    if (!user) {
      return res.status(400).send({ message: "User not found" });
    }

    await userServices.updateByIdService(
      id,
      name,
      username,
      email,
      password,
      avatar,
      background
    );
    res.send({message: "User successfully updated"})
  },
};

export default userController;
