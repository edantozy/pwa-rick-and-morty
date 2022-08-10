import { rickAndMortyAPI } from "../../apis"
import { Episode } from "../../interfaces"

export const getEpisodeById = async (id: string) => {
    const { data } = await rickAndMortyAPI.get<Episode>(`/episode/${id}`)
    return {
        id: data.id,
        name: data.name,
        air_date: data.air_date,
        characters: data.characters,
        episode: data.episode,
        created: data.created,
        url: data.url
    }
}
