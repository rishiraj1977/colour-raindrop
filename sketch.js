var drops = [];
var angle = Math.random(1,3);
var r;
var g;
var b;
function setup(){
    
    createCanvas(400,400);
    for (var i = 0; i<500; i++){
        drops[i] = new Rain(random(0,400),random(-100,-500));
    }
}
function draw(){
    frameRate(24);
    if(frameCount%30===0){
        r = Math.round(Math.random()*255);
        b = Math.round(Math.random()*255);
        g = Math.round(Math.random()*255);
    }
    
    /* console.log(r);
    console.log(b);
    console.log(g); */
    background(r,g,b);
    for (var i = 0; i < drops.length; i++) {
        drops[i].fall();
        drops[i].display();
    }
    
}