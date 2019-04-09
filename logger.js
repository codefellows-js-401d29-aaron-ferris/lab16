'use stirct';
/**
 * APP
 * @module logger.js
 * Imports in events to define the listener.
 * Exports the logs
 */

const events = require('./events.js');

const fs = require('fs');

/**
 * events listener for error
 * When error is hit and gives the error, it runs the error in the consle
 */
events.on('error', (payload) => {
  console.error(payload)
  return null
})

/**
 * events listener for a event to log stuff
 * when asked for it will console log the payload
 */
events.on('log', (payload) => {
  console.log(payload)
})


