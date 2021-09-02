const cannonballImage = new Image();
cannonballImage.src = "../Assets/cannonball.png";

let haveCannonball = false;

cannonball = new Cannon();

class Cannon {
    constructor() {
      this.height = 40;
      this.width = this.height;
      this.x = (boat.x + boat.width) / 2 - this.width / 2;
      this.y = boat.y - this.height;
      this.offScreen = false;
      this.image = cannonballImage;
    }
  
    shoot() {
      this.y -= 1;
    }
  
    checkIfOffscreen() {
      if (this.y < canvas.height + this.height) {
        this.offScreen = true;
      }
    }
  
    // detectCollision(boat) {
    //   if (
    //     boat.x < this.x + this.width &&
    //     boat.x + boat.width > this.x &&
    //     boat.y < this.y + this.height &&
    //     boat.y + boat.height > this.y
    //   ) {
    //     console.log("collision detected");
    //     return true;
    //   }
    //   return false;
    // }


    //in updatecanvas()

    if (haveCannonball === false) {
        setTimeout(() => {
          // ctx.drawImage(
          //   cannonball.image,
          //   cannonball.x,
          //   cannonball.y,
          //   cannonball.width,
          //   cannonball.height
          // );
          console.log("cannonball");
          haveCannonball = true;
        }, 5000);
      }