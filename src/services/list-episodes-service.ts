import { podcastTransferModel } from "../models/filter-podcast-model";
import { repositoryPodcast } from "../repositories/podcasts-repository";
import { statusCode } from "../utils/status-code";

export const serviceListEpisodes = async (): Promise<podcastTransferModel> => {
    // define contrato
    let responseFormat: podcastTransferModel = {
            statusCode: 0,
            body: [],
        }

    // buscar dados
    const data = await repositoryPodcast();

    // verifico o tipo de resposta
    responseFormat = {
    statusCode: data.length !== 0 ? statusCode.OK : statusCode.NO_CONTENT,
    body: data,
}

    return responseFormat;
}
