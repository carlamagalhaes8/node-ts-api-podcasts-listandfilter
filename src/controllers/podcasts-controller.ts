import {IncomingMessage, request, ServerResponse} from "http";
import {serviceListEpisodes} from "../services/list-episodes-service";
import { serviceFilterEpisodes } from "../services/filter-episodes";
import { stat } from "fs";
import { statusCode } from "../utils/status-code";
import { contentType } from "../utils/content-type";
import { filterPodcastModel } from "../models/filter-podcast-model";

export const getListEpisodes = async (
    request: IncomingMessage, 
    response: ServerResponse) => {

        const content = await serviceListEpisodes();

    response.writeHead(statusCode.OK, {'Content-Type': contentType.JSON});
    response.end(
        JSON.stringify(content)
);
};

export const getFilterEpisodes = async (
    request: IncomingMessage,
    response: ServerResponse) => {

        const content: filterPodcastModel = await serviceFilterEpisodes(request.url);

        response.writeHead(content.statusCode, {'Content-Type': contentType.JSON});
        response.end(
            JSON.stringify(content.body)
    );
    };