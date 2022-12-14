document.body.style.backgroundColor = "grey"
//document.querySelector("#movie-list")
//var remainingTickets = movie.capacity - movie.tickets_sold
// create movie element

function createMovie(movie){
    //var remainingTickets = movie.capacity - movie.tickets_sold
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
        <p><span class="ticket-count">y</span> Tickets Left</p>
        <div class="button" id="purchase">
        <button id="purchase-buttton"> BUY A TICKET </button>
        </div>  
        `
     //add the movie list to DOM
    document.getElementById("movie-list").appendChild(card)  
    
    //hide capacity and tickets-sold from display webpage
    document.querySelector("h3").style.display = "none"
    document.querySelector("h6").style.display = "none"

    const button = document.getElementById("purchase")
    //console.log(button)
    button.addEventListener('click', ()=>{
        var remainingTickets = movie.capacity - movie.tickets_sold
    //console.log(remainingTickets)
    return remainingTickets
    if(remainingTickets > 0){
        remainingTickets -= 1
        return remainingTickets
        //document.querySelector("span").innerHTML = remainingTickets
        //return remainingTickets
        card.querySelector('span').textContent = `${remainingTickets}`
    }
    else{
        document.querySelector("span").innerHTML = "SOLD OUT!"
        console.log('SOLD OUT')
    }
    })   
    




//const button = document.querySelector(".button")

//button.addEventListener('click', logOfTickets)

}

function createMovieMenu(movie){
let menu = document.createElement('li')
    //menu.className = 
    menu.id = 'menu-list'
    menu.innerHTML = `
    <button class="dropdown-item" type="button"> ${movie.title} </button> `
    //const li = document.querySelector('#name-list')
    

    //add menu list to the dom
    document.querySelector(".dropdown-menu").appendChild(menu)
    //let menuNames =document.querySelector("#dropdown-item")
    //console.log(menuNames)

//function movieMenu(){
    const menuButton = document.querySelector("#menu-button")
   // menuButton.addEventListener('click', displayMenuList)
    //menuButton.addEventListener('click', function(event) { 
        //console.log(event.target.value) //}) 
function displayMenuList() {
    let menuNames =document.querySelector("#dropdown-item")
    //console.log(menu)
}
displayMenuList()
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

