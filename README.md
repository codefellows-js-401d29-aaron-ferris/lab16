![CF](http://i.imgur.com/7v5ASc8.png) LAB
=================================================

## API Server

### Author: Aaron Ferris
[![Build Status](https://www.travis-ci.com/codefellows-js-401d29-aaron-ferris/lab16.svg?branch=master)

### Links and Resources
* [PR](https://github.com/codefellows-js-401d29-aaron-ferris/lab16/pull/1)  
* [travis](https://www.travis-ci.com/codefellows-js-401d29-aaron-ferris/lab16)  

#### Documentation
* [jsdoc](https://github.com/codefellows-js-401d29-aaron-ferris/lab16/tree/working/docs)



### Modules
#### app.js
 * brings in events to define listeners and calls
 * runs logger that contains the log listeners
##### alterFile
* @param  file
 * Takes in a file, and uses 3 defined functions
 * Runs in order
 * readit
 * capitolize
 * writeit
 * Logs that it worked
 * catches any error
##### readit
* makes fs.readWrite to a promise so you can run operations in order
##### writeit
* makes fs.writeFile to a promise so you can run operations in order
##### capitolize
* makes sure text goes to a string and makes it upper case

#### events.js
 * Exports the event stack
#### logger.js
 * Imports in events to define the listener.
 * Exports the logs
##### events.on error
 * events listener for error
 * When error is hit and gives the error, it runs the error in the consle
 ##### events. on log
 * When error is hit and gives the error, it runs the error in the consle

### Setup

* run `npm i` in the root directory
  
#### Terminal commands 
* Modify a file
  * locate file you want to modify
  * move to directory where app.js is
  * run `node app.js __secondfile__`
#### Tests
* I tried to run tests, but everything I did with mocks didn't work

#### UML
![UML Diagram]()
