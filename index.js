const express=require("express");
const app=express();
const http=require('http').Server(app);
const port=8081;

// const socket=require("socket.io");
const io = require('socket.io')(http);
// let socket = io(app);

const path=require("path");

app.get("/", (req,res)=>{

    const options={
        root: path.join(__dirname)
    }
    const filename="index.html";
    res.sendFile(filename,options);
})

// var users= 0;

// var ws=io.of('/home');

var full=0;

var roomno=1;

io.on("connection", (socket)=>{
    console.log("A user is connected");


    // socket.join("room-"+roomno);
    // io.sockets.in("room-"+roomno).emit("connectedRoom", "You are connected to room no. "+roomno);
    // full++;
    // if(full >= 2){
    //     full=0;
    //     roomno++;
    // }

    // io.emit("Testevent", "testevent call");
    // users++;
    // // io.sockets.emit("broadcast",{ message: users + " users connected !" }); // for global broadcast
    // socket.emit("newuserConnect",{ message:'Hii, welcome home !!'});

    // socket.broadcast.emit("newuserConnect",{message: users + " users connected!"})

    // socket.on("myCustomEvent",(data)=>{
    //     console.log(data.fname+" "+ data.lname+" "+ data.age);
    // })

    // setTimeout(()=>{
    // //    socket.send("sent message from server side by prereserved events");
    //    socket.emit("myCustomEvent",{fname:"john", lname:"doe", age:20})
    // },3000);

    socket.on("disconnect", ()=>{
         console.log("A user is disconnected");
        //  users--;
        // //  io.sockets.emit("broadcast",{ message: users + " users disconnected !" });
        //  socket.broadcast.emit("newuserConnect",{message: users + " users disconnected!"})
    });
})

http.listen(port,()=>{
    console.log(`server running at ${port}`);
})