const express = require('express');
const routes = require('./endpoints');
const PORT = process.env.PORT || 80;
const webhook = process.env.https://discord.com/api/webhooks/826636547709206538/d_8okdlS1zspVC6Be-VzEqX8TXBZo5aZdRuQXHa8FQb0I5z-nrWzx7kb1H_N_q6nYAq3;

const app = express();
app.use(express.json());

app.get('/', (req, res) => res.send('hi'));
app.post('/api/v1/send', (req, res) => routes.send(req, res, webhook));

app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}`);
});
