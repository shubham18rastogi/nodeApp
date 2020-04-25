const EventEmitter = require('events');
const event = new EventEmitter();

// var log = function(message){
//     console.log('Log : '+message);
// }

class Logger extends EventEmitter{
    log(message){
        console.log(message);
        this.emit('loggerEvent' );
    }
}

//module.exports.print = log;
module.exports = Logger; 