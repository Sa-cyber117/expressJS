const express = require('express');

const app = express();
const port = 80;
const eventEmitter = require('events');

const event = new eventEmitter();

let count = 0;

event.on("countAPI", () =>{
    count++;
    console.log(`Event cal led -> ${count}`)
})

let a = 0;
event.on("countSearchAPI",()=>{
    a++;
    console.log(`Search was used ${a} times.`)
})

app.get("/", (req, resp) =>{
    resp.send("This counting number of times visiting the home tab.");
    event.emit("countAPI");
})

app.get("/search", (req, resp) =>{
    resp.send("This counting number of times visiting the search tab.");
    event.emit("countSearchAPI");
})

app.listen(port, ()=>{
    console.log(`Port number - ${port}`)
})