var express = require('express'), 
    request = require('supertest');

describe('Ejemplos Routing' , () => {
    it('Ejemplo Basico' , (done) => {
        var app = express();
        app.get('/', function (req, res) {
            res.send('Hola Mundo')
        });
        request(app)
            .get('/')
            .end( ( err , res ) => {
                var resp = res.text;
                console.log( "Respuesta del servicio: " + resp );
                resp.should.be.equal('Hola Mundo');
                done();
            });
    });
});