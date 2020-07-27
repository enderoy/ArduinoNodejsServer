const express =require('express');
const app=express();
const server=require('http').createServer(app);
var led;
//App nesnesi istemcilerden gelen isteği dinlemeye başladı.
app.get('/',(req,res)=>{
    res.write("Merhabe ben yeni express sunucun.");
    res.end();
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
const board = new Board();

board.on("ready", () => {
   led = new Led(2);
  // "blink" the led in 500ms on-off phase periods
  led.off();
});
//SANAL ELEKTRONİK BOARD OLUŞTURDUK.