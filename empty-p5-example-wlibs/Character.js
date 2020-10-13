// CHARACTER CLASS ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const Facing = {LEFT: 1, RIGHT: 2};

class Character {

  constructor(sprite, numsprites, cols, rows, spritewidth, spriteheight, fps) {

			//loads in spritesheet
		this.spriteSheet = sprite;
		this.walkCycleSprites = numsprites;
		this.spriteSheetColumns = cols;
		this.spriteSheetRows = rows;
		this.spriteDimensions = {w:spritewidth,h:spriteheight};
		this.walkCycleFPS = fps;
		this.walkVelocity = 2;

		this.r = 100;
		this.y = height - this.r;
		this.vy = 0;
		this.gravity = 2;
  }

	//for some reason we cannot break apart our spritesheet into an array of images until the setup function (it won't work in the preload function), that's what this function is for
	makeSpriteArray(){
		//takes spritesheet, grabs the individual frames pixels from sheet, and places them the sprite array
		this.currentSprite = 0;	//sets current sprite for sprite animation
		this.walkSprites = []; 	//initializes sprites array

		let spriteLoadNumber = 0;
		for (let y=0; y <this.spriteSheetRows; y++){
			for (let x=0; x <this.spriteSheetColumns; x++){
				this.walkSprites[spriteLoadNumber] = this.spriteSheet.get(x*this.spriteDimensions.w,y*this.spriteDimensions.h,this.spriteDimensions.w,this.spriteDimensions.h);
				spriteLoadNumber++;
			}
		}
	}


	jump (){
		this.vy = -25;
	}

	duck (){
	}

	place(x,y,w = this.spriteDimensions.w ,h = this.spriteDimensions.h){
		this.x = x;
		this.y = y;
		this.width = w;
		this.height = h;
		this.facing = Facing.RIGHT;
		this.lastFrameTime = millis();
		this.bMoving = false;
	}


	update() {

		if (millis() - this.lastFrameTime > 1000 / this.walkCycleFPS){  												//timing code to advance frame
			if (keyIsDown(65) || keyIsDown(68)) {																						//only advance frame if <a> or <d> pressed, moves character left/right
				this.currentSprite++; if (this.currentSprite >= this.walkCycleSprites) this.currentSprite = 0;
				this.bCharacterMoving = true;
					//change facing direction
					if (keyIsDown(65) && this.facing == Facing.RIGHT) this.facing = Facing.LEFT; 			//code for changing direction of character
					else if (keyIsDown(68) && this.facing == Facing.LEFT) this.facing = Facing.RIGHT; }
			else {this.bCharacterMoving = false;}
		this.lastFrameTime = millis();
		}

		//move character, constrain to canvas and play footsteps sound
		if (this.bCharacterMoving){
			if(this.facing == Facing.RIGHT) this.x+=this.walkVelocity; else if(this.facing == Facing.LEFT) this.x-=this.walkVelocity;
			this.x = constrain(this.x, this.spriteDimensions.w+50, width - this.spriteDimensions.w-50);	//don't let character walk off side of canvas
		}

		this.y +=this.vy;
		this.vy +=this.gravity;
		this.y = constrain (this.y, 0, height - this.r);
	}


  draw() {
		imageMode(CENTER);
		push();
			translate(0, -this.spriteDimensions.h/2);																			//offset draw so that character x,y coincides with bottom edge of sprite
			translate(this.x, this.y);																								//translate matrix so that character draws at x,y location
			if (this.facing == Facing.LEFT) scale(-1,1,1); 														//changes direction of character (default character facing right)
			image(this.walkSprites[this.currentSprite],0,0,this.width, this.height); 	//draws character //this.currentSprite
		pop();
  }
}
