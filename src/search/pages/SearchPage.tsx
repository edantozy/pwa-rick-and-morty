import { ChangeEvent, useState } from "react"
import { Box, Button, FormControl, FormControlLabel, FormLabel, InputLabel, MenuItem, Radio, RadioGroup, Select, SelectChangeEvent, TextField, Typography } from "@mui/material"
import { useDispatch, useSelector } from "react-redux"
import { getResults } from "../../store/slices/search/thunks"
import { RootState } from "../../store"
import { GeneralList, InfoCard, SkeletonList } from "../../ui/components"
import { resetResults, setGender, setPage, setSearch, setStatus } from "../../store/slices/search"
import { Character, Episode } from "../../interfaces"

export const SearchPage = () => {
    const [kindSearch, setKindSearch] = useState('character')
    const dispatch = useDispatch()
    const { search, status, gender, page, results, totalPages, isLoading } = useSelector((state: RootState) => state.search)
    const query = `${kindSearch}/?page=${page}&name=${search}&gender=${gender}&status=${status}`

    const handleGender = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setGender(e.target.value))
    }
    const handleStatus = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setStatus(e.target.value))
    }
    const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setSearch(e.target.value))
    }
    const handleSelect = (e: SelectChangeEvent<string>) => {
        setKindSearch(e.target.value)
        dispatch(resetResults())
    }


    const handleSearch = () => {
        dispatch(getResults(page, query) as any)
    }

    return (
        <div>
            <h2>Realiza una búsqueda</h2>
            <Box
                component="form"
                sx={{
                    display: 'flex',
                    '& .MuiTextField-root': { m: 1, width: '25ch' },
                    alignItems: 'center'
                }}
                noValidate
                autoComplete="off"
            >
                <TextField id="search" label="Outlined" variant="outlined" value={search} onChange={handleInput} />
                <FormControl>
                    <InputLabel id="demo-simple-select-label">Select kind of search</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={kindSearch}
                        label="Select kind of search"
                        onChange={handleSelect}
                    >
                        <MenuItem value="character">By Characters</MenuItem>
                        <MenuItem value="episode">By Episodes</MenuItem>
                    </Select>
                </FormControl>
                <Button
                    variant="contained"
                    disableElevation
                    size="large"
                    sx={{ color: 'white', marginLeft: '0.5rem' }}
                    onClick={handleSearch}
                >Search</Button>
            </Box>
            {
                (kindSearch === 'character') ? (

                    <Box>
                        <FormControl>
                            <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
                            <RadioGroup
                                aria-labelledby="demo-radio-buttons-group-label"
                                value={gender}
                                name="radio-buttons-group"
                                onChange={handleGender}
                            >
                                <FormControlLabel value="female" control={<Radio />} label="Female" />
                                <FormControlLabel value="male" control={<Radio />} label="Male" />
                                <FormControlLabel value="genderless" control={<Radio />} label="Genderless" />
                                <FormControlLabel value="unknow" control={<Radio />} label="Unknown" />
                            </RadioGroup>
                        </FormControl>
                        <FormControl>
                            <FormLabel id="demo-radio-buttons-group-label">Status</FormLabel>
                            <RadioGroup
                                aria-labelledby="demo-radio-buttons-group-label"
                                value={status}
                                name="radio-buttons-group"
                                onChange={handleStatus}
                            >
                                <FormControlLabel value="alive" control={<Radio />} label="Alive" />
                                <FormControlLabel value="dead" control={<Radio />} label="Dead" />
                                <FormControlLabel value="unknow" control={<Radio />} label="Unkwown" />
                            </RadioGroup>
                        </FormControl>
                    </Box>
                ) : null
            }
            {
                (!isLoading) ? (
                    <GeneralList
                        page={page}
                        totalPages={totalPages}
                        setPage={setPage}
                        getList={getResults}
                        query={query}
                    >
                        {
                            (kindSearch === 'character') ? (
                                <>
                                    {results.map((el: Character) => (
                                        <InfoCard
                                            title={el.name}
                                            imageUrl={el.image}
                                            key={el.id}
                                            url={`/character/${el.id}`}
                                        >
                                            <Typography>Specie: {el.species}</Typography>
                                            <Typography>Status: {el.status}</Typography>
                                            <Typography>Gender: {el.gender}</Typography>
                                        </InfoCard>
                                    ))}
                                </>
                            ) : (
                                <>
                                    {results.map((el: Episode) => (
                                        <InfoCard
                                            title={el.name}
                                            key={el.id}
                                            url={`/episode/${el.id}`}
                                        >
                                            <Typography>Episode: {el.episode}</Typography>
                                            <Typography>Air date: {el.air_date}</Typography>
                                        </InfoCard>
                                    ))}
                                </>
                            )
                        }
                    </GeneralList>
                ) : (
                    <SkeletonList list={results} />
                )
            }
        </div>
    )
}
