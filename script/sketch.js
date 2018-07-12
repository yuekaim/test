var x, y;
x = mouseX;
y = mouseY;

function setup(){
    if (windowWidth > 600){
        var cns = createCanvas(windowWidth, windowHeight);
    }
}

function draw(){

}

function mouseDragged() { 
	stroke(255,0,0);
	line(mouseX, mouseY, pmouseX, pmouseY);
}