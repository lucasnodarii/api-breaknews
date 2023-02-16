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
        user: req.userId,
      });

      res.status(201).send("New created");
    } catch (error) {
      res.status(500).send({ message: error.message });
    }
  },

  findAllNews: async function (req, res) {
    try {
      let { limit, offset } = req.query;

      limit = Number(limit);
      offset = Number(offset);

      if (!limit) {
        limit = 5;
      }
      if (!offset) {
        offset = 0;
      }

      const total = await newsServices.countNewsService();
      const currentUrl = req.baseUrl;

      const next = offset + limit;
      const nextUrl =
        next < total ? `${currentUrl}?limit=${limit}&offset=${next}` : null;

      const previous = offset - limit < 0 ? null : offset - limit;
      const previousUrl =
        previous != null
          ? `${currentUrl}?limit=${limit}&offset=${previous}`
          : null;

      const news = await newsServices.findAllService(limit, offset);

      if (news.length === 0) {
        return res
          .status(400)
          .send({ message: "There are no registered news" });
      }

      res.send({
        nextUrl,
        previousUrl,
        limit,
        offset,
        total,
        results: news.map((item) => ({
          id: item._id,
          title: item.title,
          text: item.text,
          banner: item.banner,
          likes: item.likes,
          comments: item.comments,
          name: item.user.name,
          username: item.user.username,
          avatar: item.user.avatar,
        })),
      });
    } catch (error) {
      res.status(500).send({ message: error.message });
    }
  },

  topNews: async function (req, res) {
    try {
      const news = await newsServices.topNewsService();

      if (!news) {
        return res.status(400).send({ message: "There is no registred post" });
      }
      res.send({
        news: {
          id: news._id,
          title: news.title,
          text: news.text,
          banner: news.banner,
          likes: news.likes,
          comments: news.comments,
          name: news.user.name,
          username: news.user.username,
          avatar: news.user.avatar,
        },
      });
    } catch (error) {
      res.status(500).send({ message: error.message });
    }
  },
  findById: async function (req, res) {
    try {
      const { id } = req.params;

      const news = await newsServices.findByIdService(id);

      res.send({
        news: {
          id: news._id,
          title: news.title,
          text: news.text,
          banner: news.banner,
          likes: news.likes,
          comments: news.comments,
          name: news.user.name,
          username: news.user.username,
          avatar: news.user.avatar,
        },
      });
    } catch (error) {
      res.status(500).send({ message: error.message });
    }
  },
};

export default newsController;
