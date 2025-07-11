const http = require('http');

const server = http.createServer((req, res)=>{
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('Server Running Successfully');
})

const port = process.env.PORT || 3000;

server.listen(port, ()=>{
  console.log('Server is running press CTRL-C to quit');
});