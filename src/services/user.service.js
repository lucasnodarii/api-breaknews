import User from "../models/User.js";

const userServices = {
    createUser: function (body){
    return User.create(body);
    },
}
export default userServices;