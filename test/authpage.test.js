const expect = require('chai').expect
const calculator = require('../server/calculator')
var supertest = require("supertest");
var server = supertest.agent("http://localhost:5003");

describe('calculator', () => {
    it('add should correctly add two numbers', () => {
        const result = calculator.add(3, 5)
        expect(result).to.equal(8)
    })
    it('subtract should correctly subtract two numbers', () => {
        const result = calculator.subtract(8, 2)
        expect(result).to.equal(6)
    })
    it('subtract should correctly subtract two numbers', () => {
        const result = calculator.multiply(4, 3)
        expect(result).to.equal(12)
    })
})

// describe("POST /signup", function () {
//     // #1 should return home page
//     // it("should return home page",function(done){
//     // });
//     it("should register user", function (done) {
//         //calling ADD api
//         server
//             .post('/api/signup')
//             .send({ name: 'Test user', password: 'test123', email: "test@mail.com" })
//             .expect("Content-type", /json/)
//             .expect(200)
//             .end(function (err, res) {
//               //  console.log(res.data);
//                 res.status.should.equal(200);
//                 // err.should.equal(false);
//                 // res.body.data.should.equal(30);
//                 done();
//             });
//     });
// });
var token = '';
var userId = '';
describe("POST /login", function () {
    // #1 should return home page
    // it("should return home page",function(done){
    // });
  
     it("should login user", function (done) {
    // before(function(done) {
        //calling ADD api
        server
            .post('/api/login')
            .send({password: 'test123', email: "test@mail.com" })
            .expect("Content-type", /json/)
            .expect(200)
            .end(function (err, res) {
            //    console.log( res);
                token = res.body.token;
                res.status.should.equal(200);
                // err.should.equal(false);
                // res.body.data.should.equal(30);
                done();
            });
    });
});
    describe("GET /login", function () {
    it("should get all user", function (done) {
        //calling ADD api
        console.log(token);
        server
            .get('/api/user')
            .set('Authorization', 'Bearer ' + token )
            //.send({ name: 'Test user', phone_number: '8718047258', email: "test@mail.com" })
            .expect("Content-type", /json/)
            .expect(200)
            .end(function (err, res) {
                //  console.log(res.data);
                res.status.should.equal(200);
                // err.should.equal(false);
                // res.body.data.should.equal(30);
                done();
            });
    });

//     it("should add user", function (done) {
//         //calling ADD api
//         server
//             .post('/api/user/add')
//             .set('Authorization', 'Bearer ' + token)
//             .send({ name: 'Test user', phone_number: '8718047258', email: "test@mail.com" })
//             .expect("Content-type", /json/)
//             .expect(200)
//             .end(function (err, res) {
//                 //  console.log(res.data);
//                 userId = res.data.id;
//                 console.log("userId");
//                 console.log(userId);
//                 res.status.should.equal(200);
//                 // err.should.equal(false);
//                 // res.body.data.should.equal(30);
//                 done();
//             });
//     });

//     it("should get user", function (done) {
//         //calling ADD api
//         server
//             .get('/api/user/' + userId)
//             .set('Authorization', 'Bearer ' + token )
//             .send({ name: 'Test user', phone_number: '8718047258', email: "test@mail.com" })
//             .expect("Content-type", /json/)
//             .expect(200)
//             .end(function (err, res) {
//                 //  console.log(res.data);
//                 res.status.should.equal(200);
//                 // err.should.equal(false);
//                 // res.body.data.should.equal(30);
//                 done();
//             });
//     });


//     it("should update user", function (done) {
//         //calling ADD api
//         server
//             .put('/api/user/' + userId)
//             .set('Authorization', 'Bearer ' + token )
//             .send({ name: 'Test user', phone_number: '8718047258', email: "test1@mail.com" })
//             .expect("Content-type", /json/)
//             .expect(200)
//             .end(function (err, res) {
//                 //  console.log(res.data);
//                 res.status.should.equal(200);
//                 // err.should.equal(false);
//                 // res.body.data.should.equal(30);
//                 done();
//             });
//     });

//     it("should delete user", function (done) {
//         //calling ADD api
//         server
//             .delete('/api/user/' + userId)
//             .set('Authorization', 'Bearer ' + token )
//             // .send({ name: 'Test user', phone_number: '8718047258', email: "test@mail.com" })
//             .expect("Content-type", /json/)
//             .expect(200)
//             .end(function (err, res) {
//                 //  console.log(res.data);
//                 res.status.should.equal(200);
//                 // err.should.equal(false);
//                 // res.body.data.should.equal(30);
//                 done();
//             });
//     });
 });