// TRIGGERED OBJECT CLASS ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// (you can reuse this class)

class TriggeredObject {

  // constructor(x, y, sprites, targetRadius) {
	constructor(x, y, myMushroom, targetRadius) {	

		this.mushposi = createVector(x,y);
		this.mushroom = myMushroom;
		this.targetRadius = targetRadius;
		this.lastFrameTime = millis();
  }

	setPosition(x,y){this.position = createVector(x,y);}
	setSize(w,h){this.size = createVector(w,h);}

	isTriggered(x,y){
		if ((dist(this.mushposi.x, this.mushposi.y, this.x, this.y) <= this.targetRadius) && (this.bTriggered==false)){
				this.bTriggered = true;
				this.lastFrameTime = millis();
				this.currentSprite = 0;
				return true;
		} else return false;
	}

	update() {

		if (this.bTriggered == true) {
				 myMushroom.splice(0, 1);
		}
  }

  draw() {
  }
}
