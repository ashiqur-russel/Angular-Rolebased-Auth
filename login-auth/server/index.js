const express = require('express')
const app = express();

const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');


const employeeList = [
    {
        code:1,
        name:'AS',
        email:'a@gmail.com',
        phone:123,
        designation:'CEO'
    },
    {
        code:2,
        name:'BikS',
        email:'b@gmail.com',
        phone:13223,
        designation:'MO'
    },
    {
        code:3,
        name:'CsfvS',
        email:'c@gmail.com',
        phone:1235,
        designation:'MD'
    },
    
  ];

  const user = [
    {
        id:1,
        email:'a@gmail.com',
        pass:'123'
    },
    {
        id:2,
        email:'b@gmail.com',
        pass:'1234'
       
    },
    {
        id:3,
        email:'c@gmail.com',
        pass:'1233'
    },
    
  ];
  

// adding Helmet to enhance your API's security
app.use(helmet());

// using bodyParser to parse JSON bodies into JS objects
app.use(bodyParser.json());

// enabling CORS for all requests
app.use(cors());

// adding morgan to log HTTP requests
app.use(morgan('combined'));

// defining an endpoint to return all ads
app.get('/employee', (req, res) => {
    res.send(employeeList);
  });

  app.get('/user', (req, res) => {
    res.send(user);
  });




app.listen(3000,()=>{
    console.log('Server is listening')
})