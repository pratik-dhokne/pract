var mysql=require('mysql'); 
var conn=mysql.createConnection({ 
host:"localhost", 
user:"root", 
password:"Phd123@p#" 
}); 
conn.connect(function(err){ 
if(err) 
throw err; 
console.log("connection with the mysql is successfull.."); 
});

//npm install mysql