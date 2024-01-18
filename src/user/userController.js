const userService = require('./userServices');

const createUserControllerFn = async(req, res) => {
    try{
        console.log(req.body);
        const status = await userService.createUserDBService(req.body);
        console.log(status);

        if(status){
            res.send({"status": true, "message": "User created correctly" });
        } else {
            res.send({"status": false, "message": "User created bad" });
        }
    }
    catch(err){
        console.log(err);
    }
}

module.exports = { createUserControllerFn };