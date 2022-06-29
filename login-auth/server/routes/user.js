const express = require('express');
const bcrypt = require('bcryptjs');
const router = express.Router();
const User = require('../model/user');
const nodemailer = require('nodemailer')

const jwt = require('jsonwebtoken');
require('dotenv').config();


const connection = require ('../util/database');
const { response } = require('express');

router.post('/signup' ,async (req,res)=>{
    let user = req.body;
   // var salt = bcrypt.genSaltSync(10);
    var hashedPassowrd = bcrypt.hashSync(user.password, 8);

    console.log(user)
    query = "select email,password,role,status from user where email=?"
    connection.query(query,[user.email],(err,result)=>{
            if(!err){
                if(result.length<=0){
                   // const hashedPassword: bcrypt.hashSync(user.password, bcrypt.genSaltSync()),

                    query ="insert into user (name,contactNumber,email,password,status,role) values(?,?,?,?,'false','user')"
                    
                    connection.query(query,[user.name,user.contactNumber,user.email,hashedPassowrd],(err,result)=>{
                        if(!err){
                            return res.status(200).json({message:'Successfuly Registered!',password:hashedPassowrd})
                            
                        }else{
                            return res.status(500).json(err)
                        }
                    })
                }else{
                    return res.status(400).json({message:'Email Already Exist!'})
                }
            }
            else{
                return res.status(500).json(err)
            }
    })

})


router.post('/login',async (req,res)=>{
    const user = req.body;
    const validPass = await bcrypt.compare(req.body.password, user.password)
    console.log(validPass)
    console.log(req.body.password===user.password)
    console.log(req.body.password)

    query = "select email,password,role,status from user where email=?"
    connection.query(query,[user.email],(err,result)=>{


        if(!err){
            if(result.length<=0 || req.body.password!=user.password){
                return res.status(401).json({message:"Incorrect Username or password!"});
            }else if(result[0].status ==='false'){
                return res.status(401).json({message:"Wait for admin Approval!"})
            }else if(req.body.password===user.password){
                const response = { email:result[0].email,role:result[0].role}
                console.log(response)
                const accessToken = jwt.sign(response,process.env.SECRET_KEY,{expiresIn:'8h'})
                console.log(accessToken)
                res.status(200).json({token:accessToken});
            }else{
                return res.status(400).json({message:"Something went wrong.Please wait for a moment and try again!"})
            }  
    }else{
            return res.status(500).json(err)
        }
    });
} );

  
router.post('/login',async (req,res)=>{
    const user = req.body;
    const validPass = await bcrypt.compare(req.body.password, user.password)
    console.log(validPass)
    console.log(req.body.password===user.password)
    console.log(req.body.password)

    query = "select email,password,role,status from user where email=?"
    connection.query(query,[user.email],(err,result)=>{


        if(!err){
            if(result.length<=0 || req.body.password!=user.password){
                return res.status(401).json({message:"Incorrect Username or password!"});
            }else if(result[0].status ==='false'){
                return res.status(401).json({message:"Wait for admin Approval!"})
            }else if(req.body.password===user.password){
                const response = { email:result[0].email,role:result[0].role}
                console.log(response)
                const accessToken = jwt.sign(response,process.env.SECRET_KEY,{expiresIn:'8h'})
                console.log(accessToken)
                res.status(200).json({token:accessToken});
            }else{
                return res.status(400).json({message:"Something went wrong.Please wait for a moment and try again!"})
            }  
    }else{
            return res.status(500).json(err)
        }
    });
} );


/**
var transporter = nodemailer.createTransport({
    pool:true,
    host: "",
  
    port: 465,
    secure: true, // use SSL
    auth:{
        user:'',
        pass:'',
    }
})

router.post('/forgotpassword',(req,res)=>{
    const user = req.body;
    query = "select email,password,role,status from user where email=?";
    connection.query(query,[user.email],(err,result)=>{
        if(!err){
            if(result.length <= 0){
                return res.status(200).json({message:"Password sent succesfully."})
            }else{
                var mailOptions = {
                    from: process.env.MAIL,
                    to:result[0].email,
                    subject: "Password by Cafe Management System",
                    html: '<p><b> Your Login details for cafe management System </b><b><br>Email: </b>'+ result[0].email+'<br><b>Password: '+result[0].password+'</b><br><a href="http://localhost:3000"> Click here to login<a></p>'

                };
                transporter.sendMail(mailOptions,function(error,info){
                    if(error){
                        console.log(error)
                    }else{
                        console.log("Email sent: "+info.response)
                    }
                })
                return res.status(200).json({message:"Password sent succesfully to your email."})

            }


        }else{
            return res.status(500).json(err);
        }
    })

})

**/


router.get('/getuser',(req,res)=>{
    var query = "select * from user where role='user'"
    connection.query(query,(err,result)=>{
        if(!err){
                return res.status(200).json(result)
        }else{
            return res.status(500).json(err)
        }
    })
})

router.patch('/update',(req,response)=>{
    let user = req.body;
    query = "update user set status=? where id=?";
    connection.query(query,[user.status,user.id],(err,result)=>{
        if(!err){
            if(result.affectedRows == 0){
                return response.status(404).json({message:'User id does not exist!'})
            }
            return response.status(200).json({message:'User updated successfully!'})
        }else{
            return response.status(500).json(err)
        }
    })
})

router.get('/checktoken',(req,res)=>{
    return res.status(200).json({message:'True!'})
})


router.post('/changepassword',(req,res)=>{

})

module.exports = router;

