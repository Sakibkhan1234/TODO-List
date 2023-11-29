var express=require('express')
var app=express()
require('./db/config')
var store=require('./db/store')
var cors=require('cors')
app.use(express.json())
app.use(cors())

app.post("/posting",async(req,resp)=>{
    var data=new store(req.body)
    var result= await data.save()
    resp.send(result)
})

app.get("/getting",async(req,resp)=>{
    var data= await store.find()
    resp.send(data)
    console.log(data)
})

app.delete("/deletting/:_id",async(req,resp)=>{
    var data=await store.deleteOne({_id:req.params})
    resp.send(data)
    console.log(data)
})

app.put("/edditing/:id",async(req,resp)=>{
   var data=await store.updateOne({_id:req.params.id},{$set : req.body})
   resp.send(data)
   console.log(data)
})

app.get('/ed/:id',async (req,resp)=>{
    var Data=await store.findOne({_id:req.params.id})
         resp.send(Data)
})
app.listen(5000)