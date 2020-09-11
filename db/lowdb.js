const low = require('lowdb');
const FileAsync = require('lowdb/adapters/FileAsync');
const adapter = new FileAsync('database.json');
const db = low(adapter);

db.then(data => {

    data.defaults({
        users: []
    }).write()

}).catch(err => {

    console.log(err);

})

// exporting a promise, handle accordingly
module.exports = db;