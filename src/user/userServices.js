const userModel = require("./userModel");
const key = "123412341234qwerqwerqwer";
const encryptor = require("simple-encryptor")(key);

module.exports.createUserDBService = (userDetails) => {
    
    return new Promise(function myFn(resolve, reject){

        const userModelData = new userModel();

        userModelData.firstname = userDetails.firstname;
        userModelData.lastname = userDetails.lastname;
        userModelData.email = userDetails.emial;
        userModelData.password = userDetails.password;
        const encrypted = encryptor.encrypt(userDetails.password);
        userModelData.password = encrypted;

        userModelData.save(function resultHandle(error, result){
            if(error){
                reject(false);
            } else {
                resolve(true);
            }
        });
    });
}
