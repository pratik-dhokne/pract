var mysql=require('mysql'); 
var conn=mysql.createConnection({ 
host:"localhost", 
user:"root", 
password:"Phd123@p#", 
database:"mydb" 
}); 
conn.connect(function(err){ 
if(err) 
throw err; 
conn.query("SELECT * FROM employee WHERE name='Sachin'",function (err, result, fields){ 
if(err) 
throw err; 
console.log(result); 
}); 
}); 