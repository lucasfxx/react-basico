import axios from 'axios'

const apiFilmes = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    headers: {
        'content-type': 'application/json;charset=utf-8',
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ODc5MWJiYTMyN2Q5ZTA3NWU5YjM3MWJiNmQ0ZmNjMCIsInN1YiI6IjYyNGUxZmZkOWE2NGMxMDA2NWUwNGM3YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.R3ADV3hCjBAW2bN9w4_esMWotbgFdhfircVejpBjQpw'
    }
})

export default apiFilmes