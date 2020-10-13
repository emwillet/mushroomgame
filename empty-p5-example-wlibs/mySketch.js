let walkingCharacter;
let scene;
let speed = 1;

let myMushrooms = [];
let collect;


var atmos = {
	angle: 0.0,
	offset: 800,
	scalar: 150,
	speed: 0.075,
	x: 0
}



function preload(){
	scene = loadImage ("scenev2extended-01.png");
	mushroom = loadImage ("mushroom.gif");
	spider = loadImage ("spider.gif");
	
	walk = loadImage("walking2-01.png");
	jump = loadImage("jumping2-01.png");
	duck = loadImage("ducking-01.png");

	walkingCharacter = new Character(walk, 6, 6, 1, 170, 312, 12);
		
	for (let x = 0; x < 5; x++){
		myMushrooms.push(new Mushroom(mushroom, random(0,1200),random(350,500)));
	}
}
	

function setup() {
	image(scene, width/2, height/2,  scene.width/2, scene.height/2);
	createCanvas(1200, 600);
	walkingCharacter.makeSpriteArray();
	walkingCharacter.place(width/2,height/2);		

	collect = new TriggeredObject(width/2,height/2, myMushrooms, 6, 300);
	collect.setSize(100, 100);
	
}

function draw() {
	//print(walkingCharacter.position); //ERIN - you don't any attributes in Character class called position
	background(255);
	atmosDraw();
	interactives();
	walkingCharacter.update();
	walkingCharacter.draw(); 
	
	
	
	for (let x = 0; x < myMushrooms.length; x++){
		myMushrooms[x].draw();
	}
	// collect.isTriggered(walkingCharacter.x, walkingCharacter.y); //update variables in triggered object
	// collect.update();
	// collect.draw();
	

	// if (state == 'w') {
	// jumpingCharacter.draw(); 
	// 	jumpingCharacter.update();
	// } else if (state == 'q') {
	// duckingCharacter.draw(); 
	// 	duckingCharacter.update();
	// } else if (state == 'a' || state == 'd') {
	// walkingCharacter.draw(); 
	// 	walkingCharacter.update();
	// }	
}



function keyPressed() {
	if (key == 'e') {
		walkingCharacter.jump();
	}
	
	if (key == 'q') {
		walkingCharacter.duck();
	}
}


function interactives (){
		image(spider, 750, 300,  spider.width, spider.height);
}

function atmosDraw() {
		image(scene, atmos.x+1200, height/2,  (scene.width/2), scene.height/2);
	
		//if (this.x == (width-50)) {
	 	//	atmos.x = atmos.x - atmos.speed*20;
		//}
		
		// console.log("walkingCharacter.x = " + str(walkingCharacter.x));
	print(walkingCharacter.x);
	
		if (walkingCharacter.x == (980) && walkingCharacter.bCharacterMoving == true) {
	 		atmos.x = atmos.x - atmos.speed*20;
			if (atmos.x < -scene.width + (width*2)) {
					atmos.x = 0;
			}
		}
	
	if (walkingCharacter.x == (220) && walkingCharacter.bCharacterMoving == true) {
	 		atmos.x = atmos.x + atmos.speed*20;
			if (atmos.x < scene.width + (width*2)) {
					atmos.x = 0;
			}
		}
	
	}



// Requirements-- 
// animated or moving elements X
// use an array X
// use a timing mechanism ___
// use a loop X
// use a class X
// use multiple sprite animations ___
// have a number of conditional statements which 
//    trigger responsive animations and media effects ___

// Advanced challenge(s), pick one if it appeals to you (not required):
// + create elements within the scene which block the characters movement (like walls)
// + have a puzzle mechanic, where multiple elements have to be triggered in 
// 		a particular sequence, to solve the “puzzle”
// + have some game mechanic, like “shooting” a projectile, to trigger an animation
