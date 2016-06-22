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
* DigitalOcean

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

`npm install`

After that you need to run the app with:

`nodemon app.js`

The 
