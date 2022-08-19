const API_KEY = '1ab36be11f7beb572b69943cf3b6319a';
const BASE_URL = 'https://api.themoviedb.org/3/movie/';
const IMG_URL = 'https://image.tmdb.org/t/p/w500';
const language = 'language=pt-BR';

const buscaFilme = document.querySelector('#buscaFilme')
const input = document.querySelector('input')
const body = document.querySelector('body')
const slider = document.querySelector('.slider')
const sobre = document.querySelector('#sobre')
let theme = true

input.addEventListener('click', () => {
    theme ?
        body.style = 'background-color: #292C35; transition: .4s;' :
        body.style = 'background-color: #F1F1F1; transition: .4s;'
        theme ?
        sobre.style = 'color: rgb(170, 170, 170); transition: .4s;' :
        sobre.style = 'color: rgb(0, 0, 0); transition: .4s;'

    theme = !theme;
})
console.log(IMG_URL)
async function busca(id) {
    try {
        const data = await fetch(`${BASE_URL}/${id}?api_key=${API_KEY}&${language}`)
            .then(response => response.json())

        console.log(data)
        if (data.title != undefined) {
            filmeImage.src = `${IMG_URL}${data.poster_path}`
            filmeNome.innerText = data.title
            descricao.innerText = data.overview
        }


    } catch (e) {
        console.log(e)

    }

}

buscaFilme.addEventListener('click', () => {
    let id = Math.floor(Math.random() * 1002)
    console.log(id)
    busca(id)
})

