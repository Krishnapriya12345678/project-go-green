class Waste {
    constructor(x,y,r) {
      var options={
        isStatic:true,
        restitution:0.3,
         friction:0.5,
        densityP:1.2
      }
      this.body = Bodies.circle(this.body.x,this.body.y,this.r/2,options);

      
      World.add(world, this.body);
    }
    display(){
     
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      fill('red');
      strokeWeight(4)
      stroke("yellow")
      circle(0, 0,this.r/2);
      pop();
    }
  };