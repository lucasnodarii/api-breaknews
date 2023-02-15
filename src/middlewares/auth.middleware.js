import jwt from "jsonwebtoken";
import userServices from "../services/user.service.js";

const authMiddleware = {
  validateToken: function (req, res, next) {
    try {
      const { authorization } = req.headers;

      if (!authorization) {
        return res.status(401).send({ message: "Invalid Token" });
      }

      const parts = authorization.split(" ");

      if (parts.length !== 2) {
        return res.status(401).send({ message: "Invalid Token" });
      }

      const [schema, token] = parts;

      if (schema !== "Bearer") {
        return res.status(401).send({ message: "Invalid Token" });
      }

      jwt.verify(token, process.env.JWT_SECRET, async (error, decoded) => {
        if (error) {
          return res.status(401).send({ message: "INVALID TOKEN" });
        }
        const user = await userServices.findByIdService(decoded.id);

        if (!user || !user.id) {
          return res.status(401).send({ message: "Invalid Token" });
        }
        req.userId = user._id;
        return next();
      });
    } catch (error) {
      res.status(401).send({ message: error.message });
    }
  },
};

export default authMiddleware;
