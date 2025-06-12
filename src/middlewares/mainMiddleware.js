const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const { logger } = require('../config');
const { limiter } = require('./express-rate-limit');

const middleware = (app) => {
	app.use(express.json({ limit: '10mb' }));
	app.use(cors());
	app.set('trust proxy', 1);
	app.use(logger);
	app.use(cookieParser());
	app.use(limiter);
};

module.exports = { middleware };
