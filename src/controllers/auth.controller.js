import bcrypt from "bcrypt";
import loginService from "../services/auth.service.js";

const authController = {
  login: async function (req, res) {
    try {
      const { email, password } = req.body;

      const user = await loginService(email);
      if (!user) {
        return res.status(404).send({ message: "Invalid user or password" });
      }

      const passwordIsValid = await bcrypt.compare(password, user.password);
      if (!passwordIsValid) {
        return res.status(400).send({ message: "Invalid user or password" });
      }

      res.send("Login ok");
    } catch (error) {
      res.status(500).send(error.message);
    }
  },
};

export default authController;
