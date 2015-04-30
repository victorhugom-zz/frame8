var request = require('request-json');
var client = request.newClient('http://localhost:8080/');
var should = require('chai').should(); //actually call the the function

//admin data
catalog = {
    name: "Default"
}

describe("catalog", function () {
    this.timeout(5050);

    after(function (done) {
        client.del("catalog/" + catalog.id, function (err, response, body) {
            
            if (err) throw err;
            if (response.statusCode != 200) throw body;
            
            done();
        });
    });
    
    describe(".create()", function () {
        
        it("should create a catalog without error", function (done) {
            client.post("catalog/", catalog , function (err, response, body) {
                
                if (err) throw err;
                if (response.statusCode != 200) throw body;
                catalog.id = body.id;
                done();
            });
        });
    });
    
    describe(".getById()", function () {
        
        it('responds with an catalog', function (done) {
            client.get("catalog/" + catalog.id, function (err, response, body) {
                
                if (err) throw err;
                if (response.statusCode != 200) throw body;
                
                body.id.should.be.a('string');
                body.id.should.equal(catalog.id);
                
                done();
            });
        });
    });
    
    describe(".update()", function () {
        
        catalog.name = "Hugo";
                
        it('update an catalog', function (done) {
            
            client.put("catalog/", catalog, function (err, resp, body) {
                
                if (err) throw err;
                if (resp.statusCode != 200) throw body;
                
                body.name.should.be.equal("Hugo"); //TODO:
                
                done();
            
            });
        });
    });
    
    
    describe(".list()", function () {
        
        var catalog1 = { name : "catalog1", email: "catalog1@gmail.com", password: "catalog1" };
        var catalog2 = { name : "catalog2", email: "catalog2@gmail.com", password: "catalog2" };
        
        before("create catalog 1", function (done) {
            client.post("catalog/", catalog1, function (err, resp, body) { catalog1.id = body.id; done(); });
        });
        
        before("create catalog 2", function (done) {
            client.post("catalog/", catalog2, function (err, resp, body) { catalog2.id = body.id; done(); });
        });
        
        after(function (done) {
            client.del("catalog/" + catalog1.id, function (err, response, body) { done() })
        });

        after(function (done) {
            client.del("catalog/" + catalog2.id, function (err, response, body) { done() })
        });
        
        it("list all catalogs", function (done) {
            
            client.get("catalog/", function (err, resp, body) {
                
                if (err) throw err;
                if (resp.statusCode != 200) throw body;
                
                body.length.should.be.equal(3);
                done();
            });

        });
    });
});