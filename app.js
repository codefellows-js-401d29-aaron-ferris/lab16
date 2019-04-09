'use strict';

const fs = require('fs');
const {promisify} = require('util')
const events = require('./events.js');
require('./logger.js')

let file = process.argv.slice(2).shift();




const alterFile = file => {
  readit(file, {encoding: 'utf8'})
    .then((data) => capitolize(data))
      .then((modData) => writeit(file, modData))
        .then( events.emit('log', `${file} modified and saved`))
  .catch((err) => events.emit('error', err))

}


const readit = promisify(fs.readFile);
const writeit = promisify(fs.writeFile)
const capitolize = function(text){
  text.toString().toUpperCase()
}



alterFile(file);
module.exports = {readit,writeit,capitolize,alterFile}