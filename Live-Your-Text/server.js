const express=require("express")
const ACTIONS=require('./src/Actions')
const {Server}=require('socket.io')
const http=require('http')
const path=require('path')
const app=express()


const server=http.createServer(app)
const io=new Server(server);

const userSocketMap={}
function getAllConnectedClients(roomId){
   
   return Array.from(io.sockets.adapter.rooms.get(roomId)||[]).map(
        (socketId)=>{
        return {
            socketId,
            username:userSocketMap[socketId]
            
        }
        
    })
   
}

io.on('connection',(socket)=>{
    console.log("socket connected", socket.id)


    socket.on(ACTIONS.JOIN,({roomId,username})=>{
     
        userSocketMap[socket.id]=username;
        socket.join(roomId);

        const clients=getAllConnectedClients(roomId)
       
       clients.forEach(({socketId})=>{
        io.to(socketId).emit(ACTIONS.JOINED,{
            clients,
            username,
            socketId:socket.id,
        })
       })
    
    })

    socket.on(ACTIONS.CODE_CHANGE,({roomId,code})=>{
        // console.log('check',code)
        socket.in(roomId).emit(ACTIONS.CODE_CHANGE,{code})
    })

      socket.on('disconnecting',()=>{
        const rooms=[...socket.rooms];
        rooms.forEach((roomId)=>{
            socket.in(roomId).emit(ACTIONS.DISCONNECTED,{
                socketId:socket.id,
                username:userSocketMap[socket.id],
            })
        })
      delete userSocketMap[socket.id]
      socket.leave();
      })

})

app.use(express.static(path.join(__dirname,'build')))

app.get("*", function(req,res){
    res.sendFile(path.join(__dirname,"build/index.html"))
})

const port=5000
server.listen(port,()=>{
    console.log(`listening on Port ${port}`)
})




