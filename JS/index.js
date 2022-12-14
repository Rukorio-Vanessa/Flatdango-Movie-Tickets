document.body.style.backgroundColor = "grey"
//document.querySelector("#movie-list")

// create movie element
function createMovie(movie){
   
    let card = document.createElement('li')
    card.className = 'card'
    card.innerHTML = `
        <img src="${movie.poster}">
        <div class="content">
        <h2>${movie.title}</h2>
        <h4>${movie.description}</h4>
        <h5>Showtime:${movie.showtime}</h5>
        <h5>${movie.runtime}minutes</h5>
        <h3>${movie.capacity}</h5>
        <h6>${movie.tickets_sold}</h5
        <p><span class="ticket-count">${logOfTickets()}</span> Tickets Left </p
        <div class="button">
        <button> BUY A TICKET </button>
        </div>  
          `
     //add the movie list to DOM
    document.getElementById("movie-list").appendChild(card)  

    const button = document.querySelector("button")
    button.addEventListener('click', logOfTickets)   
    
function logOfTickets(){ 
    
    const remainingTickets = movie.capacity - movie.tickets_sold
    //console.log(remainingTickets)
    return remainingTickets
    if(remainingTickets > 0){
        remainingTickets -= 1
        return remainingTickets
        //document.querySelector("span").innerHTML = remainingTickets
        //return remainingTickets
        card.querySelector('p').textContent = `${remainingTickets}`
    }
    else{
        document.querySelector("p").innerHTML = "SOLD OUT!"
        console.log('SOLD OUT')
    }
}
logOfTickets()



//const button = document.querySelector(".button")

//button.addEventListener('click', logOfTickets)

}
function createMovieMenu(movie){
let menu = document.createElement('ul')
    menu.className = 'dropdown-menu'
    menu.id = 'films'
    menu.innerHTML = `
    <li><button class="dropdown-item" type="button"> ${movie.title} </button></li>  `
    document.querySelector(".dropdown").appendChild(menu)
    

//function movieMenu(){
    const menuButton = document.querySelector("#menu-button").addEventListener('click', createMovieMenu)
    //menuButton.addEventListener('click', function(event) { 
        //console.log(event.target.value) //}) 
        
}
//movieMenu()
//}

function getMenuNames(){
    fetch("http://localhost:3000/films/")
    .then((resp) => resp.json())
    .then(data => data.forEach(movie => createMovieMenu(movie)))

}

//fetch list of animals for resources
function getMovies(){
    fetch("http://localhost:3000/films")
    .then((resp) => resp.json())
    .then(data => data.forEach(movie => createMovie(movie)))
}
//retrieve data and render the animal list to the DOM
function initialize(){
    getMovies()
    getMenuNames()
}
initialize()

