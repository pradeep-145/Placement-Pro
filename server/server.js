const express = require('express')
const mongoose = require ('mongoose')
const cors=require('cors')
const app=express()
const PORT='3000'
const User = require('./models/UserModel')
app.use(express.json())
app.use(cors())
mongoose.connect("mongodb+srv://pradeepsakthis22cse:sps2004@cluster0.l5dxk2x.mongodb.net/PLACEMENT_PRO?retryWrites=true&w=majority&appName=Cluster0").then(()=>{
    console.log("DB connected to the port"+PORT)
})
app.post('/',(req,res)=>{
    User.create(req.body).then(result=> res.json(result))
    .catch(err=>res.json(err))
})

app.delete('/udelete/:user',(req,res)=>{
    User.findOneAndDelete({id:req.params.id}).then(result=>{
        if(result!=null)
        res.json(result)
        else
        res.json("Username does not exist")
}).catch(err=> res.json(err))
})
app.listen(PORT,()=>{
    console.log("Server is running");
})
