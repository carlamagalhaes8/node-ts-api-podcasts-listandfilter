import {IncomingMessage, request, ServerResponse} from "http";
import {serviceListEpisodes} from "../services/list-episodes-service";
import { serviceFilterEpisodes } from "../services/filter-episodes";

export const getListEpisodes = async (
    request: IncomingMessage, 
    response: ServerResponse) => {

        const content = await serviceListEpisodes();

    response.writeHead(200, {'Content-Type': 'application/json'});
    response.end(
        JSON.stringify(content)
);
};

export const getFilterEpisodes = async (
    request: IncomingMessage,
    response: ServerResponse) => {

        const content = await serviceFilterEpisodes(request.url);

        response.writeHead(200, {'Content-Type': 'application/json'});
        response.end(
            JSON.stringify(content)
    );
    };