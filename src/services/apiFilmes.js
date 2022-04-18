import axios from 'axios'

const apiFilmes = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    headers: {
        'content-type': 'application/json;charset=utf-8',
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5YTc4N2E5MzZhZjFlYzljNjNiZjE3Mzc3ZTRiMDc5YyIsInN1YiI6IjYyNGUxZmZkOWE2NGMxMDA2NWUwNGM3YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-p42aLZPhqTcIH_5TTSTJ19uGYgYU8HCcMcBdVBXAv0'
    }
})

export default apiFilmes