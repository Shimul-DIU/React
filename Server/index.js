let app=require('./app')
let port=5000


app.listen(port,()=>{
  console.log(`server is runnig sucessfully at http://localhost:${port}`)
})