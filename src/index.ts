import http from "http";

const port = process.env.PING_LISTEN_PORT || 3000;

const requestHandler = (req: http.IncomingMessage, res: http.ServerResponse) => {
    if (req.url === "/ping" && req.method === "GET") {
        let clientHeaders: string = JSON.stringify(req.headers);
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(clientHeaders);
    } else {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end();
    }
};

const server = http.createServer(requestHandler);

server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});