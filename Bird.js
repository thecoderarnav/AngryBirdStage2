class Bird extends BaseClass{
    constructor(x,y) {
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    }
    display(){
         this.body.position.x = mouseX;
         this.body.position.y = mouseY;
         super.display();
    }
}
          /*var options = { 
          'restitution': 0.8,
          'friction': 0.5,
          'density': 1.0
          
     }
          this.body = Bodies.rectangle(x,y,50,50,options);
         this.width = 50;
         this.height = 50;
         this.image = loadImage("sprites/bird.png");
         World.add(world, this.body);
        }
         display(){
           var pos = this.body.position;
           var angle = this.body.angle;
           pos.x = mouseX;
           pos.y = mouseY;
           push();
           translate(pos.x, pos.y);
           rotate(angle);
           imageMode(CENTER);
           rectMode (CENTER);
           strokeWeight(6);
           stroke("yellow");
           fill("red");
        
           image(this.image,0,0, this.width, this.height);
           pop();
           }

           
        }*/ 