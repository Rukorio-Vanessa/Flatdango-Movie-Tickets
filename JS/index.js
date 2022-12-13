document.addEventListener('DOMContentLoaded', () => {
    // create movie element
    function generateAnAnimal(movie){
        let movieList = document.createElement('li')
        movieList.className = 'list'
        movieList.innerHTML = `
          <img src="${movie.poster}">
          <div class="info">
          <h2>${movie.title}</h2>
          <h4>${movie.description}</h4>
          <h5>${movie.showtime}</h5>
          <h5>${movie.runtime}</h5>
    
          <div class="button">
            <button> BUY A TICKET </button>
          </div>  
          `
    //add the movie list to DOM
    document.getElementById("movie-list").appendChild(movieList)  
    }
})