class Tower {
  constructor(x,y,w,h) {
    this.w = w
    this.h = h
    var options = {
      isStatic: true
    }
    this.body = Bodies.rectangle (x,y,w,h,options)
    this.image = loadImage ("assets/tower.png")
    World.add(world,this.body )

  }

  display() {
   var cos = this.body.position
    push()
    imageMode(CENTER)
    image(this.image, cos.x, cos.y, this.w, this.h)
    pop()
  }
}

