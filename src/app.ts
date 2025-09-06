import * as http from "http";
import {getFilterEpisodes, getListEpisodes} from "./controllers/podcasts-controller";
import { Routes } from "./routes/routes";
import { httpMethods } from "./utils/http-methods";

export const app = async (request: http.IncomingMessage, response: http.ServerResponse) => {

        // queryString
        const [baseUrl, queryString] = request.url?.split("?") ?? ["", ""];
        
        // listar podcasts
        if (request.method === httpMethods.GET && baseUrl === Routes.LIST) {
            await getListEpisodes(request, response);
        }

        if (request.method === httpMethods.GET && baseUrl === Routes.EPISODE) {
            await getFilterEpisodes(request, response);
        }
    }