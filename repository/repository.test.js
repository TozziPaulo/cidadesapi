const test = require('tape');
const repository = require('./repository');

function runTests(){

    var id = null;

    test('Repository GetAllCitiies', (t) => {
        repository.getAllCities((err, cidades) => {
            if(cidades && cidades.length > 0) id = cidades[0]._id;
            
            t.assert(!err && cidades && cidades.length > 0, "All Cities Returned");
            t.end();
        });
    })
    
    test('Repository Disconnect', (t) => {
        t.assert(repository.disconnect(), "Disconnect Ok");
        t.end();
    })
}

module.exports = { runTests }