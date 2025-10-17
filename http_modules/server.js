const http = require("http");

const server = http.createServer((req, res) => {
  if(req.url === "/"){
    res.write("I am Hamza Asif a Full Stack Web Developer like");
    res.end();
  }
  if(req.url === "/about"){
    res.write("<h1>About : I am Hamza Asif a Full Stack Web Developer<h1/>");
    res.end();
  }
  if(req.url === "/contact"){
    res.write("contact : I am Hamza Asif a Full Stack Web Developer");
    res.end();
  }
  if(req.url === "/personal"){
    res.write("personal : I am Hamza Asif a Full Stack Web Developer");
    res.end();
  }
});



 
const PORT = 4000;
server.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}`); 
})