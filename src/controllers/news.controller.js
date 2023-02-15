import newsServices from "../services/news.service.js";

const newsController = {
  createNew: async function (req, res) {
    try {
      const { title, text, banner } = req.body;

      if (!title || !text || !banner) {
        res.status(400).send({ message: "Submit all fields for registration" });
      }

      await newsServices.createService({
        title,
        text,
        banner,
        user: req.userId
      });

      res.status(201).send("New created");
    } catch (error) {
      res.status(500).send({ message: error.message });
    }
  },

  findAllNews: async function (req, res) {
    try {
      const news = await newsServices.findAllService();

      if (news.length === 0) {
        return res
          .status(400)
          .send({ message: "There are no registered news" });
      }

      res.send(news);
    } catch (error) {
      res.status(500).send({ message: error.message });
    }
  },
};

export default newsController;
