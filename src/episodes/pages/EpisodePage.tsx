import { Typography } from "@mui/material"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Episode } from "../../interfaces"
import { getEpisodeById } from "../helpers/getEpisodeById"

export const EpisodePage = () => {
    const { id } = useParams()
    const [episode, setEpisode] = useState<Episode>()
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const fetchData = async () => {
            const res = await getEpisodeById(id as string)
            setEpisode(res)
            setIsLoading(false)
        }
        fetchData()
    }, [id])

    return (
        <>
            {!isLoading ? (
                <>
                    <Typography variant="h2" align="center" marginTop={3}>{episode?.name}</Typography>
                    <Typography variant="h4" align="center" marginTop={3}>Episodio: {episode?.episode}</Typography>
                    <Typography variant="h4" align="center" marginTop={3}>Air date: {episode?.air_date}</Typography>
                </>
            ) : (
                <Typography variant="h2" align="center" marginTop={3}>Loading...</Typography>
            )}
        </>

    )
}
