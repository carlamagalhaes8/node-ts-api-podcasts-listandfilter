import {IncomingMessage, request, ServerResponse} from "http";
import {serviceListEpisodes} from "../services/list-episodes-service";
import { serviceFilterEpisodes } from "../services/filter-episodes";
import { stat } from "fs";
import { statusCode } from "../utils/status-code";
import { contentType } from "../utils/content-type";
import { podcastTransferModel } from "../models/filter-podcast-model";

export const getListEpisodes = async (
    request: IncomingMessage, 
    response: ServerResponse) => {

        const content: podcastTransferModel = await serviceListEpisodes();

    response.writeHead(content.statusCode, {'Content-Type': contentType.JSON});
    response.write(JSON.stringify(content.body));

    response.end();
};

export const getFilterEpisodes = async (
    request: IncomingMessage,
    response: ServerResponse) => {

        const content: podcastTransferModel = await serviceFilterEpisodes(request.url);

        response.writeHead(content.statusCode, {'Content-Type': contentType.JSON});
        response.write(JSON.stringify(content.body));
        response.end();
    };