// importation du client qui fait le lien avec notre base de données
const userSchema = require('./userSchema');
const mongoose = require('mongoose');

const dataMapper = {
    // pour avoir tous les utilisateurs présent dans notre DB
    getAllUsers: async (callback) => {
        const getUser = await userSchema.find().exec().then(users => {
            callback(null, users);
        }).catch((e) => {
            console.error(e)
            callback(e, null);
        });

    },

    addNewUserInDB: async (request, callback) => {
        const { lastname, firstname } = request;
        const newUser = new userSchema({
            _id: new mongoose.Types.ObjectId(),
            lastname: lastname,
            firstname: firstname
        }, { collection: 'users', versionKey: false });
        newUser.save().then(users => {
            callback(null, users);
        }).catch((e) => {
            console.error(e)
            callback(e, null);
        });

    }


}

module.exports = dataMapper;