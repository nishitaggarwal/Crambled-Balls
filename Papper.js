class Papper {
    constructor(x, y) {
      var options = {
          'isStatic':false,
          'restitution':0.3,
          'friction':0.5,
          'density':10.2
      }
      this.body = Bodies.rectangle(x, y, 25, 25, options);
      this.width = 25;
      this.height = 25;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);

      fill("White");
      rect(0, 0, this.width, this.height);
      pop();
    }
  };
  