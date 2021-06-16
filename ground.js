class Ground{
    constructor(){
    var options = {
        isStatic : true
    }    
this.body = Bodies.rectangle(600,600,1200,50,options);
this.width = 1200;
this.height = 50;
World.add(world,this.body)
    }
    display(){
        rectMode(CENTER);
        fill("brown");
        rect(this.body.position.x,this.body.position.y,this.width,this.height)
    }
}