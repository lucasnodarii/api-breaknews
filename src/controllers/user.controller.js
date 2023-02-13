const userController = {
    soma: function (req, res){
        const soma = 100 + 1;
        res.send({soma});
    },

}

export default userController;