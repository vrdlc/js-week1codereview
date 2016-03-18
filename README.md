# GitHub User Search Engine

#### _March 17th, 2016_

### By _** Virgilio Ramon de la Cruz **_

## Description

_This web app is designed to locate GitHub user information and list of repositories._

## Setup/Installation

#### System Requirements

1. [Node.js](https://nodejs.org/en/) w/ [npm](https://www.npmjs.com/)
2. [Bower](http://bower.io/)
3. [GitHub's API](https://developer.github.com/v3/)

#### Installation

* After cloning the repository, run "npm install" and "bower install" in the terminal. This will install every dependency and package off the manifests in the bower.JSON and package.JSON files.
* Change the name of the ".envdemo" file to ".env" and place your own access token in between the quotation marks (for information about how to get an access token, see [this documentation](https://github.com/blog/1509-personal-api-tokens)). You can also simply enter "https://api.github.com", but there are a limited number of times you can use this link per hour.
* In the terminal, type "gulp build" followed by "gulp serve". This should open a new browser window with a search field.
* Enter the name of the user you wish to search for in the field. You will see the user's username, their actual name, their avatar image, and a button you can press to see their repositories, with links to the actual repo page and the date the repo was created.

## Support and contact details

_If you have any questions, concerns, or feedback, please contact the author through_ [gitHub](https://github.com/vrdlc/).

## Technologies Used

* _This project was built on [Node.js](https://nodejs.org/en/)._
* _Dependencies were handled with [npm](https://www.npmjs.com/) and [Bower](http://bower.io/)._
* _[Gulp](http://gulpjs.com/) is an awesome asset pipeline used in this project._
* _[Bootstrap](http://getbootstrap.com/) built the basic CSS seen on the page, with minimal alteration by me._
* _[Moment.js](http://momentjs.com/) helped make the times readable._
* _[Github](https://www.github.com) is a great place to host any code you're working on or wish to share with the world._ They also provided the [API] (https://developer.github.com/v3/) you saw in action in this project._
* _Git was used in the terminal to upload my progress to GitHub._
* _And, of course, the basic code was written in HTML, CSS, and Javascript, in the Atom text editor, alongside a terminal program._



### License

MIT License.

Copyright (c) 2016 **_Virgilio Ramon de la Cruz_**
