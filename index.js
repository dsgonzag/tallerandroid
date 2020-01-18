
const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('sample.json');
const middlewares = jsonServer.defaults();
const express = require ('express');
const app = express();
var cors = require('cors');

app.use(cors())
 
var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

server.use(middlewares);
server.use(router);

server.listen(port);

const morgan = require('morgan');
//setting
app.set('port', process.env.PORT || 3000);
app.set('json spaces', 2);

//middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//routes
app.use(require('./routes/index'));
app.use('/api/movies',require('./routes/movies'));
app.use('/api/users',require('./routes/users'));
//starting the server
/*app.listen(3000, ()=> {
    console.log(`Server on port ${app.get('port')}`);
});*/
