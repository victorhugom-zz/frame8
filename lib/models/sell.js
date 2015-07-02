/**
* @api {get} /sell/summary?limit&skip&sort&filter summary
* @apiDescription list a summary of all sells ordered by date
* @apiName summary
* @apiGroup Sell
*
*
* @apiError 400 Error
* @apiSuccess {Object[]} sell 					Sell List
* @apiSuccess {String}   sell.id      			Sell Id
* @apiSuccess {Date}   	 sell.date     			Sell Date
* @apiSuccess {String}   sell.bar.name     		Bar Name
* @apiSuccess {Number}   party.waiter.name  	Waiter name
* @apiSuccess {Number}   party.raised   		Ammount raised by the sell
* @apiSuccess {Number}   party.paymenyType.name Sell paymeny type name
* @apiSuccess {Number}   party.products.count	Quantity of products selled
*/


/**
* @api {get} /sell/:id get
* @apiDescription get an sell
* @apiName getById
* @apiGroup Sell
*
* @apiParam {String} id
*
* @apiSuccess {Object} 	 sell
* @apiSuccess {Number} 	 sell.total				Total sell ammount
* @apiSuccess {Object[]} sell.payment 			Payment List
* @apiSuccess {String} 	 sell.payment.type 		Payment type
* @apiSuccess {String} 	 sell.payment.flag 		Payment flag (if by card)
* @apiSuccess {Number} 	 sell.payment.value		Payment type name
* @apiSuccess {Object[]} sell.products			Catalog Product List
* @apiSuccess {String}   sell.products.id 		Product id
* @apiSuccess {String}   sell.products.name 	Product name
* @apiSuccess {Number}   sell.products.price 	Product price
* @apiSuccess {String}   sell.products.type     Product type name
* @apiSuccess {String}   sell.products.image 	Product image url
* @apiSuccess {String}   sell.products.code 	Product validation code (exist after sell)
*
* @apiError 400 Sell not found
*/

/**
* @api {post} /payment/ create
* @apiDescription create a payment
* @apiName create
* @apiGroup Payment
*
* @apiSuccess {Object} 	 sell
* @apiSuccess {Object[]} sell.payment 			Payment List
* @apiSuccess {String} 	 sell.payment.type 		Payment type
* @apiSuccess {String} 	 sell.payment.flag 		Payment flag (if by card)
* @apiSuccess {Number} 	 sell.payment.value		Payment type name
* @apiSuccess {Object[]} sell.products			Product List
* @apiSuccess {String}   sell.products.id 		Product id
* @apiSuccess {String}   sell.products.quantity 		Product Quantity
* @apiSuccess {String}   sell.waiterId 		Product id
*
* @apiSuccess 200 Success
* @apiError 400
*/
