/** Responds to every HTTP request with "Hello, World!". */
/** Responds to every HTTP request with "Hello, World!". */
/** Responds to every HTTP request with "Hello, World!". */

const _ = require('lodash');
const express = require('express');

/** Responds to every HTTP request with "Hello, World!". */
require('http').createServer(express().get('/', (req, res) => res.type('text/plain').send('Hello, World!\n'))
  .get('/good-evening', (req, res) => res.type('text/plain').send('Good evening\n')))
  .listen(3000, () => console.log('Server running at http://127.0.0.1:3000/'));
