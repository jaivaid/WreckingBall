class Ball{
    constructor(){
    var options = {
        restituion : 1.3,
        density : 1.5,
        frictionAir : 0.00000005
    }    
this.body = Bodies.circle(200,400,25,options);
World.add(world,this.body)
    }
    display(){
        fill("yellow");
        ellipseMode(RADIUS);
        ellipse(this.body.position.x,this.body.position.y,25,25)
    }
}