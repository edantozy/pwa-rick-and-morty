import { rickAndMortyAPI } from "../../apis"
import { Character } from "../../interfaces"

export const getCharacterById = async (id: string) => {
    const { data } = await rickAndMortyAPI.get<Character>(`/character/${id}`)
    return {
        id: data.id,
        name: data.name,
        created: data.created,
        episode: data.episode,
        gender: data.gender,
        image: data.image,
        location: data.location,
        origin: data.origin,
        species: data.species,
        status: data.status,
        type: data.type,
        url: data.url
    }
}
