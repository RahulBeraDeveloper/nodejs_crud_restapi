 const http = require ('http');

 http.createServer((req,res)=>{
    res.write("<h2 >Hello, I am server</h2>");
    res.end();
 }).listen(5500);