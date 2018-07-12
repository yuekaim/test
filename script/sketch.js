var x, y;
x = mouseX;
y = mouseY;

function setup(){
    var cns = createCanvas(windowWidth, windowHeight);
}

function draw(){

}

function mouseDragged() { 
	stroke(255,0,0);
	line(mouseX, mouseY, pmouseX, pmouseY);
}