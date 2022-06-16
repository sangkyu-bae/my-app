const authRouter = require('./server/Router/auth/authRouter')
const mainRouter=require('./server/Router/index/mainRouter')

const fs =require('fs');
const express = require('express');
const bodyParser =require('body-parser');
const app = express();
const port =process.env.PORT ||5000;


app.get('/api/hello',(req,res)=>{
    res.send({message:'Hello Express!'});
})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use("/auth",authRouter);
app.use("/main",mainRouter);

app.listen(port,()=> console.log(`Listening on port ${port}`))


