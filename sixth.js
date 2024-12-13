var http=require('http'); 
var uc=require('upper-case'); 
http.createServer(function(req,res){ 
res.writeHead(200,{'content-Type':'text/html'}); 
res.write(uc.upperCase("hello neha")); 
res.end(); 
}).listen(8080); 

//npm install upper-case