const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');


// create express app
const app = express();

app.use(cors());

// Setup server port
const port = process.env.PORT || 5000;

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))
// parse requests of content-type - application/json
app.use(bodyParser.json())
// define a root route
app.get('/', (req, res) => {
  res.send("Hello world");
});

// Require news routes
const newsRoutes = require('./src/routes/news.routes')
// using as middleware
app.use('/api/v1/', newsRoutes)


// // Require employee routes
// const employeeRoutes = require('./src/routes/employee.routes')
// // using as middleware
// app.use('/api/v1/employee', employeeRoutes)

// // Require twitter routes
// const twitterRoutes = require('./src/routes/twitter.routes')
// // using as middleware
// app.use('/api/v1/twitter', twitterRoutes)

// listen for requests
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});