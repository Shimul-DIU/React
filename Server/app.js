let express=require('express')
let cors =require('cors')
let app=express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get('/',(req,res)=>{
  res.send('hi i am server')
})
app.post('/api/register',(req,res)=>{
  let {name ,email, password}=req.body;
  let user={
    name,email,password
  }
  res.json(user)
})

module.exports=app;