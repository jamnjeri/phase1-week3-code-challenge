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
        addFirstMovieDescriptionFunc(films)
        addFirstMovieTicketData(films)


        for (film of films){
            // console.log(film.title);
            createElementFunc(films)
        }
    });

function createElementFunc(films){
    //Create the new element
    let list = document.createElement('button')
    list.className = `Title${film.id}`
    list.id = `${film.id}`
    list.innerText = film.title

    //Get where you want to place them
    let parentContent = document.querySelector('ul')

    //Add the element
    parentContent.appendChild(list)

    //Add an event listener to each title
    addEventListenerToTitle(film)
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
    image.className = 'image'
    image.src = `${films[0].poster}`
    let parentContent = document.querySelector('#poster')
    //console.log(parentContent)
    parentContent.appendChild(image)
}

function addFirstMovieDescriptionFunc(films){
    let description = document.createElement('p')
    description.className = 'movieDescription'
    description.textContent = `${films[0].description}`
    let parentContent = document.querySelector('#description')
    //console.log(parentContent)
    parentContent.appendChild(description)
}

function addFirstMovieTicketData(films){
    //Add Capcaity Data
    let parentContent = document.querySelector('#capacity')
    //console.log(parentContent)
    parentContent.innerText= `Capacity: ${films[0].capacity}`

    //Add run-time data
    let parentContentTwo = document.querySelector('#run-time')
    parentContentTwo.innerText= `Run Time: ${films[0].runtime} minutes`

    //Add ShowTime data
    let parentContentThree = document.querySelector('#show-time')
    parentContentThree.innerText= `Show Time: ${films[0].showtime}`

    //Add Tickets-sold data
    let parentContentFour = document.querySelector('#tickets-sold')
    let ticketSold= document.createElement('div')
    ticketSold.innerHTML = `
        <h4 class = ticket-title>Tickets Sold: </h4>
        <p id = "tickets-Sold" class = sold-value>${films[0].tickets_sold}</p>
    `
    //Add new elements to DOM
    parentContentFour.appendChild(ticketSold)

    //Add Available tickets data
    let parentContentFive = document.querySelector('#available-tickets')
    let capacityValue = films[0].capacity
    let ticketsSoldValue = films[0].tickets_sold
    let availableTickets = capacityValue - ticketsSoldValue;

    //Create new element to store the value seperate from the name
    let ticketsAvailable= document.createElement('div')
    ticketsAvailable.innerHTML = `
        <h4 class = ticket-title>Available Tickets: </h4>
        <p id = "tickets-left" class = available-value>${availableTickets}</p>
    `
    parentContentFive.appendChild(ticketsAvailable)

    ticketButton(films)
}

//Add an event listener to the buy ticket button
function ticketButton(films){
    //Initialize a count variable
    let count = 0;
    //Grab the relevant button
    let buyTicket = document.querySelector('.buy-ticket-button')
    //Add event listener
    buyTicket.addEventListener('click', (event) => {

        //Check if there are available tickets
        let button = parseInt(document.querySelector('.available-value').innerText)
        
        //If not disable button
        if (button <= 0){
            alert('Sorry!!  Tickets Sold Out.')
            document.querySelector('.buy-ticket-button').disabled = true;
            //Change buy button to read Sold Out
            let buttonChange = document.querySelector('.buy-ticket-button');
            buttonChange.innerHTML = 'SOLD OUT'
        }
        else{
            //Increase the count every time the button is clicked, 
            //Represents how many times a ticket has been bought
            alert('Congratulations!!  Ticket Purchased.')
            count =+ 1;

            //Grab the availbale ticket value 
            let oldTicketNumber = document.querySelector('.available-value').innerText
            
            //and minus the no. of new tickets bought
            let newTicketNumber = oldTicketNumber - count;

            //Add the new value to the display 
            let updatedValue = document.querySelector('.available-value')
            updatedValue.innerHTML= `${newTicketNumber}`
            //console.log(updatedValue);
        }

        //console.log(`Pressed: ${count} times`);
    })
}

//Add an event to each movie title name on the left:
function addEventListenerToTitle(film){
    //grab each title
    //console.log(film)

    let titleOne = document.querySelector(`.Title${film.id}`)
    //Add an event listener
    titleOne.addEventListener('click', (event) => {
        //Grab the current title and change it to whichever title button has been clicked

        //Change Title
        let newTitle = document.querySelector('.movie-title')
        newTitle.innerHTML = `${film.title}`

        //Change Image
        // let newImage = document.getElementById('poster').innerHTML
        let newImage = document.querySelector('.image')
        newImage.src = `${film.poster}`
        // console.log(newImage)

        //Change Description
        let newDescription = document.querySelector('.movieDescription')
        newDescription.innerHTML = `${film.description}`
        //console.log(newDescription)

        //Change Capacity
        let newCapacity = document.querySelector('#capacity')
        newCapacity.innerHTML = `Capacity: ${film.capacity}`
        //console.log(newCapacity);

        //Change Runtime
        let newRunTime = document.querySelector('#run-time')
        newRunTime.innerHTML = `Run Time: ${film.runtime} minutes`
        //console.log(newRunTime);

        //Change ShowTime
        let newShowTime = document.querySelector('#show-time')
        newShowTime.innerHTML = `Show Time: ${film.showtime}`
        //console.log(newShowTime);

        //Change Tickets Sold
        let newTicketsSold = document.querySelector('#tickets-Sold')
        newTicketsSold.innerText = `${film.tickets_sold}`
        //console.log(newTicketsSold);

        //Change Available Tickets
        let capacityValue = film.capacity
        let ticketsSoldValue = film.tickets_sold
        let availableTickets = capacityValue - ticketsSoldValue;

        let newAvailableTicketsNumber = document.querySelector('#tickets-left')
        newAvailableTicketsNumber.innerText = `${availableTickets}`
        console.log(newAvailableTicketsNumber);

    })
    //console.log(titleOne);
}

