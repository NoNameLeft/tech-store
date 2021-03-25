const express = require('express');

const routes = require('./routes');
const errorHandler = require('./middlewares/errorHandler');
const redirectBadUrl = require('./middlewares/redirectWrongUrls');
const { port } = require('./config/config');

const app = express();
const appString = `Server is ready, listening on port: ${port}...`;

require('./config/database');
require('./config/express')(app);

app.use(routes);
app.use(redirectBadUrl);
app.use(errorHandler);

app.listen(port, console.log(appString));