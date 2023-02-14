import mongoose from "mongoose";
import userServices from "../services/user.service.js";

const userMiddlewares = {
  validateId: function (req, res, next) {
    try {
      const id = req.params.id;
      if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).send({ message: "Invalid Id" });
      }
      next();
    } catch (error) {
      res.status(500).send({ message: error.message });
    }
  },
  validateUser: async function (req, res, next) {
    try {
      const id = req.params.id;
      const user = await userServices.findByIdService(id);
      if (!user) {
        return res.status(400).send({ message: "User not found" });
      }

      req.id = id;
      req.user = user;
      next();
    } catch (error) {
      res.status(500).send({ message: error.message });
    }
  },
};

export default userMiddlewares;
