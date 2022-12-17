const EventEmitter = require('events');

const event = new EventEmitter();

event.on('sayMyName', ()=>{
    console.log('Your name is Priyakanta Thoudam')
});

// event to be fired only one time
event.emit("sayMyName");

event.on("checkPage", (sr, msg)=>{
    console.log(`status code is ${sr} and the page is ${msg}`);
});

event.emit("checkPage", 200, "ok  Its's Ok")
