import User from "../models/User.js";

const userServices = {
    createUser: function (body){
    return User.create(body);
    },
    findAll: function (){
        return User.find();
    },
    findById: function (id){
        return User.findById(id);   //Esse findById é um método do mongoose
    }
}
export default userServices;