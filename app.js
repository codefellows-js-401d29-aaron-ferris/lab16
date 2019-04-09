'use strict';

/**
 * APP
 * @module /src/app.js
 * brings in events to define listeners and calls
 * runs logger that contains the log listeners
 */

const fs = require('fs');
const {promisify} = require('util')
const events = require('./events.js');
require('./logger.js')

let file = process.argv.slice(2).shift();



/**
 * @param  file
 * Takes in a file, and uses 3 defined functions
 * Runs in order
 * readit
 * capitolize
 * writeit
 * Logs that it worked
 * catches any error
 */
const alterFile = file => {
  readit(file, {encoding: 'utf8'})
    .then((data) => capitolize(data))
      .then((modData) => writeit(file, modData))
        .then( events.emit('log', `${file} modified and saved`))
  .catch((err) => events.emit('error', err))

}

/**
 * makes fs.readWrite to a promise so you can run operations in order
 */
const readit = promisify(fs.readFile);

/**
 * makes fs.writeFile to a promise so you can run operations in order
 */
const writeit = promisify(fs.writeFile)

/**
 * @param  text
 * makes sure text goes to a string and makes it upper case
 */
const capitolize = function(text){
  return text.toString().toUpperCase()
}



alterFile(file);


/**
 * exports readit writeit capitolize and alterFile to use in testing
 */
module.exports = {readit,writeit,capitolize,alterFile}
