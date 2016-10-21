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
});