const test = require('tape');
const supertest = require('supertest');
const cidades = require('./cidades');
const server = require("../server/server");
const repository = require("../repository/repository");

function runTests(){

    var app = null;
    server.start(cidades, repository, (err, app) => { 
        var id = null;
        test('GET /cidades', (t) => {
            supertest(app)
                .get('/cidades')
                .expect('Content-Type', /json/)
                .expect(200)
                .end((err, res) =>{
                    if(res.body && res.body.length > 0) id = res.body[0]._id;
                    t.error(err, 'No errors')
                    t.assert(res.body && res.body.length > 0, "All Cities returned")
                    t.end()  
                })
        })
        

        server.stop();
     })
}

module.exports = { runTests }