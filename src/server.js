const express = require('express');
const server = express();
const Bundler = require('parcel-bundler');
const { join } = require('path');

server.set('view engine', 'ejs');

const options = {}; 

const bundler = new Bundler([join(__dirname, './views/index.pug')], options);

server.use(bundler.middleware());

server.listen(5500);