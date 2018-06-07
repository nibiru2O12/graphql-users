const express = require('express');
const Routes = express.Router();

let users = require('../data/user.json');
let companies = require('../data/company.json');


Routes.get('/users/:id',(req,res)=>{
  res.send(users.find(user=>user.id==req.params.id))
});

Routes.post('/users',(req,res)=>{
  console.log(req.body);
  res.send('hello');
})

Routes.get('/company/:id',(req,res)=>{
  res.send(companies.find(comp=>comp.id==req.params.id))
})

Routes.get('/company/:companyId/users',(req,res)=>{
  const {companyId} = req.params;
  res.send(users.filter(user=> user.companyId == companyId ))
})




module.exports = Routes;