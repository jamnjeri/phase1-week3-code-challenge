let baseUrl = 'http://localhost:3000'
let filmEndPoint = '/films'

let url = `${baseUrl}${filmEndPoint}`

//Function to get the page titles
let films = fetch(url)
    .then((films) => films.json())
    .then((response) => {
        let films =response
        // console.log(films);
        
        addFirstMovieTitleFunc(films)
        addFirstMoviePosterFunc(films)

        for (film of films){
            // console.log(film.title);
            createElementFunc(films)
        }
    });

function createElementFunc(films){
    //Create the new element
    let list = document.createElement('li')
    list.className = `Title ${film.id}`
    list.innerText = film.title

    //Get where you want to place them
    let parentContent = document.querySelector('ul')

    //Add the element
    parentContent.appendChild(list)
}

function addFirstMovieTitleFunc(films){
    //console.log(films[0])
    //Grab where you want to add the content
    let parentContent = document.querySelector('.movie-title')
    //console.log(parentContent)
    //Add the title to the header container
    parentContent.innerText=`${films[0].title}`
}

function addFirstMoviePosterFunc(films){
    //console.log(films[0].poster)
    let image = document.createElement('img')
    image.src = `${films[0].poster}`
    let parentContent = document.querySelector('#poster')
    console.log(parentContent)
    parentContent.appendChild(image)
}