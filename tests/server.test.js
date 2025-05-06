// Importing our required dependencies and modules

const server = require('../server.js');
let expect = require('chai').expect;
let request = require('request');

// testing if the server at port 5000 succesfully sends a status code of 200 
describe('Server status', () => {
    it('status of server', function (completed) {
        request('http://localhost:5000/', function (error, response, body) {
            expect(response.statusCode).to.equal(200);
            completed();
        })
    })
})

describe('Validating Input Data to Server'), () => {
    it('Validate Registration Data sent', (completed) => {
        let testSendData = {
            name: 'Joe',
            email: 'john@example.com',
            password: '123456'
        }
        request(server).post('/api/register')
            .send(testSendData)
            .then((res => {
                expect(res.statusCode).to.equal(201);
                expect(res.body).to.include(testSendData);
                completed()
            }))
            .catch((err) => done(err))
    })
    it('Validate Login Data sent', (completed) => {
        let testSendData = {
            email: 'john@example.com',
            password: '123456'
        }
        request(server).post('/api/login')
            .send(testSendData)
            .then((res => {
                expect(res.statusCode).to.equal(201);
                expect(res.body).to.include(testSendData);
                completed()
            }))
            .catch((err) => done(err))
    })
}