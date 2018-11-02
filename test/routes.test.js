var chai = require('chai');
var chaiHttp = require('chai-http');
const server = require('../app.js');
var should = chai.should();

chai.use(chaiHttp);

describe('Routes', function () {
    it('should respond with a 200', function (done) {
        chai.request(server)
            .get('/')
            .end(function (err, res) {
                res.should.have.status(200);
                done();
            });
    });

    it('should respond with a 404', function (done) {
        chai.request(server)
            .get('/non-existant-route')
            .end(function (err, res) {
                res.should.have.status(404);
                done();
            });
    });
});