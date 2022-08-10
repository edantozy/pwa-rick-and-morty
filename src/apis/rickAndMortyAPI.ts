import axios from 'axios'

const rickAndMortyAPI = axios.create({
    baseURL: 'https://rickandmortyapi.com/api'
})

export default rickAndMortyAPI