class Rain{
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.length = random(10,100);
        this.speed = random(10,18);
        this.angular = angle;
        this.thick = random(1,3);

    }
    display(){
        strokeWeight(this.thick);
        stroke(random(255), random(255), random(255));
        line(this.x,this.y,this.x+this.angular,this.y+this.length);
    }
    fall(){
        this.y = this.y+this.speed;
        if (this.y > height) {
            this.y = random(-200, -100);
            this.speed = random(10,20);
          }
    }
}