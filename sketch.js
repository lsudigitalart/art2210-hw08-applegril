let headColor, eyeColor, mouthColor, bodyColor
function setup() {
createCanvas(600, 600);
	randomizer();
  }

function draw(){
	background(220);
text(mouseX, 10, 10);
 text(mouseY, 10, 20);
	
	character(0,0);
}

  function mousePressed() {
 
 randomizer();
  }

  function randomizer() {
    headColor = color(random(255), random(255), random(255));
    eyeColor = color(random(255), random(255), random(255));
    mouthColor = color(random(255), random(255), random(255));
    bodyColor = color(random(255), random(255), random(255));
    patternColor = color(random(255), random(255), random(255));
		noseColor = color(random(255), random(255), random(255));

  }

function character(x,y) {
	
	//antennae
	translate(x,y);
	push();
	fill(patternColor);
	noStroke();
	rect(251, 120, 13, 51);
	rect(319, 118, 13, 51);
	ellipse(257, 113, 30, 30);
	ellipse(325, 109, 30, 30)
	
	//limbs
	translate(x,y);
	push();
	fill(patternColor);
	noStroke();
	ellipse(175, 426, 100, 30);
	ellipse(432, 426, 100, 30);
	ellipse(277, 525, 30, 100);
	ellipse(319, 525, 30, 100)
	
	//body
	translate(x,y)
	push();
	fill(bodyColor);
	noStroke();
	ellipse(303, 514, 180, 50);
	ellipse(223, 432, 50, 180);
	ellipse(383, 433, 50, 180);
	quad(229, 504,383, 506,375, 389,227, 394);
	pop();
	
	
	 //head
	translate(x,y)
	push()
  fill(headColor);
	noStroke();
ellipse(300, 300, 350, 270);
	ellipse(195, 187, 50, 55);
	ellipse(399, 188, 50, 55);
	pop()
	
	
	//eyes
	translate(x,y)
	push();
	fill(eyeColor);
	ellipse(239, 278, 40,40);
	ellipse(349, 279, 40,40);
	fill("white")
	ellipse(239, 268, 22, 22);
	ellipse(349, 268, 22, 22);
	
	//mouth
	translate(x,y)
	push();
	fill(mouthColor);
	triangle(295, 307,264, 322,334, 320)
	pop();
	
	//nose
	translate(x,y);
	push();
	fill(noseColor);
	ellipse(295, 285, 50, 50)
	


	
	pop();
}