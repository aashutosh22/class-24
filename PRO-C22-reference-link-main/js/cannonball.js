class Cannonball{
  constructor(x,y){
    var op = {
      isStatic:true  
    }  
    this.r=30
    this.body=Bodies.circle(x,y,this.r)
    this.image = loadImage("assets/cannonball.png")
    World.add(world,this.body)
  }
  display() {
    push()
    imageMode(CENTER)
    image(this.image,this.body.position.x,this.body.position.y,this.r,this.r)
    pop()
  }
  shoot(){
    Matter.Body.setStatic(this.body,false)
    Matter.Body.setVelocity(this.body,{x:30,y:-20})
    
  }
}