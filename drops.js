class Drops{

    constructor(x,y){
        var options={
            friction:0.1
        }
        
    
    this.r=5
    this.x=x;
    this.y=y;
    
    this.drop = Bodies.circle(x,y,5,options)

    World.add(world,this.rain);

    }
    
       
    

update(){
    if (this.drop.position.y>height){
        Matter.body.setposition(this.drop,{x:random(0,400),y: random(0,400)})
    }
}

}