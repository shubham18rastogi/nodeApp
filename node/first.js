//const log = require('./logger');
const path = require('path');
const os = require('os');
const fs = require('fs');
const EventEmitter = require('events');
const event = new EventEmitter();
const Logger = require('./logger');
const logger = new Logger();

/*function greet(person){
    console.log('Hello '+person);
}

greet('Shubham');*/
//console.log(module);

//console.log(log);
//log.print('Hello there');

//var currPath = path.parse(__filename);
//console.log(currPath);

//var totalMem = os.userInfo();
//var freeMem = os.freemem();
//console.log(os.platform()+' '+os.release()+' ');
//console.log(totalMem);
//console.log(freeMem);

// console.log('Before');
// var files = fs.readdirSync('./');
// console.log(files);
// console.log('After');

// console.log('Before');
// fs.readdir('./', function(err, files){
//     console.log(files);
// })
// console.log('After');

// event.on('newEvent', function(){
//     console.log('Event Triggered');
// })

// event.on('eventWithArgs', function(arg){
//     console.log(arg);
// })

// event.emit('newEvent');
// event.emit('eventWithArgs', {arg: 'SomeValue', arg1 : 'Something else'});

logger.on('loggerEvent', function(){
    console.log('Logger Event executed');
})

logger.log('message');  