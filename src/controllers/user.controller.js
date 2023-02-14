import userServices from "../services/user.service.js";

const userController = {
  createUser: async function (req, res) {
    try {
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
    } catch (error) {
      res.status(500).send({ message: error.message });
    }
  },

  findAll: async function (req, res) {
    try {
      const users = await userServices.findAllService();

      if (users.length === 0) {
        return res
          .status(400)
          .send({ message: "There are no registered users" });
      }

      res.send(users);
    } catch (error) {
      res.status(500).send({ message: error.message });
    }
  },

  findById: async function (req, res) {
    try {
      const user = req.user;
      res.send(user);
    } catch (error) {
      res.status(500).send({ message: error.message });
    }
  },

  updateById: async function (req, res) {
    try {
      const { name, username, email, password, avatar, background } = req.body;
      if (!name && !username && !email && !password && !avatar && !background) {
        res
          .status(400)
          .send({ message: "Submit at least one field for update" });
      }

      const { id, user } = req;

      await userServices.updateByIdService(
        id,
        name,
        username,
        email,
        password,
        avatar,
        background
      );
      res.send({ message: "User successfully updated" });
    } catch (error) {
      res.status(500).send({ message: error.message });
    }
  },
};

export default userController;
