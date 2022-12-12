# FLATDANGO MOVIE THEATER
==========================

## DESCRIPTION
**Flatdango Movie Theater** is a mini web application that allows a user to browse throught the available movie options and purchase movie tickets from the theater. 

## REQUIREMENTS
### Prerequisites
* node v14.17.4 and above
* npm 6.14.14 and above
* Vue 2.6.11
* Then install the various packages from package.json `npm install`
* Create environment variables

### Installations
* Download the db.json file and add data using the below link
```
https://moringa.instructure.com/courses/185/files/152618/download?download_frd=1

```
* Install json server by running the below code in your terminal
```
npm install -g json-server
```
* After installing, launch the server by running the below code in your terminal
```
json-server --watch db.json
```

#### Project Deliverables
For this challenge, I worked on Flatdango, a mini web application where you can purchase movie tickets from the theater.

The user, is expected to be able to:

* See the first movie's details (poster, title, runtime, showtime and available tickets) when the page loads.
* See a menu on the left hand side of the page containing the rest of the movie's titles.
* Buy a ticket for a movie. (The number of tickets should decrease after a ticket is bought.)

Bonus Deliverables:
* Click ona movie in the menu to replace the currently displayed movie's details with the new movie's details
* When a movie is sold out, indicate this by changing the button to "Sold Out"
* Add a sold out section for the films that are sold out

Extra Bonus Deliverables:
* When a ticket is purchased, persist the updated number of tickets sold on the server.
* Add a delete button next to each film that when clicked, deletes the film from the list as well as the server. 

### Conclusion
* The code-challenge deliverables were met up until the Bonus Deliverables. 
* This means that on loading the page, the movie menu is displayed to the user which they can scroll through selecting each movie title to see further information.
* On top of this they are able to buy tickets for whichever movie they want.
* Unfortunately, the final css design was still not to my liking but for this code challenge, the functionality was more important than it's appearance.
* The Bonus deliverables were also executed and the Extra Bonus Deliverables also attempted.

### Languages used to create this project
* HTML,
* CSS,
* JavaScript



## Author:
   * **Jamila Mathu** - *Initial work* - [jamnjeri](<https://github.com/jamnjeri>)
## Status:
    maintained, and is currently in development
## Version:
    v0.1.0
## Usage

## License

[![License:MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
Copyright (c) 2022 **Mathu Jamila**
