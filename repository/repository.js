const mongodb = require("../config/mongodb");

function getAllCities(callback){
    mongodb.connect((err, db) => {
        db.collection("cidades").find().toArray(callback);
    })
}

function disconnect(){
    return mongodb.disconnect();
}

module.exports = { getAllCities, disconnect }