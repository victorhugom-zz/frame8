var request = require('request-json');
var client = request.newClient('http://localhost:8080/');
var should = require('chai').should(); //actually call the the function

//admin data
admin = {
    email: "victorhugom@email.com",
    password: "victorhugo",
    name: "Victor Hugo"
}

describe("admin", function () {
    
    after(function (done) {
        client.del("admin/" + admin.id, function (err, response, body) {
            
            if (err) throw err;
            if (response.statusCode != 200) throw body;
            
            done();
        });
    });
    
    describe(".create()", function () {
        
        it("should create an admin without error", function (done) {
            client.post("admin/", admin , function (err, response, body) {
                
                if (err) throw err;
                if (response.statusCode != 200) throw body;
                admin.id = body.id;
                done();
            });
        });

        it("(email == null)     returns httpSatusCode 400", function (done) {
            
            var adm = { name: "John", password: "John" };
            
            client.post("admin/", adm, function (err, resp, body) {
                
                resp.statusCode.should.not.be.equal(200);
                done();
            });
        });
        
        it("(password == null)  returns httpSatusCode 400", function (done) {
            
            var adm = { name: "John", email: "John" };
            
            client.post("admin/", adm, function (err, resp, body) {
                
                resp.statusCode.should.not.be.equal(200);
                done();
            });
        });
    });
    
    describe(".getById()", function () {
        
        it('responds with an admin', function (done) {
            client.get("admin/" + admin.id, function (err, response, body) {
                
                if (err) throw err;
                if (response.statusCode != 200) throw body;
                
                body._id.should.be.a('string');
                body._id.should.equal(admin.id);
                
                done();
            });
        });
    });
    
    describe("getByEmail()", function () { 
    
        it("responds with an admin", function (done) { 
            client.get("admin/email/" + admin.email, function (err, response, body) {
                
                if (err) throw err;
                if (response.statusCode != 200) throw body;
                
                body._id.should.be.a('string');
                body._id.should.equal(admin.id);
                
                done();
            });
        });
    });

    describe(".update()", function () {
        
        admin.name = "Hugo";
        
        it('update an admin', function (done) {
            
            client.put("admin/", admin, function (err, resp, body) {
                
                if (err) throw err;
                if (resp.statusCode != 200) throw body;
                
                body.name.should.be.equal("Hugo");
                
                done();
            
            });
        });
    });
    
    describe(".login()", function () { 
    
        it("return an admin when pass his login and password", function (done) { 
            client.post("admin/login", { email: admin.email, password: admin.password }, function (err, resp, body) {
                
                if (err) throw err;
                if (resp.statusCode != 200) throw body;
                
                body.email.should.be.equal(admin.email);
                done();
            });
        });
    });
    
    describe(".list()", function () {
        
        var admin1 = { name : "admin1", email: "admin1@gmail.com", password: "admin1" };
        var admin2 = { name : "admin2", email: "admin2@gmail.com", password: "admin2" };
        
        before("create admin 1", function (done) {
            client.post("admin/", admin1, function (err, resp, body) { admin1.id = body.id; done(); });
        });
        
        before("create admin 2", function (done) {
            client.post("admin/", admin2, function (err, resp, body) { admin2.id = body.id; done(); });
        });
        
        after(function (done) {
            client.del("admin/" + admin1.id, function (err, response, body) { done() })
        });

        after(function (done) {
            client.del("admin/" + admin2.id, function (err, response, body) { done() })
        });
        
        it("list all admins", function (done) {
            
            client.get("admin/", function (err, resp, body) {
                
                if (err) throw err;
                if (resp.statusCode != 200) throw body;
                
                body.length.should.be.equal(3);
                done();
            });

        });
    });
});