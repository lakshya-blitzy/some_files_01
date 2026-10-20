const _ = require('lodash');
const express = require('express');

/** Serves GET / with "Hello, World!" and GET /good-evening with "Good evening", both text/plain, on port 3000. */
require('http').createServer(express().get('/', (req, res) => res.type('text/plain').send('Hello, World!\n'))
  .get('/good-evening', (req, res) => res.type('text/plain').send('Good evening\n')))
  .listen(3000, () => console.log('Server running at http://127.0.0.1:3000/'));
