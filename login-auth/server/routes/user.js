const express = require('express');
const bcrypt = require('bcryptjs');
const router = express.Router();
const User = require('../model/user');
const nodemailer = require('nodemailer')

const jwt = require('jsonwebtoken');
require('dotenv').config();


const connection = require ('../util/database')

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

  
module.exports = router;

