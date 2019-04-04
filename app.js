const express=require('express');
const ejs =require('ejs');

//const express=require('express');


const app = express();

app.set('view engine','ejs');
app.use(express.static('public'));

app.get('/',(req,res) =>{
   // res.send(`Hello World`);
     res.render('index');
    }
)

const server = app.listen(3000,()=>{
    console.log('Connected to port 3000');

})

const io = require('socket.io')(server);
io.on('connection',(socket) =>{
    console.log(`New User Connected`);

    socket.username = `Saurav`;

    socket.on('change_username',(data)=>{
        socket.username = data.username ;
        console.log(`Connect hua.good sign ${socket.username}`);
    });

    socket.on('new_message',(data)=>{
        //socket.username = data.username ;
        io.sockets.emit('new_message',{message:data.message,username:socket.username});
        console.log(`Connect hua.good sign ${socket.username}`);
    });
})