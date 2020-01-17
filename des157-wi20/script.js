console.log('reading js');

function setup(){
    var myCanvas = createCanvas (800,250);
    myCanvas.parent('mySketch');
  }
  
function draw(){

   /*ellipse(mouseX, mouseY, 50,50);

   if(mouseIsPressed){
    fill(204, 102, 0);
  } else {
    fill(255);
  }
  */

 if (mouseIsPressed) {
  stroke(213, 191, 255);
} else {
  stroke(255);
}
line(mouseX-66, mouseY, mouseX+66, mouseY);
line(mouseX, mouseY-66, mouseX, mouseY+66); 

}