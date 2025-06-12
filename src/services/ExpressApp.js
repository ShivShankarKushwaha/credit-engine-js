const { mainRoute } = require('../routes');
const { middleware } = require('../middlewares');

const App = (app) => {
	middleware(app);
	app.get('/', (req, res) => {
		return res
			.status(200)
			.json({ message: 'Welcome to the CREDIT ENGINE API. see more details here https://github.com/ShivShankarKushwaha/credit-engine' });
	});
	app.use('/api', mainRoute);

	app.use('*', (req, res) => {
		res.status(404).json({ message: 'Not Found' });
	});
};

module.exports = { App };
