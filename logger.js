'use stirct';

const events = require('./events.js');

const fs = require('fs');


events.on('error', (payload) => {
  console.error(payload)
  return null
})

events.on('log', (payload) => {
  console.log(payload)
})


