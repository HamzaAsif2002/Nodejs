import { readFile, writeFile } from "fs/promises";
import { createServer } from "http";
import path from "path";
import crypto from "crypto";

const PORT = 3004;
const DATA_FILE = path.join("data", "links.json");
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

const loadLinks = async () => {
    try {
        const data = await readFile(DATA_FILE, "utf-8");
        return JSON.parse(data);
    } catch (error) {
        if(error.code == "ENOENT"){
            await writeFile(DATA_FILE, JSON.stringify({}));
            return {};
        }
        throw error;
    }
}

const saveLinks = async (links) => {
    await writeFile(DATA_FILE, JSON.stringify(links), "utf-8")
}

const server = createServer( async (req, res) => {
   if (req.method === "GET") {
    switch (req.url) {
      case "/":
        return serveFile(res, path.join("public", "index.html"), "text/html");
      case "/style.css":
        return serveFile(res, path.join("public", "style.css"), "text/css");
      case "/links":
        const links = await loadLinks();
         res.writeHead(200, { "Content-Type": "application/json" });
         return res.end(JSON.stringify(links)); 
        
      default:
        const linkss = await loadLinks();
        const shortCode = req.url.slice(1);
        if(linkss[shortCode]){
        res.writeHead(302, {location: linkss[shortCode]});
        return res.end();
        }
         res.writeHead(404, {"Content-Type": "text/plain"});
        return res.end("Shortened URL is not found");
    }
  }
  
  if(req.method === "POST" && req.url === "/shorten"){
     
    const links = await loadLinks();

    let body = "";
     req.on("data" , (chunk) => {
        body += chunk;
     });

     req.on("end", async () => {
        const {url, shortCode} = JSON.parse(body);
        
        if(!url){
            res.writeHead(404, {"Content-Type": "text/plain"});
            return res.end("URl is required");
        }

        const finalShortCode = shortCode || crypto.randomBytes(4).toString("hex");

        if(links[finalShortCode] ){
            res.writeHead(404, {"Content-Type": "text/plain"});
            return res.end("Short code already exists.Pleae chose Another");
        }
        links[finalShortCode] = url;
        await saveLinks(links);
       
         res.writeHead(200, {"Content-Type": "application/json"});
         return res.end(JSON.stringify({sucess:true, shortCode: finalShortCode}));

     });
  }

})

server.listen(PORT, () => {
    console.log(`server running at http://localhost:${PORT}`);
    
});