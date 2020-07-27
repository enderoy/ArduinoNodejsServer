

const express =require('express');
const app=express();
const server=require('http').createServer(app);
const io=require('socket.io')(server);
const path=require('path');
var led;
var kullanicilar=0;

//Server dan public klasörüne erişim için.
app.use('/public',express.static(path.join(__dirname,'public')));
app.use('/node_modules',express.static(path.join(__dirname,'node_modules')));
//App nesnesi istemcilerden gelen isteği dinlemeye başladı.
app.get('/',(req,res)=>{
    res.sendFile(__dirname+"/index2.html");
});

app.get('/lediYak',(req,res)=>{
    led.on();
})

app.get('/lediKapat',(req,res)=>{
    led.off();
})

server.listen(3000,()=>{
console.log('3000 nolu port dinlenmeye başladı.');
})

//SANAL ELEKTRONİK BOARD OLUŞTURDUK.
const { Board, Led } = require("johnny-five");
const e = require('express');
const board = new Board();

board.on("ready", () => {
   led = new Led(2);
  // "blink" the led in 500ms on-off phase periods
  led.off();
});
//SANAL ELEKTRONİK BOARD OLUŞTURDUK.

io.on('connection',(socket)=>{
    
    console.log("Bir kullanıcı bağlandı.");
    kullanicilar++;
    console.log(kullanicilar);

    socket.on('disconnect',()=>{
        kullanicilar--;
        console.log(kullanicilar);
    })

})

