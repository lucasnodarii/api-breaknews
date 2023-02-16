import News from "../models/News.js";

const newsServices = {
  createService: function (body) {
    return News.create(body);
  },
  findAllService: function (limit, offset) {
    return News.find().sort({_id: -1}).skip(offset).limit(limit).populate('user');
  },
  countNewsService: function(){
    return News.countDocuments();
  },
  topNewsService: function(){
    return News.findOne().sort({_id: -1}).populate('user');
  },
  findByIdService: function(id){
    return News.findById(id).populate('user');
  }
};

export default newsServices;
