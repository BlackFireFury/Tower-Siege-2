class Block{
  constructor(x, y, width, height) {
      var options = {
          'restitution' :0.8,
          'friction' :0.9,
          'density' :1
      }
      this.image = loadImage("block.png");
      this.visibility = 225
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      var pos= this.body.position;
      
      if(this.body.speed < 3){
        imageMode(CENTER);
        image(this.image, pos.x, pos.y, this.width, this.height);
      }
      else{
        World.remove(world,this.body);
        push();
        this.visibility = this.visibility - 10;
        tint( 225 ,this.visibility);
        image(this.image, pos.x, pos.y, this.width, this.height);
      pop();
      }
     }
    }