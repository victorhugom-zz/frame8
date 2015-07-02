/**
* @api {get} /party/summary?limit&skip summary
* @apiDescription list a summary of all catalogs ordered by date
* @apiName summary
* @apiGroup Party
*
*  
* @apiError 400 Error
* @apiSuccess {Object[]} party 			Party List
* @apiSuccess {String}   party.id      	Party Id
* @apiSuccess {String}   party.name     Party Name
* @apiSuccess {Date}   	 party.date     Party Date
* @apiSuccess {Number}   party.raised  	Ammount raised by the party
* @apiSuccess {Number}   party.productsQuantity Quantity of products in this party
* @apiError 400
*/

/** 
* @api {post} /party/ create
* @apiDescription create an party
* @apiName create
* @apiGroup Party
*
* @apiParam {String}   name 			Party name
* @apiParam {Boolean}  active 			Party is active or not (default true)
* @apiParam {Object[]} item 			List of itens in this party
* @apiParam {Number}   item.price 		price in this party
* @apiParam {Object[]} item.product 	List of itens in this product product for this party
* @apiParam {String}   item.product.id 		Product id
* @apiParam {String}   item.product.quantity 	Product quantity in this party
*  
* @apiSuccess 200 Success
* @apiError 400
*/

/** 
* @api {get} /party/:id get
* @apiDescription get an party
* @apiName getById
* @apiGroup Party
*
* @apiParam {String} id
*  
* @apiSuccess {Object[]} party 				Party List
* @apiSuccess {String}   party.id      		Party Id
* @apiSuccess {String}   party.name   		Party Name
* @apiSuccess {Date}   	 party.date     	Party Date
* @apiSuccess {Object[]} party.product 		List of products in this catalog
* @apiSuccess {String} 	 party.product.name  Party name
* @apiSuccess {Number} 	 party.product.price Party price
* @apiError 400 Party not found
*/

/** 
* @api {get} /party/sellsByHour?ids sells by hour
* @apiDescription sells of parties grouped by hour
* @apiName sellsByHour
* @apiGroup Party
*
* @apiParam {String[]} id parties ids
*
* @apiSuccess {Object[]} party 			 Party List 
* @apiSuccess {String}   party.id      	 Party Id
* @apiSuccess {String}   party.name      Party Name
* @apiSuccess {Date}   	 party.date      Party Date
* @apiSuccess {Number}   party.raised   	 Ammount raised by in that hour
* @apiError 400
*/

/** 
* @api {get} /party/sellsByPOS/?ids sells by POS
* @apiDescription sells of parties grouped by POS
* @apiName sellsByPos
* @apiGroup Party
*
* @apiParam {String[]} id parties ids
*  
* @apiSuccess {Object}   pos     		POS
* @apiSuccess {String}   pos.id      	POS Id
* @apiSuccess {String}   pos.name    	POS Name
* @apiSuccess {Number}   pos.raised  	Ammount raised by the pos in that party
* @apiError 400
*/

/** 
* @api {get} /party/sellsByWaiter/?ids sells by Waiter
* @apiDescription sells of parties grouped by Waiter
* @apiName sellsByWaiter
* @apiGroup Party
*
* @apiParam {String[]} id parties ids
*
* @apiSuccess {Object}   waiter     	Waiter
* @apiSuccess {String}   waiter.id 		Waiter Id
* @apiSuccess {String}   waiter.name    Waiter Name
* @apiSuccess {Number}   waiter.raised  Ammount raised by the waiter in that party
* @apiError 400
*/


/** 
* @api {get} /party/sellsByProduct/?ids sells by product
* @apiDescription sells of parties grouped by product
* @apiName sellsByProduct
* @apiGroup Party
*
* @apiParam {String[]} id parties ids
*
* @apiSuccess {Object}   product     		Product
* @apiSuccess {String}   product.id 		Product Id
* @apiSuccess {String}   product.name    	Product Name
* @apiSuccess {Number}   product.raised   	Ammount raised by the Product
* @apiSuccess {Number}   product.quantity   Quantity of Products sold
* @apiError 400
*/

/** 
* @api {get} /party/sellsByPaymentType/?ids sells by payment type
* @apiDescription sells of parties grouped by payment type
* @apiName sellsByProduct
* @apiGroup Party
*
* @apiParam {String[]} id parties ids
*
* @apiSuccess {Object}   payment     		Payment
* @apiSuccess {String}   payment.id 		Payment Id
* @apiSuccess {String}   payment.type    	Payment Name
* @apiSuccess {Number}   product.raised   	Ammount raised by the Payment
* @apiSuccess {Number}   product.quantity   Quantity sold with this Payment
* @apiError 400
*/