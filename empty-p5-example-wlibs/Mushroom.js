class Mushroom {

  constructor(image, mx, my) {


		this.mushroomImage = image;
		this.my = my;
		this.mx = mx;
  }

	draw(){

		image(this.mushroomImage, this.mx, this.my, this.mushroomImage.height/2, this.mushroomImage.width/2);
	}

	update (){
	}
}
