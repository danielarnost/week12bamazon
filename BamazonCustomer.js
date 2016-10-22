var mysql 					= require('mysql');
var secret_keys				= require('./secret_keys')

var prompt                  = require('prompt');
var conn = mysql.createConnection({
	host: 'localhost',
	port: 3306,
	user: 'root',
	password: secret_keys.password,
	database: 'bamazondb' 
});

conn.connect(function(err){
	if(err){
		console.log(err);
		throw err;
	}
});
conn.query('SELECT * FROM Products',function(err,rows){
	if(err) throw err;

	console.log('Data received from Db:\n');
	for (var i=0; i<rows.length; i++) {
	
	console.log("ID: " + rows[i].ItemID + ", Product: " + rows[i].ProductName + ", Department: " + rows[i].DepartmentName + ", Price: $" + rows[i].Price);
	}
		function productId() {
		
		var self = this;
		prompt.get(['chooseProductID'], function(err, result) {
			parseInt(result.chooseProductID);
			result.chooseProductID--;
			console.log('Add item: "' + rows[result.chooseProductID].ProductName + '" to Bamazon cart. Please choose your desired quantity. ');

		prompt.get(['howManyUnits'], function(err, res) {
			parseInt(res.howManyUnits);
				parseInt(rows[result.chooseProductID].StockQuantity);
				if (res.howManyUnits > rows[result.chooseProductID].StockQuantity) {
					console.log('Sorry, Bamazon currently has an insufficient quantity to complete this order ');
				}else {
					console.log('You purchased ' + res.howManyUnits + " " + rows[result.chooseProductID].ProductName + 's for $' + rows[result.chooseProductID].Price * res.howManyUnits);
					rows[result.chooseProductID].StockQuantity = rows[result.chooseProductID].StockQuantity - res.howManyUnits;
					console.log('Remaining quantity: ' + rows[result.chooseProductID].StockQuantity)
				}
				productId();
			});
		});
	}
	productId();
});