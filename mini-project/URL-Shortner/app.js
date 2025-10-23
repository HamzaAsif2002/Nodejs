import { readFile } from "fs/promises";
import { createServer } from "http";
import path from "path";

const PORT = 3003;
const serveFile = async ( res, filepath, contenttype) => {
     try {
             const data = await readFile(filepath);
              res.writeHead(200, {"Content-Type": contenttype });
              res.end(data);
                
            } catch (error) {
                res.writeHead(404, {"Content-Type": contenttype});  
                res.end("404 page not found");
            }
}
const server = createServer( async (req, res) => {
   if (req.method === "GET") {
    switch (req.url) {
      case "/":
        return serveFile(res, path.join("public", "index.html"), "text/html");
      case "/style.css":
        return serveFile(res, path.join("public", "style.css"), "text/css");
      default:
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("404 - Page Not Found");
    }
  } else {
    res.writeHead(405, { "Content-Type": "text/plain" });
    res.end("405 - Method Not Allowed");
  }
})

server.listen(PORT, () => {
    console.log(`server running at http://localhost:${PORT}`);
    
})