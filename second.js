//http
const http = require("http");

const server = http.createServer((req,resp) => {

    // req = request process
    // response = for writing response
    resp.writeHead(200,{"content-type": "text/html"});
    resp.write("<h1> this is response from first server </h1>")
    resp.write("<h1> this is second heading for this code </h1>")
    resp.write("<button>click me </button>")
    resp.end("oke bye bye")
})

server.listen(9898)