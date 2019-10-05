var supertest = require("supertest");
var should = require("should");

// This agent refers to PORT where program is runninng.

var server = supertest.agent("http://localhost:5003");

// UNIT test begin

describe("SAMPLE unit test", function () {

  // #1 should return home page

  // it("should return home page",function(done){


  // });

  it("should add two number", function (done) {
    //calling ADD api
    server
      .post('/api/user/add')
      .send({ num1: 10, num2: 20 })
      .expect("Content-type", /json/)
      .expect(200)
      .end(function (err, res) {
        //console.log(res);
        res.status.should.equal(200);
        // err.should.equal(false);
        res.body.data.should.equal(30);
        done();
      });
  });

});