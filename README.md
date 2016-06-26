# N-Festival app - Beta version
> This repository is forked from: https://github.com/tijsluitse/n-festival where we worked in during this project, to find the most recent changes look in this repository.

##Keep up to date with your favorite festival
With the N-festival app you'll be up-to-date with the all events on the two-day festival in the northside of Amsterdam. You know exactly what there is to do and where. Don't miss a thing, save your favorite events to create an own timescheme! Want to be surprised? Check out the Discover page!

**Check out the betaversion now on: https://nfest.lisaklein.nl**

##Installation
Download or clone this repository to your own computer: https://github.com/sayLISA/n-festival.git

Open your terminal and go to the folder that contains the repository, then first install the node modules:

```
npm install
```

After that you need to run the app with:

```
node app.js
```

The app wil run on port 3000.
> Changing the port is possible in the app.js file.
 
##Usage
For own usage and changing files there are some things you need to know.

###Code structure
The app is build on a node.js express server, it follows its basic structure. The code is written in HTML, CSS and JS.

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

###Routes
In the routes folder there are two important things happening.

**Data structure**

We use an external API to get the festival data and render it in our templates (more about it [here](#Data-API)[Wordpress API][here]). In the index.js file the data is loaded like this:

```
var data; 

http.get({
        host: 'hostname here',
        path: 'pathname here'
    }, function (response) {
        var body = '';
        response.on('data', function (d) {
            body += d;
        });
        response.on('end', function () {
            data = JSON.parse(body);
            
            // filter or manipulate data here and save the filtered data in the global data variable.
        });
    });
```

**Routes**

Underneath that the routes are declared, sending the data for the right template with it:

```
router.get('/', function (req, res, next) {
    res.render('template', {
        data: data
    });
});
```

###Templates
In the views folder you can find the templates, written with Handlebars. We have sent data with the template in the routes folder, the data is obtainable like this:

```
{{#data}}				// for each item in data
	<article>
    	<h1>{{title}}</h1>	// render title
       <p>{{content}}</p>	// render content
	</article>
{{/data}}
```

###Public folder
In the public folder you can find the static files we use: images, fonts, css and javascripts. The `src` folder is the folder to work in, the links go to the `dist` folder, the files in here are optimized and minified with [Gulp][Gulp].

**Javascripts**

The javascript files are classified in functionalities, the name of the files say what they do and which pages they are for. We use namespacing to prevent conflicts in the code with libraries.

```
var nfest = nfest || {};
```

There is a helper file with functions like a localstorage check, a fallback for addEventListener in IE browsers and a getData function to load data client-side. The helpers can be accessed in any other client-side JS file. The getData helper function:

```
nfest.helpers.getData('yourUrlHere', function (response) { 

	var data = JSON.parse(response);
	
	// your code here

});
```

**Libraries**

We use the [moment.js](http://momentjs.com) library for calculating the time to events in the `nfestTimeToEvent.js` file.

###Gulp
We use Gulp for tasks like minifying JS & CSS. You can run these three tasks in your terminal:

```
gulp js
```
for minifying the js files

```
gulp lib
```
for minifying the lib files

```
gulp css
```
for autoprefixing and minifying the css files

To add gulp tasks simply write them in the `gulpfile.js`

##Data-API
To recive data in our app we used an external Wordpress data API, set up by one of the developers from the van Lennep team. All the data for the templates is loaded server side, and combined to get better templates because all the data is served in seperate files. The venue data is also rendered client side, to render the venue locations on the map. Data we're getting from the API:

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
so we had to match the id's in the events data to the id's in the categories data file (http://n-festival.werk.vanjim.nl/wp-json/wp/v2/categories):

All the data requests and data manipulation can be found in the index.js file in the routes folder.

##Courses from the Minor
This app was made during a minor I did at my school. Where the app meets the courses:

###Web App From Scratch
* **Object oriented programming**: we structured files in different modules and used programmed following the OOP way
* **IIFE**: Immediately- Invoked Function Expressions, we used these in all the files, writing modules in them to easily execute them.
* **Javascript interactions**: smooth transitions like the about page to the menu scroll, to make it feel better for the users.
* **API Get requests**: We got data from a wordpress API, combined data we needed, filtered data on time and showed the data in the app to make the app usable for the user.
* **Templating**: we did templating with the handlebars templating view engine, to make the templates adjust to the data that is loaded.

###CSS To The Rescue
* **Semantic CSS**: for better loadtimes
* **:target selectors**: on the menu when you visited the website before, so you won't have to scroll past the about page every time you visit the menu page.
* **CSS fallbacks for viewheight, viewwidth etc.**: So the website works on more browsers.
* **PE**: app is still available and working without css, we online hide things with javascript
* **Flexbox**: On the layouts, to place the elements in the right places.
* **Prefixes for all browsers**

###Browser Technologies
* **Semantic HTML**
* **CSS fallbacks for viewheight, viewwidth etc.**: So the website works on more browsers.
* **Progressive Enhanchement**, feature detects for geolocation in the map.js and location.js file, localstorage in the helpers.js file and a helpers file for fallbacks for addEventListener in IE and other things, so the app works for every user on every browser.
* **Everything is accessible through the tab key**: for people without a mouse or with a screenreader.
* **Core functionalities** are still available for people without javascript, css and other disabilities because of the node server
* **Enhanchement** for people with fancy browsers: animations, google maps, geolocation.

###Performance Matters
* **Semantic HTML & CSS**
* **Gulp**: we minified js and css files for better loadtimes
* **Optimized http requests**: Javascript files are only loaded on the pages that use them

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

##Contributors
* [Tijs Luitse](https://github.com/tijsluitse)
* [Linda van Dijk](https://github.com/linda2912)
* [Lisa Klein](https://github.com/sayLISA)

Also thanks to the [vanLennep team](http://www.vanlennep.eu) for helping us with the data API and the designs.
