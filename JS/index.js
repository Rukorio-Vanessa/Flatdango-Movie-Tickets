document.addEventListener('DOMContentLoaded', () => {
    // create random meal element


    
    const getMovie = () => {
        fetch("http://localhost:3000/films")
            .then((response) => response.json())
            .then((data) => {
                const movieInfo = data.films[0]
                const title = movieInfo.title
                const description = movieInfo.description
                const image = movieInfo.poster
                const showtime = movieInfo.showtime
                const runtime = movieInfo.runtime
                const movieElement = createMovie(image, title, description, showtime, runtime)
                document.querySelector('#movie').appendChild(movieElement)
            })
    }
    getMovie()


})