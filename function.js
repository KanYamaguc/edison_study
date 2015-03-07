/**
 *　速度をメソッド化
 */
var mraa = require("mraa"); //require mraa

// set pwm puls
const ZERO_SIG = 90/2000; // 0%
const HARF_SIG = 120/2000; // 50%
const MAX_SIG = 180/2000; // 100%

// init pwm
var pwm3 = new mraa.Pwm(3);
pwm3.enable(true);

//set the period in microseconds.
pwm3.period_us(20 * 1000); //50hz
pwm3.pulsewidth_us(2000);  //palus 2ms 

console.log("init");
pwm3.write(ZERO_SIG); // 0.0 %

var analogPin0 = new mraa.Aio(0); 

while(true){
	if(analogPin0.read() > 1000){
		pwm3.write(HARF_SIG); // 0.0 %
	} else {
		pwm3.write(ZERO_SIG); // 50.0 %
	}
	console.log(pwm3.read());
}
