// implementação do http
import * as http from "http";
import {getFilterEpisodes, getListEpisodes} from "./controllers/podcasts-controller";

const server = http.createServer(
    async (request: http.IncomingMessage, response: http.ServerResponse) => {

        // queryString
        const [baseUrl, queryString] = request.url?.split("?") ?? ["", ""];
        
        // listar podcasts
        if (request.method === "GET" && baseUrl === "/api/list") {
            await getListEpisodes(request, response);
        }

        if (request.method === "GET" && baseUrl === "/api/episode") {
            await getFilterEpisodes(request, response);
        }
    });

const port  =   process.env.PORT

server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})

// final da implementação do http
