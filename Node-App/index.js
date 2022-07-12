const http = require('http');
const fs = require('fs');

const port = process.env.PORT;
const hostName = '127.0.0.1';


const server = http.createServer((req,res) => {
    if(req.url === '/'){
        fs.readFile('./views/home.html', 'utf-8', (err,data) => {
            if(err){
                console.log(err);
            }else{
                res.writeHead(200, {'Content-Type':'text/html'});
                res.write(data);
                res.end();
            }
        })
    }
    else if(req.url === '/about'){
        fs.readFile('./views/about.html', 'utf-8', (err,data) => {
            if(err){
                console.log(err);
            }else{
                res.writeHead(200, {'Content-Type':'text/html'});
                res.write(data);
                res.end();
            }
        })
    }
    else if(req.url === '/contact'){
        fs.readFile('./views/contact.html', 'utf-8', (err,data)=>{
            if(err){
                console.log(err);
            }else{
                res.writeHead(200, {'Content-Type':'text/html'});
                res.write(data);
                res.end();
            }
        })
    }
    else{
        fs.readFile('./views/404.html','utf-8',(err,data)=>{
            if(err){
                console.log(err);
            }else{
                res.writeHead(404, {'Content-Type':'text/html'});
                res.write(data);
                res.end();
            }
        })
    }
});

server.listen(port, hostName,()=>{
    console.log(`Server is running at http://${hostName}:${port}`);
});

