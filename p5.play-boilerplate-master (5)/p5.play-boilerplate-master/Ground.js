class Ground {
    constructor(x,y,width,height) {
        var options = {
            isStatic : true,
            'restitutions' : 0,
            'friction' : 0,
            'density' : 1


        }

        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;

        World.add(world,this.body);

    }
    display() {
        rectMode(CENTER);
        fill(255);
        var pos = this.body.position;
        rect(this.body.position.x,this.body.postion.y,this.width,this.height);

    }
}