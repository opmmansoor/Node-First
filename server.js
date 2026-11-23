// import http from "http"

// // Create HTTP server
// const server = http.createServer((req,res) => {
//     console.log(req.url)
//     res.end("Hello World")
// });


// // Start server on port 8000
// server.listen(8000, () => {
//     console.log("server running at http://localhost:8000");
    
// });


import http from "http";

const server = http.createServer((req,res) => {
    res.end("Hello world");
})

//This first Define port 
// const PORT = 3000;

// server.listen(PORT, () => {
//     console.log(`server Running at http://localhost:${PORT}`);
    
// })

server.listen(3000, () => {
    console.log("server Running at http://localhost:3000");
    
})