var mraa = require("mraa"); //require mraa

var ZERO_SIG = 90/2000; // 0%
var HARF_SIG = 120/2000; // 50%
var MAX_SIG = 180/2000; // 100%

//Initialize PWM on Digital Pin #3 (D3) and enable the pwm pin
var pwm3 = new mraa.Pwm(3);
pwm3.enable(true);

//set the period in microseconds.
pwm3.period_us(20 * 1000); //50hz
pwm3.pulsewidth_us(2000);  //palus 2ms 

var i = 0;
setInterval(function () {
	if (i < 2500 ){
		pwm3.write(ZERO_SIG); // 0.0 % 
	 	i++;
	} else if( i < 4000){
		pwm3.write(HARF_SIG); // 50 %
	 	i++;
	} else {
		pwm3.write(ZERO_SIG);
	}
	console.log(pwm3.read(),i);
}, 2); // sleep sycle 0.2 s
