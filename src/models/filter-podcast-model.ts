import { PodcastModel } from "./podcast-model";

export interface podcastTransferModel {
    statusCode: number;
    body: PodcastModel[];
}
