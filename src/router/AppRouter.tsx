import { Container } from '@mui/material'
import { Navigate, Route, Routes } from 'react-router-dom'
import { CharacterPage, CharactersPage } from '../characters/pages'
import { EpisodePage, EpisodesPage } from '../episodes/pages'
import { SearchPage } from '../search/pages'
import { Navbar, Sidebar } from '../ui/components'

export const AppRouter = () => {
    return (
        <>
            <Navbar />
            <Sidebar />
            <Container maxWidth="xl">
                <Routes>
                    <Route path="/" element={<Navigate to="/characters" />} />
                    <Route path="characters" element={<CharactersPage />} />
                    <Route path="character/:id" element={<CharacterPage />} />
                    <Route path="episodes" element={<EpisodesPage />} />
                    <Route path="episode/:id" element={<EpisodePage />} />
                    <Route path="search" element={<SearchPage />} />
                </Routes>
            </Container>
        </>
    )
}
