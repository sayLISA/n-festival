# N-Festival - Beta version

> **:bangbang: This repository is forked from: https://github.com/tijsluitse/n-festival where we worked in during this project, to find the most recent changes look in this repository. I forked the last version for school to review the code and my readme file.**

>**Contributors:**
* Tijs Luitse - https://github.com/tijsluitse
* Linda van Dijk - https://github.com/linda2912
* Lisa Klein - https://github.com/sayLISA

##Live version
https://nfest.lisaklein.nl/

##Concept
I did this project for the minor Everything Web, we had to choose a project to work for a client to show what we've learned during the minor in the courses we took. We made the N-festival web app in co-operation with the design studio van Lennep (http://www.vanlennep.eu), who made the corporate identity for the web app. N-festival is a new two day festival in the Netherlands with an annual exhange of the avant-garde in the field of music, food and innovation from New York and Amsterdam (http://www.n-festival.com).

This web app is the app for during the festival, where people can see the events and locations that are on the line up. The most important features are:
* The program page, where people can see a list of events ordered on time (past events, now, coming) and filter on day and theme (music, food, innovation)
* The discover page, where people who don't know the festival can discover events so they get a better view of what the festival has in store
* The locations of the events and the time it takes to get there, you can find this on the location page but also on the program page in the events and on the events detail page
* The ability to save events you like, to see them on your own event page with locations included in a map above the events.
* And last but not least for the people who organize N-festival: the ability to add events, locations, curators and news items at any moment to keep the program up to date.

##Techniques
We used different techniques to make this app work, I will sum up the most important once here.
* Express, the web framework for Node.js, to keep the pages and data running so users can always see the program.
* HTML5 with handlebars, to set up the pages and render the data
* CSS, to make everything look beautiful and add some smooth animations
* Vanilla Javascript, to add some cool functions like the map and your geolocation
* Gulp, to minify our files
* DigitalOcean for deploying

## Code structure
An explanation for some of the files and the way it was build.

```
app.js                  //This is the file where everything starts
gulpfile.js
package.json
/bin
/node_modules           //The modules used for this project
/public                 //The public folder contains all the static files like css, js, images that the app uses
  /dist                 //The dist folder contains the minified and prefixed css and js
    /css
    /js
    /lib
  /font                 //The fonts used on the site
  /img                  //The images used on the site
  /src                  //The src folder contains the files we worked in, not yet minified
    /css
    /js                 //Client-side JS
    /lib
/routes
  index.js              //This file contains all the routes for the site, routes matching the templates in the views folder
/views                  //All the templates for the site, in handlebars
  /partials             //Containing small pieces of html used in different templates
```

##Run the app
To run the code on your own computer you need to clone it to your computer. Open your terminal and go to the folder that contains the repository, then first install the node modules:

```npm install```

After that you need to run the app with:

```nodemon app.js```

The app wil run on port 3000.

##Courses from the Minor
Where the app meets the courses:

###Web App From Scratch
* Object oriented programming, we structured files in different modules and used programmed following the OOP way
* IIFE, Immediately- Invoked Function Expressions
* Javascript interactions, smooth transitions: about page to the menu scroll
* We got data from an wordpress API, combined data we needed, filtered data on time and showed the data in the app
* Templating

###CSS To The Rescue
* Semantic CSS
* :target selectors
* CSS fallbacks for viewheight, viewwidth etc.
* PE, app is still available and working without css, we online hide things with javascript
* Flexbox
* Prefixes for all browsers

###Browser Technologies
* Semantic HTML
* CSS fallbacks for viewheight, viewwidth etc.
* Progressive Enhanchement, feature detects for geolocation, localstorage, helpers for addEventListeners.
* Everything is accessible through the tab key
* Core functionalities are still available for people without javascript, css and other disabilities because of the node server
* Enhanchement for people with fancy browsers: animations, google maps, geolocation.

###Performance Matters
* Semantic HTML & CSS
* Gulp, minified js and css files for better loadtimes
* Optimized http requests: Javascript files are only loaded on the pages that use them

##The Wordpress Data API
To recive data in our app we used an external wordpress data API, set up by one of the developers from the van Lennep team. All the data for the templates is loaded server side, and combined to get better templates because all the data is served in seperate files. The venue data is also rendered client side, to render the venue locations on the map. Data we're getting from the API:
* Events
* Venues
* Posts (news items)
* Curators
* Tags
* Categories

An example of the event data: http://n-festival.werk.vanjim.nl/wp-json/wp/v2/events. As you can see the categories are loaded like this:
```
categories: [
8
]
```
so we had to match the id's in the events data to the id's in the categories data file(http://n-festival.werk.vanjim.nl/wp-json/wp/v2/categories):

All the data requests and data manipulation can be found in the index.js file in the routes folder.

##My share in this code
To make sure everyone had a fair share in the project and enough to do we made an trello board to divide the tasks. A very small look into our trello board:

![trello board](http://i.imgur.com/NtzukoG.jpg?1)

What did I do:

**First week:**
* Make sketches and think about what the app should look like
* Started setting up the Node express server (and also a lot of research because I had never done this before)
* Routing in the server
* Templating research --> first we chose mustache and then we decided to set up a server so we changed to handlebars

**Second week:**
* Getting data in the router from a local file and load the data in the templates
* Figuring out how to set up a detail page for an event (load the right data with the right detail page)
* Making a popup from the detail page when Javascript is turned on (so you won't have to go to a new page)
* Deployed the app for testing and showing it to the client
* Together: think about some cool features for the app

**Third week:**
* Restructure all the JS code because we loaded every file on every page, which caused a lot of errors. While doing this I checked the code for errors and added some feature detects like the one in the helpers file for local storage and addeventlistener.
* Wrote the helpers file
* Wrote the logic for the day 1 day 2 check, if day 1 is already over show events for day 2. (day1/day2 filter)
* Check the new data API we got

**Fourth week:**
* Implementing the new data files, filter the data, combine the data etc.
* Update site from http to https
* Filter Music/Food/Innovation -> show the right data
* The timetoEvent JS -> calculate the time to event, show it above the events
* Load the news into the news section on the menu page
* Show which day on my route
* Feature detect geolocation: any error: remove BikeDist and show error popup
* Bug fixes

**Fifth week:**
* Last bug fixes
* Discover page (flash events when you press the discover button)

This is pretty much a summary of things I've done, there are some more small parts but you can pretty much see in the code what I wrote by this list. There are some things we did together as a group. Together we made this awesome beta N-festival app, check it out and enjoy!
