const express = require('express'),
     http = require('http');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const dishRouter = require('./routes/dishRouter');
const leaderRouter = require('./routes/leaderRouter');
const promotionRouter = require('./routes/promotionRouter');

const hostname = 'localhost';
const port = 3000;

const app = express();
app.use(morgan('dev'));

app.use(bodyParser.json());

app.use('/dishes', dishRouter);
app.use('/dishes/dishId', dishRouter);

app.use('/leaders', leaderRouter);
app.use('/leaders/leaderId', leaderRouter);

app.use('/promotions', promotionRouter);
app.use('/promotions/promotionId', promotionRouter);

app.use(express.static(__dirname + '/public'));

// //dishes

// app.all('/dishes', (req,res,next) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   next();
// });

// app.get('/dishes', (req,res,next) => {
//     res.end('Will send all the dishes to you!');
// });

// app.post('/dishes', (req, res, next) => {
//  res.end('Will add the dish: ' + req.body.name + ' with details: ' + req.body.description);
// });

// app.put('/dishes', (req, res, next) => {
//   res.statusCode = 403;
//   res.end('PUT operation not supported on /dishes');
// });
 
// app.delete('/dishes', (req, res, next) => {
//     res.end('Deleting all dishes');
// });

// app.get('/dishes/:dishId', (req,res,next) => {
//     res.end('Will send details of the dish: ' + req.params.dishId +' to you!');
// });

// app.post('/dishes/:dishId', (req, res, next) => {
//   res.statusCode = 403;
//   res.end('POST operation not supported on /dishes/'+ req.params.dishId);
// });

// app.put('/dishes/:dishId', (req, res, next) => {
//   res.write('Updating the dish: ' + req.params.dishId + '\n');
//   res.end('Will update the dish: ' + req.body.name + 
//         ' with details: ' + req.body.description);
// });

// app.delete('/dishes/:dishId', (req, res, next) => {
//     res.end('Deleting dish: ' + req.params.dishId);
// });


// //leaders


// app.all('/leaders', (req,res,next) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   next();
// });

// app.get('/leaders', (req,res,next) => {
//     res.end('Will send all the leaders to you!');
// });

// app.post('/leaders', (req, res, next) => {
//  res.end('Will add the leader: ' + req.body.name + ' with details: ' + req.body.description);
// });

// app.put('/leaders', (req, res, next) => {
//   res.statusCode = 403;
//   res.end('PUT operation not supported on /leaders');
// });
 
// app.delete('/leaders', (req, res, next) => {
//     res.end('Deleting all leaders');
// });

// app.get('/leaders/:leaderId', (req,res,next) => {
//     res.end('Will send details of the leader: ' + req.params.leaderId +' to you!');
// });

// app.post('/leaders/:leaderId', (req, res, next) => {
//   res.statusCode = 403;
//   res.end('POST operation not supported on /leaders/'+ req.params.leaderId);
// });

// app.put('/leaders/:leaderId', (req, res, next) => {
//   res.write('Updating the leader: ' + req.params.leaderId + '\n');
//   res.end('Will update the leader: ' + req.body.name + 
//         ' with details: ' + req.body.description);
// });

// app.delete('/leaders/:leaderId', (req, res, next) => {
//     res.end('Deleting leader: ' + req.params.leaderId);
// });


// //promotions



// app.all('/promotions', (req,res,next) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   next();
// });

// app.get('/promotions', (req,res,next) => {
//     res.end('Will send all the promotions to you!');
// });

// app.post('/promotions', (req, res, next) => {
//  res.end('Will add the promotion: ' + req.body.name + ' with details: ' + req.body.description);
// });

// app.put('/promotions', (req, res, next) => {
//   res.statusCode = 403;
//   res.end('PUT operation not supported on /promotions');
// });
 
// app.delete('/promotions', (req, res, next) => {
//     res.end('Deleting all promotions');
// });

// app.get('/promotion/:promotionId', (req,res,next) => {
//     res.end('Will send details of the promotion: ' + req.params.promotionId +' to you!');
// });

// app.post('/promotions/:promotionId', (req, res, next) => {
//   res.statusCode = 403;
//   res.end('POST operation not supported on /promotions/'+ req.params.promotionId);
// });

// app.put('/promotions/:promotionId', (req, res, next) => {
//   res.write('Updating the promotion: ' + req.params.promotionId + '\n');
//   res.end('Will update the promotion: ' + req.body.name + 
//         ' with details: ' + req.body.description);
// });

// app.delete('/promotions/:promotionId', (req, res, next) => {
//     res.end('Deleting promotion: ' + req.params.promotionId);
// });



app.use((req, res, next) => {
  // console.log(req.headers);
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('<html><body><h1>This is an Express Server</h1></body></html>');

});


const server = http.createServer(app);

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});