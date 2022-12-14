# Flatdango-Movie-Tickets
Flatdango application for purchasing moving tickets-created using HTML, CSS, and Javascript
## General Description
An application that displays movies available for showing at Flatiron Movie theatre and allows a user to purchase a ticket.

You can access this website on this link: https://rukorio-vanessa.github.io/Flatdango-Movie-Tickets/

## Getting Started
* To use the content in the repository ensure you have
 - A computer that runs on either: Windows 7+, Linux, Mac OS
 - node 9.0+

## Installation
To use this repository on your machine carry out the following steps:

* Open your terminal

* Run this command to install JSON server:
   npm install -g json-server

* Clone the reository using:
   https://github.com/Rukorio-Vanessa/Flatdango-Movie-Tickets

* Now, change your directory to the new repository folder using:
   cd Flatdango-Movie-Tickets

* To open in vs code use:
   code .   

## Running the Project
The following can be used to run the program:
* To run the program use:
  - json-server --watch db.json      
  

## Project Description
This app allows you to buy a ticket to a movie in Flatiron movie theatre.

It contains a single html document containing a navigation bar with a menu and a body that has a div container to put the list and details of the movies showing at the theatre.
Input this data http://localhost:3000/films in my db.json file.

Run json-server --watch db.json to begin the backend

In the index js file there is a  function that creates movies at the theatre 'createMovie()' which was used to create an element 'li'in html that holds the list of animals and their details. 
 The list ws added to the DOM using:
    document.getElementById("movie-list").appendChild(card) 

fetch data from the server using the function and passed the function createMovie() to produce all the movies on the DOM:
  function getMovies(){
    fetch("http://localhost:3000/films")
    .then((resp) => resp.json())
    .then(data => data.forEach(movie => createMovie(movie)))
}

To allow a user to buy a ticket I added an event listener to the button to allow them to click to buy one.

I made request for the data for the menu list using fetch function i.e:
   function getMenuNames(){
    fetch("http://localhost:3000/films/")
    .then((resp) => resp.json())
    .then(data => data.forEach(movie => createMovieMenu(movie)))
}

I created a function  that creates a list of movie titles "createMovieMenu" on the menu bar and added a clicking event listener to it.

There is also a function to retrieve data and render the movie list to the DOM called initialize that calls the function getMovies and getMovieNames i.e:
 function initialize(){
    getMovies()
    getMoviesNames()
 }
 initialize()





## Dependencies
- package.json

## Technologies Used
1. HTML
2. Javascript
3. JSON
4. CSS

## Author 
[Vanessa Rukorio](https://github.com/Rukorio-Vanessa) 

## Contact Information
* Email : vanessa.kirangari@moringaschool.com

## License
The product is licensed under ISC