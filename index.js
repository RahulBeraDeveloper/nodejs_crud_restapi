// var http = require('http');

// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   res.end('Hello World!');
// }).listen(8080);

// var a =20;
// var b=40;
// var c=40;
// console.log(a+b+c);

// const  arr=[2,5,4,2,1];
// const result = arr.filter((item)=>{
//   return item >2
// });

// console.log(result)


// const fs = require('fs')
// fs.writeFileSync("hello.txt","Hello file");


const http = require ('http');
http.createServer((req,res)=>{
   res.write("Hello, I am server");
   res.end();
}).listen(5500);   
