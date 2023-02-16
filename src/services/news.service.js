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
  },
  findByTitleService: function(title){
    return News.find({title: {$regex: `${title || ""}`, $options: "i"}}).sort({_id: -1}).populate('user'); 
  },
  findByUserService: function(id){
    return News.find({user: id}).sort({_id: -1}).populate('user');
  },
  updateNewsService: function(id, title, text, banner){
    return News.findOneAndUpdate({_id: id}, {title, text, banner}, {rawResult: true});
  },
  deleteNewsService: function(id){
    return News.findByIdAndDelete({_id: id});
  }
};

export default newsServices;
