'use strict';
/**
 * APP
 * @module events.js
 * Exports the event stack
 */

const EE = require('events');
const events = new EE();
module.exports = events;