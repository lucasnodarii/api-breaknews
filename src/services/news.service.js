import News from "../models/News.js";

const newsServices = {
  createService: function (body) {
    return News.create(body);
  },
  findAllService: function () {
    return News.find();
  },
};

export default newsServices;
