const express=require("express")

const {server}=require('socket.io')
const http=require('http')
const app=express()


const server=http.createServer(app)
const io=new Server(server);

io.on('connection',(socket)=>{
    console.log("socket connected", socket.id)
})


const port=process.env.PORT||9000
server.listen(port,()=>{
    console.log(`lictening on Port ${port}`)
})




