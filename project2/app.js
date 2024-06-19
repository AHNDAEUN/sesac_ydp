const express = require('express');
const multer = require('multer'); // multer 모듈 불러오기
const path = require('path');
const { CLIENT_RENEG_WINDOW } = require('tls');

const app = express();
const PORT = 8080;

app.set('view engine', 'ejs');
app.set('views', './views'); 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/uploads', express.static(__dirname + '/uploads'));


