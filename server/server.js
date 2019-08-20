const express = require('express');
const next = require('next');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const dev = process.env.NODE_ENV !== 'production';
const app = next({dev});
const handle = app.getRequestHandler();

mongoose.connect("", { useNewUrlParser:true})
        .then(() => {
            console.log('connected')
        }).catch(err => console.log(err))

app.prepare()
   .then(()=>{
       const server = express();

       server.get('/pizzas/:id', (req,res)=>{
           const actualPage = '/pizzas';
           const queryParams = { pizzaId: req.params.id }
           app.render(req,res,actualPage,queryParams)
       })

       server.get('*', (req,res) => {
           return handle(req, res)
       })

       server.listen(3000, (err)=>{
           if(err) throw err 
           console.log('> ready on port 3000')
       })
   }).catch((ex)=>{
       console.error(ex.stack)
       process.exit(1)
   });