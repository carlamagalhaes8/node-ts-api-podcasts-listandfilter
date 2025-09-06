import { PodcastModel } from "./podcast-model";

export interface filterPodcastModel {
    statusCode: number;
    body: PodcastModel[];
}
