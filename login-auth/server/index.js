const express = require('express')
const path = require('path')
const app = express();
const bodyParser = require('body-parser');
var cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const connection = require('./util/database')
require('dotenv').config();

app.use(helmet());
app.use(bodyParser.json());
app.use(cors());
app.use(express.urlencoded({extended:true}))
app.use(morgan('dev'))

// Routes

const userRoutes = require('./routes/user')

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
  

// defining an endpoint to return all ads
app.get('/employee', (req, res) => {
    res.send(employeeList);
  });

  // custom midddleware


 // app.use('/auth', authRoutes);

  app.use('/user',userRoutes)
  //app.listen(ports, () => console.log(`Listening on port ${ports}`));

app.listen(process.env.PORT,()=>{
    console.log(`'Server is listening'${process.env.PORT}`)
})


