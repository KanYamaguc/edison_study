var m = require('mraa'); //require mraa
console.log('MRAA Version: ' + m.getVersion()); 

//setup access analog inpuput pin 0, 1
var analogPin0 = new m.Aio(0); 
var analogPin3 = new m.Aio(3); 

for(var i = 0; i< 100 ;i++){
////read the value of the analog pin
var analogValue0 = analogPin0.read(); 
var analogValue3 = analogPin3.read(); 
//
//write the value of the analog pin to the console
console.log("A0: " + analogValue0); 
console.log("A3: " + analogValue3); 

}
