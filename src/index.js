const express = require('express');
const { App } = require('./services');
const { dbConnect } = require('./config');
const env = require('./env');

async function startServer() {
	const app = express();
	App(app);
	await dbConnect();
	app.listen(env.PORT, () => {
		console.log(`Server running on port ${env.PORT}`);
	});
}

startServer();
