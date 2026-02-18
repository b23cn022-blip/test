const http = require ("http");

const server1 = http.createServer((req,res)=>{
    res.write("hello from  server!");
        res.end();
    
});
server1.listen(3000,() =>{
    console.log("server running on http://localhost:3000");
});

const server2 = http.createServer((req,res)=>{
    res.write("Hello from  server!");
        res.end();
});
server2.listen(2000,() =>{
    console.log("server running on http://localhost:2000");
});

const server3 = http.createServer((req,res)=>{
    res.write("Hello from  server!");
        res.end();
});
server3.listen(5000,() =>{
    console.log("server running on http://localhost:5000");
});

const server4 = http.createServer((req,res)=>{
    res.write("Hello from  server!");
        res.end();
});
server4.listen(4000,() =>{
    console.log("server running on http://localhost:4000");
});


