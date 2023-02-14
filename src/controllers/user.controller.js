import userServices from "../services/user.service.js";

const userController = {
  createUser: async function (req, res) {
    const { name, username, email, password, avatar, background } = req.body;

    if (!name || !username || !email || !password || !avatar || !background) {
      res.status(400).send({ message: "Submit all fields for sign up" });
    }

    const createdUser = await userServices.createUser(req.body);

    if (!createdUser) {
      return res.status(400).send({ message: "Error creating user" });
    };

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
};

export default userController;
