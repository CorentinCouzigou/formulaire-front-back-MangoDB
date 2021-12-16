// importation du datamapper
const dataMapper = require('./dataMapper');

const mainController = {
    homePage: (req, res) => {
        // lancement de la fonction du datamapper en définissant la callback en argument
        dataMapper.getAllUsers((error, users) => {
            if (error) {
                // gestion des erreurs 
                console.error(error)
            } else {
                console.log("data", users);
                // retour du status en cas de sucess ainsi que des resultats sous forme de Json
                res.status(200).json(users);
            }
        });
    },

    addNewUser: (req, res) => {
        // lancement de la fonctionne du dataMapperen utilisant en premier argument le req.body et en deuxieme une callback
        dataMapper.addNewUserInDB(req.body, (error, results) => {
            console.log("reqbody in controler", req.body)
            if (error) {
                console.error(error)
            } else {
                res.status(200).json(results.rows);
            }
        })
    }
}

module.exports = mainController;