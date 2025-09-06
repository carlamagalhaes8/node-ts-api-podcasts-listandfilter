import {IncomingMessage, request, ServerResponse} from "http";
import {serviceListEpisodes} from "../services/list-episodes-service";
import { serviceFilterEpisodes } from "../services/filter-episodes";
import { contentType } from "../utils/content-type";
import { podcastTransferModel } from "../models/podcast-transfer-model";

const defaultContent = {'Content-Type': contentType.JSON};

export const getListEpisodes = async (
    request: IncomingMessage, 
    response: ServerResponse) => {

        const content: podcastTransferModel = await serviceListEpisodes();

    response.writeHead(content.statusCode, defaultContent);
    response.write(JSON.stringify(content.body));

    response.end();
};

export const getFilterEpisodes = async (
    request: IncomingMessage,
    response: ServerResponse) => {

        const content: podcastTransferModel = await serviceFilterEpisodes(request.url);

        response.writeHead(content.statusCode, defaultContent);
        response.write(JSON.stringify(content.body));
        response.end();
    };