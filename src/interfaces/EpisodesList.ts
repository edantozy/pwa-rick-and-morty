import { Episode } from "./Episode";
import { Info } from "./InfoList";

export interface EpisodesList {
    info: Info;
    results: Episode[];
}
