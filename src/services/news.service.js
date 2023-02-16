import News from "../models/News.js";

const newsServices = {
  createService: function (body) {
    return News.create(body);
  },
  findAllService: function (limit, offset) {
    return News.find().sort({_id: -1}).skip(offset).limit(limit).populate('user');
  },
  countNews: function(){
    return News.countDocuments();
  }
};

export default newsServices;
