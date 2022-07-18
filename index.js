const express = require('express');
const bodyParser = require('body-parser');
const routesController = require('./api/index');

const app = express();
const PORT = 8000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.listen(PORT, () => {
  console.log(`[server]: Server is running at https://localhost:${PORT}`);
});

app.route('./players').post(routesController.addPlayer);