import http from "http"

// Create HTTP server
const server = http.createServer((req,res) => {
    console.log(req.url)
    res.end("Hello World")
});


// Start server on port 3000
server.listen(3000, () => {
    console.log("server running at http://localhost:3000");
    
});