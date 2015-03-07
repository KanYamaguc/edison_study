var mraa = require("mraa"); //require mraa
var value = 0.0;
var ZERO_SIG = 50/2000;
var HARF_SIG = 1050/2000;
var i = 0;

//Initialize PWM on Digital Pin #3 (D3) and enable the pwm pin
var pwm3 = new mraa.Pwm(3);
pwm3.enable(true);

//set the period in microseconds.
pwm3.period_us(20 * 1000); //50hz
pwm3.pulsewidth_us(2000);  //palus 2ms 

setInterval(function () {
	if (i < 1500 ){
		pwm3.write(ZERO_SIG); // 0.0 % 
	 	i++;
	} else {
		pwm3.write(HARF_SIG); // 50 %
	}
	console.log(pwm3.read());//read current value that is set before.
}, 30); // sleep sycle 0.2 s
