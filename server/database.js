const mongoose = require('mongoose');
const MongoDBClient = {
    initialize: () => {
        try {
            const client = mongoose.connect(process.env.MANGO_DB, {
                useNewUrlParser: true,
                useUnifiedTopology: true
            })
            client.then(() => console.log(`🎉 🎉 successfully connected to DB: usersdb `))
        } catch (e) {
            throw Error(e)
        }
    }
}
module.exports = MongoDBClient;