class Launcher{
    constructor(bodyA,pointB){
    var options= {
        bodyA:bodyA,
        pointB:pointB,
        length:6,
        stiffness:0.02

    }
    this.rope=Constraint.create(options)
    World.add(world,this.rope)

    }
    display(){
    

if(this.rope.bodyA!=null){
    line(this.rope.bodyA.position.x,this.rope.bodyA.position.y,this.rope.pointB.x,this.rope.pointB.y)

}


    }
 fly() {
this.rope.bodyA=null    
}
attach(bodyA) {
    this.rope.bodyA=bodyA
}

}