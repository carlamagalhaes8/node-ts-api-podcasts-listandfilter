// implementação do http
import * as http from "http";

const server = http.createServer(
    (request: http.IncomingMessage, response: http.ServerResponse) => {});

const port  =   process.env.PORT

server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})

// final da implementação do http
