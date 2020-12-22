class Check{
    constructor(x, y, width, height) {
       var options = {
        isStatic:true,
        resititution:0
    }
    this.body=Bodies.rectangle(x,y,width,height,options);
    this.width=width;
    this.height=height;
    this.image=loadImage("sprites/dustbingreen.png")


  World.add(world,this.body);

  }
  display(){
      var pos=this.body.position;
      push();
      translate(pos.x,pos.y);
      imageMode(CENTER);
      fill(255);
      image(this.image,0,0, this.width*10, this.height*10);
    pop();
  }
    }
