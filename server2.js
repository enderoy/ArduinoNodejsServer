
var http=require('http');
var led;

http.createServer(function(req,res){
    res.write('Merhaba ben yeni sunucun.(server)');
    if(req.url=='/lediYak'){
      led.on();
    } 
    if(req.url=='/lediKapat'){
      led.off();
    }
    console.log(req.url);
    res.end();
}).listen(8080);

const { Board, Led } = require("johnny-five");
const board = new Board();


board.on("ready", () => {
   led = new Led(2);

  // "blink" the led in 500ms on-off phase periods
  led.off();
});