const app = require('express')();
const passport = require('passport');
const cors = require('cors');
const fs = require('fs');
const config = require('./config');
const logger = require('./utils/logger');
const authMiddleWare = require('./middleware/tokenValidation');
const dbInitialize = require('./services/dbInitialize');
const http = require('http');
const routeInitialize = require('./routes');
const passportInitialize = require('./passport/passport');

const sslOptions = {
  key: fs.readFileSync('config/cert/pipdroid.key', 'utf8'),
  cert: fs.readFileSync('config/cert/pipdroid.crt', 'utf8'),
};
let server; //eslint-disable-line
let httpServer; //eslint-disable-line
server = require('http').createServer(app); // eslint-disable-line
if (process.env.NODE_ENV !== 'production') {
  server = require('http').createServer(app); // eslint-disable-line
} else {
  server = require('https').createServer(sslOptions, app); //eslint-disable-line
  httpServer = http.createServer((req, res) => {
    res.writeHead(301, { 'Location': 'https://' + req.headers['host'] + req.url }); // eslint-disable-line
    res.end();
  }).listen(80);
}
app.logger = logger;
app.options('*', cors());
app.use(cors());
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS');
  next();
});

app.use(require('morgan')('dev'));
app.use(require('body-parser').urlencoded({ limit: '50mb', extended: true }));
app.use(require('body-parser').json({ limit: '50mb' }));
app.use(require('express-session')({ secret: config.app.secret, resave: true, saveUninitialized: true }));
app.use(require('cookie-parser')());
app.use(passport.initialize());
app.use(passport.session());
dbInitialize(app);
const user = app.get('models').user;
passportInitialize(passport, user);
app.use(authMiddleWare);
routeInitialize(app);

if (process.env.NODE_ENV === 'development') {
  server.listen(config.app.port, () => {
    console.log('Server listening at port %d', config.app.port);
  });
} else {
  server.listen(config.app.port, () => {
    console.log('SSL server is running at ', config.app.port);
  });
}