var moonImages = [12];

var myImage;
var sunImage;
var moonImage;

var time1 = 8000;
var time2 = 24000;
var time3 = 40000;
var time4 = 56000;
var time5 = 64000;

var atmos = {
	angle: 0.0,
	offset: 800,
	scalar: 150,
	speed: 0.075,
	x: 0,
}

var sun = {
	 angle: 0.0,
	 offset: 800,
	 scalar: 150,
	 speed: 0.075,
}

var moon = {
	 angle: 0.0,
	 offset: 800,
	 scalar: 150,
	 speed: 0.075,
}

function preload(){
	myImage = loadImage("media/day-to-night-fade-final2.jpg");
	sunImage = loadImage("media/sun3.png");
	moonImage = loadImage("media/moonbetter.png");
	moonImages[0] = loadImage("media/moonbetter00.png");
	moonImages[1] = loadImage("media/moonbetter01.png");
	moonImages[2] = loadImage("media/moonbetter02.png");
	moonImages[3] = loadImage("media/moonbetter03.png");
	moonImages[4] = loadImage("media/moonbetter04.png");
	moonImages[5] = loadImage("media/moonbetter05.png");
	moonImages[6] = loadImage("media/moonbetter06.png");
	moonImages[7] = loadImage("media/moonbetter07.png");
	moonImages[8] = loadImage("media/moonbetter08.png");
	moonImages[9] = loadImage("media/moonbetter09.png");
	moonImages[10] = loadImage("media/moonbetter10.png");
	moonImages[11] = loadImage("media/moonbetter11.png");

}

function setup() {
  createCanvas(800, 800);
}

function draw() {
	background(100);
	atmosDraw();
	drawSun();
	moonDraw();
}

	function atmosDraw() {
	image(myImage, atmos.x, 0,  myImage.width-width, myImage.height);
		if (atmos.x < -myImage.width + (width*3)) {
			atmos.x = 0;
		}
	atmos.x = atmos.x - atmos.speed*30;
	// print(atmos.x);
	}

	function drawSun() {
	var x = sun.offset/2 + (6*cos(sun.angle/2)) * sun.scalar;
	var y = sun.offset + (4*sin(sun.angle/2)) * sun.scalar;
	image(sunImage, x, y, sunImage.width/2, sunImage.height/2);
	sun.angle += sun.speed/5;
	}

	function moonDraw(){
	var a = moon.offset/2 + (6*sin(moon.angle/2)) * moon.scalar;
  var b = moon.offset + (4*cos(moon.angle/2)) * moon.scalar;
	// print(cos(moon.angle/2));
	print(sin(moon.angle/2));
		var i = int(random(0,11)); //figure out rotating out images in array
		// if (a < -0.96 || a > - 0.73){
		// 	a= -0.70
	image(moonImages[i], a, b , moonImage.width/10, moonImage.height/10);
  moon.angle += moon.speed/5;
	}



	//TO DOS:
	//put constraints on moon and sun movements
	//create moon images an put in an array
	//add audio


	//MUSTS:
	//1. moving element X
	//2. use an array
	//3. timing mechanism X
	//4. a loop
	//5. conditional statements X
  //6. a class with an object
	//EXTRA CRED:
	//1. input - add clickable button or interactive control
  //2. audio
  //3. external data - have clock receive external data from some source
