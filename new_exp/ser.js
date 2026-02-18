import express from "express"
const app=express();

app.get('/add',(req,res)=>{
    const a=parseInt(req.query.a)
    const b=parseInt(req.query.b)
    if(isNaN(a) || isNaN(b)){
        return res.status(400).json({error:"invalid or no number"})
    }
    res.json({result:a+b})
})

app.get('/sub',(req,res)=>{
    const a=parseInt(req.query.a)
    const b=parseInt(req.query.b)
    if(isNaN(a) || isNaN(b)){
        return res.status(400).json({error:"invalid or no number"})
    }
    res.json({result:a-b})
})
app.get('/mul',(req,res)=>{
    const a=parseInt(req.query.a)
    const b=parseInt(req.query.b)
    if(isNaN(a) || isNaN(b)){
        return res.status(400).json({error:"invalid or no number"})
    }
    res.json({result:a*b})
})
app.get('/div',(req,res)=>{
    const a=parseInt(req.query.a)
    const b=parseInt(req.query.b)
    if(isNaN(a) || isNaN(b)){
        return res.status(400).json({error:"invalid or no number"})
    }
    res.json({result:a/b})
})
app.listen(3000,()=>{
    console.log("running")
})