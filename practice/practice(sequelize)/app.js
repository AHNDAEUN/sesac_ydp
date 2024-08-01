const express= require('express');
const { sequelize } = require('../../sequelize/models');
const app= express();
const port = 8888;

// routes 등록

const router = require('./routes')