define({ "api": [
  {
    "type": "post",
    "url": "/cart/",
    "title": "create",
    "description": "<p>create an cart</p> ",
    "name": "create",
    "group": "Cart",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>ObjectId</p> ",
            "optional": false,
            "field": "customer",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "<p>String[]</p> ",
            "optional": false,
            "field": "products",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "200",
            "description": "<p>Success</p> "
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "400",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/models/cart.js",
    "groupTitle": "Cart"
  },
  {
    "type": "get",
    "url": "/cart/:id",
    "title": "get",
    "description": "<p>get an cart</p> ",
    "name": "getById",
    "group": "Cart",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "id",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "Cart",
            "description": ""
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "400",
            "description": "<p>Cart not found</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/models/cart.js",
    "groupTitle": "Cart"
  },
  {
    "type": "get",
    "url": "/cart/?limit&skip",
    "title": "list",
    "description": "<p>list all carts</p> ",
    "name": "list",
    "group": "Cart",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "200",
            "description": "<p>Success</p> "
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "400",
            "description": "<p>Cart not found</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/models/cart.js",
    "groupTitle": "Cart"
  },
  {
    "type": "delete",
    "url": "/cart/:id",
    "title": "remove",
    "description": "<p>remove an cart</p> ",
    "name": "remove",
    "group": "Cart",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "id",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "200",
            "description": "<p>Success</p> "
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "400",
            "description": "<p>Cart not found</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/models/cart.js",
    "groupTitle": "Cart"
  },
  {
    "type": "get",
    "url": "/catalog/activate/:id",
    "title": "activate",
    "description": "<p>set the catalog as active</p> ",
    "name": "activate",
    "group": "Catalog",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "id",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "Success",
            "description": ""
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Catalog",
            "description": "<p>not found</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/models/catalog.js",
    "groupTitle": "Catalog"
  },
  {
    "type": "post",
    "url": "/catalog/",
    "title": "create",
    "description": "<p>create an catalog</p> ",
    "name": "create",
    "group": "Catalog",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "name",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "<p>Boolena</p> ",
            "optional": false,
            "field": "active",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "200",
            "description": "<p>Success</p> "
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "400",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/models/catalog.js",
    "groupTitle": "Catalog"
  },
  {
    "type": "get",
    "url": "/catalog/deactivate/:id",
    "title": "deactivate",
    "description": "<p>set the catalog as active</p> ",
    "name": "deactivate",
    "group": "Catalog",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "id",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "Success",
            "description": ""
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Catalog",
            "description": "<p>not found</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/models/catalog.js",
    "groupTitle": "Catalog"
  },
  {
    "type": "get",
    "url": "/catalog/:id",
    "title": "get",
    "description": "<p>get an catalog</p> ",
    "name": "getById",
    "group": "Catalog",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "id",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "Catalog",
            "description": ""
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "400",
            "description": "<p>Catalog not found</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/models/catalog.js",
    "groupTitle": "Catalog"
  },
  {
    "type": "get",
    "url": "/catalog/?limit&skip&name",
    "title": "list",
    "description": "<p>list all catalogs</p> ",
    "name": "list",
    "group": "Catalog",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "200",
            "description": "<p>Success</p> "
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "400",
            "description": "<p>Catalog not found</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/models/catalog.js",
    "groupTitle": "Catalog"
  },
  {
    "type": "delete",
    "url": "/catalog/:id",
    "title": "remove",
    "description": "<p>remove an catalog</p> ",
    "name": "remove",
    "group": "Catalog",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "id",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "200",
            "description": "<p>Success</p> "
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "400",
            "description": "<p>Catalog not found</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/models/catalog.js",
    "groupTitle": "Catalog"
  },
  {
    "type": "put",
    "url": "/catalog/",
    "title": "update",
    "description": "<p>update an catalog</p> ",
    "name": "update",
    "group": "Catalog",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "email",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "name",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "password",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "Catalog",
            "description": ""
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "400",
            "description": "<p>Catalog not found</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/models/catalog.js",
    "groupTitle": "Catalog"
  },
  {
    "type": "post",
    "url": "/customer/addcard",
    "title": "add card",
    "description": "<p>add a card to te customer account</p> ",
    "name": "addCard",
    "group": "Customer",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "cardNumber",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "expirationMonth",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "expirationYear",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "name",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "securityCode",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "billingAddress",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "billingAddress.address",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "billingAddress.city",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "billingAddress.country",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "billingAddress.state",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "billingAddress.postalCode",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "200",
            "description": "<p>Success</p> "
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "400",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/models/customer.js",
    "groupTitle": "Customer"
  },
  {
    "type": "post",
    "url": "/customer/addshippingaddress",
    "title": "add shipping address",
    "description": "<p>add a Shipping Address to te customer account</p> ",
    "name": "addShippingAddress",
    "group": "Customer",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "name",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "address",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "city",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "country",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "state",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "postalCode",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "200",
            "description": "<p>Success</p> "
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "400",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/models/customer.js",
    "groupTitle": "Customer"
  },
  {
    "type": "post",
    "url": "/customer/",
    "title": "create",
    "description": "<p>create an customer</p> ",
    "name": "create",
    "group": "Customer",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "name",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "email",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "password",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "200",
            "description": "<p>Success</p> "
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "400",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/models/customer.js",
    "groupTitle": "Customer"
  },
  {
    "type": "get",
    "url": "/customer/email/:email",
    "title": "get by email",
    "description": "<p>get user by his email</p> ",
    "name": "getByEmail",
    "group": "Customer",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "email",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "Customer",
            "description": ""
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Customer",
            "description": "<p>not found</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/models/customer.js",
    "groupTitle": "Customer"
  },
  {
    "type": "get",
    "url": "/customer/:id",
    "title": "get",
    "description": "<p>get an customer</p> ",
    "name": "getById",
    "group": "Customer",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "id",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "Customer",
            "description": ""
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "400",
            "description": "<p>Customer not found</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/models/customer.js",
    "groupTitle": "Customer"
  },
  {
    "type": "get",
    "url": "/customer/?limit&skip",
    "title": "list",
    "description": "<p>list all customers</p> ",
    "name": "list",
    "group": "Customer",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "200",
            "description": "<p>Success</p> "
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "400",
            "description": "<p>Customer not found</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/models/customer.js",
    "groupTitle": "Customer"
  },
  {
    "type": "post",
    "url": "/customer/login",
    "title": "login",
    "description": "<p>do login</p> ",
    "name": "login",
    "group": "Customer",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>string</p> ",
            "optional": false,
            "field": "email",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "<p>string</p> ",
            "optional": false,
            "field": "password",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "Customer",
            "description": ""
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Invalid",
            "description": "<p>password or email</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/models/customer.js",
    "groupTitle": "Customer"
  },
  {
    "type": "delete",
    "url": "/customer/:id",
    "title": "remove",
    "description": "<p>remove an customer</p> ",
    "name": "remove",
    "group": "Customer",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "id",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "200",
            "description": "<p>Success</p> "
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "400",
            "description": "<p>Customer not found</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/models/customer.js",
    "groupTitle": "Customer"
  },
  {
    "type": "put",
    "url": "/customer/",
    "title": "update",
    "description": "<p>update an customer</p> ",
    "name": "update",
    "group": "Customer",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "email",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "name",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "password",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "Customer",
            "description": ""
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "400",
            "description": "<p>Customer not found</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/models/customer.js",
    "groupTitle": "Customer"
  },
  {
    "type": "post",
    "url": "/customer/updatepassword/",
    "title": "update password",
    "description": "<p>update password</p> ",
    "name": "updatePassword",
    "group": "Customer",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "password",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "Success",
            "description": ""
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Customer",
            "description": "<p>not found</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/models/customer.js",
    "groupTitle": "Customer"
  },
  {
    "type": "post",
    "url": "/order/",
    "title": "create",
    "description": "<p>create an order</p> ",
    "name": "create",
    "group": "Order",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>Object[]</p> ",
            "optional": false,
            "field": "payments",
            "description": "<p>Payment List</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "payment.type",
            "description": "<p>Payment type</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "payment.flag",
            "description": "<p>Payment flag (if by card)</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "payment.value",
            "description": "<p>Payment type name</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object[]</p> ",
            "optional": false,
            "field": "products",
            "description": "<p>Product List</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "products.id",
            "description": "<p>Product id</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "products.quantity",
            "description": "<p>Product Quantity</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "sellerId",
            "description": "<p>Seller id</p> "
          },
          {
            "group": "Success 200",
            "optional": false,
            "field": "200",
            "description": "<p>Success</p> "
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "shippingInfo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "shippingInfo.instructions",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "shippingInfo.shippingAddress",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "shippingInfo.shippingAddress.address",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "shippingInfo.shippingAddress.city",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "shippingInfo.shippingAddress.country",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "shippingInfo.shippingAddress.postalCode",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "shippingInfo.shippingAddress.state",
            "description": ""
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "400",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/models/order.js",
    "groupTitle": "Order"
  },
  {
    "type": "get",
    "url": "/order/:id",
    "title": "get",
    "description": "<p>get an order</p> ",
    "name": "getById",
    "group": "Order",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "id",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "Order",
            "description": ""
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "400",
            "description": "<p>Order not found</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/models/order.js",
    "groupTitle": "Order"
  },
  {
    "type": "get",
    "url": "/order/?limit&skip",
    "title": "list",
    "description": "<p>list all orders</p> ",
    "name": "list",
    "group": "Order",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "200",
            "description": "<p>Success</p> "
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "400",
            "description": "<p>Order not found</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/models/order.js",
    "groupTitle": "Order"
  },
  {
    "type": "delete",
    "url": "/order/:id",
    "title": "remove",
    "description": "<p>remove an order</p> ",
    "name": "remove",
    "group": "Order",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "id",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "200",
            "description": "<p>Success</p> "
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "400",
            "description": "<p>Order not found</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/models/order.js",
    "groupTitle": "Order"
  },
  {
    "type": "put",
    "url": "/order/",
    "title": "update",
    "description": "<p>update an order</p> ",
    "name": "update",
    "group": "Order",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "email",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "name",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "password",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "Order",
            "description": ""
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "400",
            "description": "<p>Order not found</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/models/order.js",
    "groupTitle": "Order"
  },
  {
    "type": "post",
    "url": "/party/",
    "title": "create",
    "description": "<p>create an party</p> ",
    "name": "create",
    "group": "Party",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "name",
            "description": "<p>Party name</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Boolean</p> ",
            "optional": false,
            "field": "active",
            "description": "<p>Party is active or not (default true)</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Object[]</p> ",
            "optional": false,
            "field": "item",
            "description": "<p>List of itens in this party</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "item.price",
            "description": "<p>price in this party</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Object[]</p> ",
            "optional": false,
            "field": "item.product",
            "description": "<p>List of itens in this product product for this party</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "item.product.id",
            "description": "<p>Product id</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "item.product.quantity",
            "description": "<p>Product quantity in this party</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "200",
            "description": "<p>Success</p> "
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "400",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/models/party.js",
    "groupTitle": "Party"
  },
  {
    "type": "get",
    "url": "/party/:id",
    "title": "get",
    "description": "<p>get an party</p> ",
    "name": "getById",
    "group": "Party",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "id",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>Object[]</p> ",
            "optional": false,
            "field": "party",
            "description": "<p>Party List</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "party.id",
            "description": "<p>Party Id</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "party.name",
            "description": "<p>Party Name</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Date</p> ",
            "optional": false,
            "field": "party.date",
            "description": "<p>Party Date</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object[]</p> ",
            "optional": false,
            "field": "party.product",
            "description": "<p>List of products in this catalog</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "party.product.name",
            "description": "<p>Party name</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "party.product.price",
            "description": "<p>Party price</p> "
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "400",
            "description": "<p>Party not found</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/models/party.js",
    "groupTitle": "Party"
  },
  {
    "type": "get",
    "url": "/party/sellsByHour?ids",
    "title": "sells by hour",
    "description": "<p>sells of parties grouped by hour</p> ",
    "name": "sellsByHour",
    "group": "Party",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String[]</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>parties ids</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>Object[]</p> ",
            "optional": false,
            "field": "party",
            "description": "<p>Party List</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "party.id",
            "description": "<p>Party Id</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "party.name",
            "description": "<p>Party Name</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Date</p> ",
            "optional": false,
            "field": "party.date",
            "description": "<p>Party Date</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "party.raised",
            "description": "<p>Ammount raised by in that hour</p> "
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "400",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/models/party.js",
    "groupTitle": "Party"
  },
  {
    "type": "get",
    "url": "/party/sellsByPOS/?ids",
    "title": "sells by POS",
    "description": "<p>sells of parties grouped by POS</p> ",
    "name": "sellsByPos",
    "group": "Party",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String[]</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>parties ids</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "pos",
            "description": "<p>POS</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "pos.id",
            "description": "<p>POS Id</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "pos.name",
            "description": "<p>POS Name</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "pos.raised",
            "description": "<p>Ammount raised by the pos in that party</p> "
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "400",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/models/party.js",
    "groupTitle": "Party"
  },
  {
    "type": "get",
    "url": "/party/sellsByProduct/?ids",
    "title": "sells by product",
    "description": "<p>sells of parties grouped by product</p> ",
    "name": "sellsByProduct",
    "group": "Party",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String[]</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>parties ids</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "product",
            "description": "<p>Product</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "product.id",
            "description": "<p>Product Id</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "product.name",
            "description": "<p>Product Name</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "product.raised",
            "description": "<p>Ammount raised by the Product</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "product.quantity",
            "description": "<p>Quantity of Products sold</p> "
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "400",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/models/party.js",
    "groupTitle": "Party"
  },
  {
    "type": "get",
    "url": "/party/sellsByPaymentType/?ids",
    "title": "sells by payment type",
    "description": "<p>sells of parties grouped by payment type</p> ",
    "name": "sellsByProduct",
    "group": "Party",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String[]</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>parties ids</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "payment",
            "description": "<p>Payment</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "payment.id",
            "description": "<p>Payment Id</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "payment.type",
            "description": "<p>Payment Name</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "product.raised",
            "description": "<p>Ammount raised by the Payment</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "product.quantity",
            "description": "<p>Quantity sold with this Payment</p> "
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "400",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/models/party.js",
    "groupTitle": "Party"
  },
  {
    "type": "get",
    "url": "/party/sellsByWaiter/?ids",
    "title": "sells by Waiter",
    "description": "<p>sells of parties grouped by Waiter</p> ",
    "name": "sellsByWaiter",
    "group": "Party",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String[]</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>parties ids</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "waiter",
            "description": "<p>Waiter</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "waiter.id",
            "description": "<p>Waiter Id</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "waiter.name",
            "description": "<p>Waiter Name</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "waiter.raised",
            "description": "<p>Ammount raised by the waiter in that party</p> "
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "400",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/models/party.js",
    "groupTitle": "Party"
  },
  {
    "type": "get",
    "url": "/party/summary?limit&skip",
    "title": "summary",
    "description": "<p>list a summary of all catalogs ordered by date</p> ",
    "name": "summary",
    "group": "Party",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "400",
            "description": "<p>Error</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>Object[]</p> ",
            "optional": false,
            "field": "party",
            "description": "<p>Party List</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "party.id",
            "description": "<p>Party Id</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "party.name",
            "description": "<p>Party Name</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Date</p> ",
            "optional": false,
            "field": "party.date",
            "description": "<p>Party Date</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "party.raised",
            "description": "<p>Ammount raised by the party</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "party.productsQuantity",
            "description": "<p>Quantity of products in this party</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/models/party.js",
    "groupTitle": "Party"
  },
  {
    "type": "post",
    "url": "/payment/",
    "title": "create",
    "description": "<p>create a payment</p> ",
    "name": "create",
    "group": "Payment",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "sell",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "<p>Object[]</p> ",
            "optional": false,
            "field": "sell.payment",
            "description": "<p>Payment List</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "sell.payment.type",
            "description": "<p>Payment type</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "sell.payment.flag",
            "description": "<p>Payment flag (if by card)</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "sell.payment.value",
            "description": "<p>Payment type name</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object[]</p> ",
            "optional": false,
            "field": "sell.products",
            "description": "<p>Product List</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "sell.products.id",
            "description": "<p>Product id</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "sell.products.quantity",
            "description": "<p>Product Quantity</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "sell.waiterId",
            "description": "<p>Product id</p> "
          },
          {
            "group": "Success 200",
            "optional": false,
            "field": "200",
            "description": "<p>Success</p> "
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "400",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/models/sell.js",
    "groupTitle": "Payment"
  },
  {
    "type": "post",
    "url": "/product/",
    "title": "create",
    "description": "<p>create a product</p> ",
    "name": "create",
    "group": "Product",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "name",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "price",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "quantityAvailable",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "quantitySold",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "thumbnailUri",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "<p>Boolean</p> ",
            "optional": false,
            "field": "available",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "<p>String[]</p> ",
            "optional": false,
            "field": "categories",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "description",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "<p>Object[]</p> ",
            "optional": false,
            "field": "mediaFiles",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "mediaFiles.type",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "mediaFiles.uri",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "physicalProduct",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "physicalProduct.height",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "physicalProduct.length",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "physicalProduct.weight",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "physicalProduct.width",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "200",
            "description": "<p>Success</p> "
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "400",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/models/product.js",
    "groupTitle": "Product"
  },
  {
    "type": "get",
    "url": "/product/:id",
    "title": "get",
    "description": "<p>get an product</p> ",
    "name": "getById",
    "group": "Product",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "id",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "Product",
            "description": ""
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "400",
            "description": "<p>Product not found</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/models/product.js",
    "groupTitle": "Product"
  },
  {
    "type": "get",
    "url": "/product/?limit&skip&priceFrom&priceTo&category",
    "title": "list",
    "description": "<p>list all products</p> ",
    "name": "list",
    "group": "Product",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "200",
            "description": "<p>Success</p> "
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "400",
            "description": "<p>Product not found</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/models/product.js",
    "groupTitle": "Product"
  },
  {
    "type": "delete",
    "url": "/product/:id",
    "title": "remove",
    "description": "<p>remove an product</p> ",
    "name": "remove",
    "group": "Product",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "id",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "200",
            "description": "<p>Success</p> "
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "400",
            "description": "<p>Product not found</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/models/product.js",
    "groupTitle": "Product"
  },
  {
    "type": "post",
    "url": "/product/search/",
    "title": "search",
    "description": "<p>search for a product</p> ",
    "name": "search",
    "group": "Product",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "query",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "Success",
            "description": ""
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Product",
            "description": "<p>not found</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/models/user.js",
    "groupTitle": "Product"
  },
  {
    "type": "get",
    "url": "/product/setasavailable/:id",
    "title": "set as available",
    "description": "<p>set the product as available</p> ",
    "name": "setAsAvailable",
    "group": "Product",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "id",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "Success",
            "description": ""
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Product",
            "description": "<p>not found</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/models/product.js",
    "groupTitle": "Product"
  },
  {
    "type": "get",
    "url": "/product/setasaunvailable/:id",
    "title": "set as unavailable",
    "description": "<p>set the product as unavailable</p> ",
    "name": "setAsUnAvailable",
    "group": "Product",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "id",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "Success",
            "description": ""
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Product",
            "description": "<p>not found</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/models/product.js",
    "groupTitle": "Product"
  },
  {
    "type": "put",
    "url": "/product/",
    "title": "update",
    "description": "<p>update an product</p> ",
    "name": "update",
    "group": "Product",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "name",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "price",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "quantityAvailable",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "quantitySold",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "thumbnailUri",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "<p>Boolean</p> ",
            "optional": false,
            "field": "available",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "<p>String[]</p> ",
            "optional": false,
            "field": "categories",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "description",
            "description": ""
          }
        ],
        "mediaFiles": [
          {
            "group": "mediaFiles",
            "type": "<p>Object[]</p> ",
            "optional": false,
            "field": "mediaFiles",
            "description": ""
          },
          {
            "group": "mediaFiles",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "mediaFiles.type",
            "description": ""
          },
          {
            "group": "mediaFiles",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "mediaFiles.uri",
            "description": ""
          }
        ],
        "physicalProduct": [
          {
            "group": "physicalProduct",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "physicalProduct",
            "description": ""
          },
          {
            "group": "physicalProduct",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "physicalProduct.height",
            "description": ""
          },
          {
            "group": "physicalProduct",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "physicalProduct.length",
            "description": ""
          },
          {
            "group": "physicalProduct",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "physicalProduct.weight",
            "description": ""
          },
          {
            "group": "physicalProduct",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "physicalProduct.width",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "Product",
            "description": ""
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "400",
            "description": "<p>Product not found</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/models/product.js",
    "groupTitle": "Product"
  },
  {
    "type": "post",
    "url": "/product/updateprice/",
    "title": "update price",
    "description": "<p>update product price</p> ",
    "name": "updatePrice",
    "group": "Product",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "price",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "Success",
            "description": ""
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Product",
            "description": "<p>not found</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/models/product.js",
    "groupTitle": "Product"
  },
  {
    "type": "get",
    "url": "/sell/:id",
    "title": "get",
    "description": "<p>get an sell</p> ",
    "name": "getById",
    "group": "Sell",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "id",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "sell",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "sell.total",
            "description": "<p>Total sell ammount</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object[]</p> ",
            "optional": false,
            "field": "sell.payment",
            "description": "<p>Payment List</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "sell.payment.type",
            "description": "<p>Payment type</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "sell.payment.flag",
            "description": "<p>Payment flag (if by card)</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "sell.payment.value",
            "description": "<p>Payment type name</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object[]</p> ",
            "optional": false,
            "field": "sell.products",
            "description": "<p>Catalog Product List</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "sell.products.id",
            "description": "<p>Product id</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "sell.products.name",
            "description": "<p>Product name</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "sell.products.price",
            "description": "<p>Product price</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "sell.products.type",
            "description": "<p>Product type name</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "sell.products.image",
            "description": "<p>Product image url</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "sell.products.code",
            "description": "<p>Product validation code (exist after sell)</p> "
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "400",
            "description": "<p>Sell not found</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/models/sell.js",
    "groupTitle": "Sell"
  },
  {
    "type": "get",
    "url": "/sell/summary?limit&skip&sort&filter",
    "title": "summary",
    "description": "<p>list a summary of all sells ordered by date</p> ",
    "name": "summary",
    "group": "Sell",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "400",
            "description": "<p>Error</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>Object[]</p> ",
            "optional": false,
            "field": "sell",
            "description": "<p>Sell List</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "sell.id",
            "description": "<p>Sell Id</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Date</p> ",
            "optional": false,
            "field": "sell.date",
            "description": "<p>Sell Date</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "sell.bar.name",
            "description": "<p>Bar Name</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "party.waiter.name",
            "description": "<p>Waiter name</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "party.raised",
            "description": "<p>Ammount raised by the sell</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "party.paymenyType.name",
            "description": "<p>Sell paymeny type name</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "party.products.count",
            "description": "<p>Quantity of products selled</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/models/sell.js",
    "groupTitle": "Sell"
  },
  {
    "type": "post",
    "url": "/user/",
    "title": "create",
    "description": "<p>create an user</p> ",
    "name": "create",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "name",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "email",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "password",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "200",
            "description": "<p>Success</p> "
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "400",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/models/user.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/user/email/:email",
    "title": "get by email",
    "description": "<p>get user by his email</p> ",
    "name": "getByEmail",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "email",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "User",
            "description": ""
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "User",
            "description": "<p>not found</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/models/user.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/user/:id",
    "title": "get",
    "description": "<p>get an user</p> ",
    "name": "getById",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "id",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "User",
            "description": ""
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "400",
            "description": "<p>User not found</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/models/user.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/user/?limit&skip",
    "title": "list",
    "description": "<p>list all users</p> ",
    "name": "list",
    "group": "User",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "200",
            "description": "<p>Success</p> "
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "400",
            "description": "<p>User not found</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/models/user.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/user/login",
    "title": "login",
    "description": "<p>do login</p> ",
    "name": "login",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>string</p> ",
            "optional": false,
            "field": "email",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "<p>string</p> ",
            "optional": false,
            "field": "password",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "User",
            "description": ""
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Invalid",
            "description": "<p>password or email</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/models/user.js",
    "groupTitle": "User"
  },
  {
    "type": "delete",
    "url": "/user/:id",
    "title": "remove",
    "description": "<p>remove an user</p> ",
    "name": "remove",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "id",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "200",
            "description": "<p>Success</p> "
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "400",
            "description": "<p>User not found</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/models/user.js",
    "groupTitle": "User"
  },
  {
    "type": "put",
    "url": "/user/",
    "title": "update",
    "description": "<p>update an user</p> ",
    "name": "update",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "email",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "name",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "password",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "User",
            "description": ""
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "400",
            "description": "<p>User not found</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/models/user.js",
    "groupTitle": "User"
  }
] });