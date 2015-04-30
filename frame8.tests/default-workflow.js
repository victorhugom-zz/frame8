var request = require('request-json');
var client = request.newClient('http://localhost:8080/');
var should = require('chai').should(); //actually call the the function

//admin data
catalog = {
    name: "Default"
}

//admin data
admin = {
    email: "victorhugom@email.com",
    password: "victorhugo",
    name: "Victor Hugo"
}

//product data
product = {
    available: true,
    categories: ["Computador", "Dual Core"],
    description: "Computador legal",
    name: "Computador A",
    physicalProduct: {
        height: 10,
        length: 9,
        weight: 1000,
        width: 7
    },
    price: 500,
    quantityAvailable: 10,
    quantitySold: 0,
}

customer = {
    name : "Test Customer",
    password: "Teste",
    email: "123@email.com"
}


describe("admin", function () {
    
    describe("create_account", function () {
        it("should create an account for the admin without error", function (done) {
            
            client.post("admin/", admin, function (err, response, body) {
                
                if (err) throw err;
                if (response.statusCode != 200) throw body;
                admin.id = body.id;
                done();
            });
        });
    });
    
    describe("create_catalog", function () {
        it("should create a catalog without error", function (done) {
            client.post("catalog/", catalog, function (err, response, body) {
                
                if (err) throw err;
                if (response.statusCode != 200) throw body;
                catalog.id = body.id;
                done();
            });
        });
    });
    
    describe("create_product", function () {
        
        it("should create a product without error", function (done) {
            client.post("product/", product, function (err, response, body) {
                
                if (err) throw err;
                if (response.statusCode != 200) throw body;
                product.id = body.id;
                done();
            });
        });
        
        it("should add the product into the catalog", function (done) {
            client.post("catalog/addproducts", {
                id: catalog.id,
                products: [{
                        id: product.id,
                        price: 490
                    }]
            }, function (err, response, body) {
                
                if (err) throw err;
                if (response.statusCode != 200) throw body;
                done();
            });
        });
    });

});

describe("user", function () {
    
    
    describe("create_cart", function () {
        
        it("should find a product", function (done) {
            
            client.post("catalog/search", {
                id: catalog.id,
                query: 'Computador'
            }, function (err, response, body) {
                if (err) throw err;
                if (response.statusCode != 200) throw body;
                
                foundProduct = body[0];
                
                done();
            });
        });
        
        it("should create a customer", function (done) {
            
            client.post("customer", customer, function (err, response, body) {
                
                if (err) throw err;
                if (response.statusCode != 200) throw body;
                
                customer = body;
                
                done();
            })
        });
        
        it("should create a cart", function (done) {
            
            client.post("cart", {
                customer: customer.id, 
                products : [{ product: foundProduct.id, catalog: catalog.id }]
            }, function (err, response, body) {
                
                if (err) throw err;
                if (response.statusCode != 200) throw body;
                
                cart = body;
                done();
            });
        });
    });
    
    describe("buy", function () {
        
        it("should create the order", function (done) {
            
            this.timeout(50000);
        
            
            var order = {
                customer : customer.id,
                cart: cart.id,
                shippingInfo: {
                    instructions : "Is easy",
                    shippingAddress: {
                        address : "Rua A",
                        city : "RJ",
                        country: "BR",
                        postalCode: "22000000",
                        state: "Rio"
                    }
                },
                paymentInfo: {
                    AuthNumber: "dbuiwbhbn9-wb4jw4-bjbrj9-",
                    Card: "4895********3245"
                }
            };
            
            client.post("order", order, function (err, response, body) {
                
                if (err) throw err;
                if (response.statusCode != 200) throw body;
                
                order = body;
                done();
              
            });
        });

    });
});
