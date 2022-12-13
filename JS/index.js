document.addEventListener('DOMContentLoaded', () => {
    // create random meal element
    function generateAnAnimal(movie){
        let animalList = document.createElement('li')
        animalList.className = 'list'
        animalList.innerHTML = `
          <img src="${animal.image}">
          <div class="info">
          <h4>${animal.id}</h4>
          <h4>${animal.name}</h4>
          <p>$<span class="vote-count">${animal.votes}</span> Voted </p>
          </div>
          <div class="button">
            <button> VOTE </button>
          </div>  
          `
    //add the animal list to DOM
    document.getElementById("animal-list").appendChild(animalList)  
    }
})