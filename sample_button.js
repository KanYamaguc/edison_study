var m = require('mraa'); //require mraa
var analogPin0 = new m.Aio(0); 

function hoge(){
	//setup access analog inpuput pin 0, 1
	var i = 0;
	while(i < 15){
		var analogValue = analogPin0.read(); 
		console.log("A0: " + analogValue);
		if ( analogValue > 1000) {
			i++;
		}
	}
	return true;
};

hoge();

console.log("end");
