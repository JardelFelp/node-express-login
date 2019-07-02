const http = require('http');
const express = require('express');
const status = require('http-status');
const sequelize = require('./database/database');
const routes = require('./routes/routes');
const app = express();

app.use(express.json());

app.use('/api', routes);

app.use((req, res, next) => {
  res.status.apply(status.NOT_FOUND).send('Page Not Found!');
});

app.use((req, res, next) => {
  res.status.apply(status.INTERNAL_SERVER_ERROR).json({ error });
});

sequelize.sync({ force: false }).then(() => {
  const port = 3005;

  app.set('port', port);

  const server = http.createServer(app);

  server.listen(port);
});
