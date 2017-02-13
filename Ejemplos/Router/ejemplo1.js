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

    describe('Ejemplo router de métodos básicos' , () => {
        var app = express();

        before ( () => {
            app.get('/', function (req, res) {
                res.send('GET request to the homepage')
            });

            app.post('/', function (req, res) {
                res.send('POST request to the homepage')    
            })
        });
        
        it('Método GET' , (done) => {
            request(app)
                .get('/')
                .end ( ( err , res) => {
                    var resp = res.text;
                    resp.should.be.equal('GET request to the homepage');
                    done();
                });
        });

        it('Método POST' , (done) => {
            request(app)
                .post('/')
                .end ( ( err , res) => {
                    var resp = res.text;
                    resp.should.be.equal('POST request to the homepage');
                    done();
                });
        });
    });
});