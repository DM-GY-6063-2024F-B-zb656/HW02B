function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255,255,255);

  let rectX = windowWidth/2 - 120
  let rectY = 0
  
  //landscape
  fill(20,149,255); //sky
  rect(rectX, rectY, 240, 750);

  fill(60,128,0); //hill
  arc(windowWidth/2 + 40, 750, 400, 400, PI, 0);

  fill(255,255,255); //clouds
  strokeWeight(0);
  rect(rectX + 48, rectY + 427, 80, 20, 10, 10, 5, 5);
  ellipse(rectX + 68, rectY + 427, 30, 30);
  ellipse(rectX + 88, rectY + 417, 30, 30);
  ellipse(rectX + 100, rectY + 427, 30, 30);

  rect(rectX + 108, rectY + 307, 80, 20, 10, 10, 5, 5);
  ellipse(rectX + 130, rectY + 307, 30, 30);
  ellipse(rectX + 150, rectY + 307, 30, 30);
  ellipse(rectX + 165, rectY + 295, 30, 30);
  ellipse(rectX + 170, rectY + 307, 30, 30);
  strokeWeight(1);

  fill(235,7,240); //flowers
  quad(rectX + 10, rectY + 695, rectX + 15, rectY + 700, rectX + 10, rectY + 705, rectX + 5, rectY + 700);
  quad(rectX + 30, rectY + 595, rectX + 35, rectY + 600, rectX + 30, rectY + 605, rectX + 25, rectY + 600);
  quad(rectX + 50, rectY + 650, rectX + 55, rectY + 655, rectX + 50, rectY + 660, rectX + 45, rectY + 655);
  quad(rectX + 70, rectY + 625, rectX + 75, rectY + 630, rectX + 70, rectY + 635, rectX + 65, rectY + 630);
  quad(rectX + 120, rectY + 575, rectX + 125, rectY + 580, rectX + 120, rectY + 585, rectX + 115, rectY + 580);
  quad(rectX + 155, rectY + 670, rectX + 160, rectY + 675, rectX + 155, rectY + 680, rectX + 150, rectY + 675);
  quad(rectX + 200, rectY + 590, rectX + 205, rectY + 595, rectX + 200, rectY + 600, rectX + 195, rectY + 595);

  //walls
  fill(40,25,0);
  rect(0,0, windowWidth/2 - 120, windowHeight);
  rect(rectX + 240, 0, windowWidth, windowHeight);

  //windowframe
  fill(33,23,0);
  rect(rectX - 25, rectY, 25, 750);
  rect(rectX + 240, rectY, 25, 750);

  //window
  fill(255,255,255,160)
  //top line
  rect(rectX, rectY, 120, 10);
  rect(rectX + 120, rectY, 120, 10);

  //middle line
  rect(rectX + 85, rectY + 210, 70, 505);

  //left side
  rect(rectX, rectY + 10, 10, 20);
  rect(rectX, rectY + 30, 10, 80);
  rect(rectX + 10, rectY + 30, 20, 40);
  rect(rectX + 10, rectY + 90, 10, 5);
  rect(rectX + 20, rectY + 90, 10, 5);
  rect(rectX + 10, rectY + 95, 20, 15);
  rect(rectX + 30, rectY + 30, 45, 20);
  rect(rectX + 75, rectY + 30, 45, 20);
  rect(rectX + 30, rectY + 50, 90, 10);
  rect(rectX + 75, rectY + 60, 45, 10);
  rect(rectX + 30, rectY + 70, 45, 20);
  rect(rectX + 75, rectY + 70, 45, 20);
  rect(rectX + 30, rectY + 90, 45, 40);
  rect(rectX + 75, rectY + 90, 10, 40);
  rect(rectX + 85, rectY + 90, 35, 30);
  rect(rectX + 85, rectY + 120, 35, 10);
  rect(rectX + 85, rectY + 130, 35, 10);
  rect(rectX, rectY + 190, 10, 20);
  rect(rectX + 30, rectY + 190, 45, 20);
  rect(rectX, rectY + 210, 10, 10);
  rect(rectX + 10, rectY + 210, 65, 10);
  rect(rectX, rectY + 220, 10, 65);
  rect(rectX, rectY + 285, 10, 10);
  rect(rectX + 75, rectY + 220, 10, 65);
  rect(rectX + 10, rectY + 220, 65, 70);
  rect(rectX, rectY + 295, 10, 160);
  rect(rectX + 75, rectY + 295, 10, 160);
  rect(rectX, rectY + 455, 10, 130);
  rect(rectX + 75, rectY + 455, 10, 140);
  rect(rectX, rectY + 585, 10, 10);
  rect(rectX, rectY + 595, 10, 100);
  rect(rectX + 75, rectY + 595, 10, 50);
  rect(rectX + 75, rectY + 645, 10, 50);
  rect(rectX, rectY + 705, 10, 10);
  rect(rectX, rectY + 715, 10, 10);
  rect(rectX + 10, rectY + 695, 75, 20);
  rect(rectX + 30, rectY + 130, 45, 40);
  rect(rectX + 85, rectY + 140, 35, 40);
  rect(rectX + 10, rectY + 290, 65, 405);

  //right side
  rect(rectX + 230, rectY + 10, 10, 20);
  rect(rectX + 230, rectY + 30, 10, 40);
  rect(rectX + 130, rectY + 30, 100, 40);
  rect(rectX + 230, rectY + 80, 10, 130);
  rect(rectX + 130, rectY + 70, 25, 50);
  rect(rectX + 155, rectY + 70, 45, 60);
  rect(rectX + 130, rectY + 120, 25, 10);
  rect(rectX + 130, rectY + 130, 70, 10);
  rect(rectX + 130, rectY + 175, 25, 5);
  rect(rectX + 155, rectY + 175, 10, 5);
  rect(rectX + 165, rectY + 140, 35, 10);
  rect(rectX + 165, rectY + 150, 35, 25);
  rect(rectX + 165, rectY + 175, 35, 5);
  rect(rectX + 200, rectY + 100, 30, 80);
  rect(rectX + 130, rectY + 180, 25, 30);
  rect(rectX + 155, rectY + 190, 10, 20);
  rect(rectX + 165, rectY + 180, 35, 30);
  rect(rectX + 200, rectY + 180, 10, 10);
  rect(rectX + 210, rectY + 180, 10, 10);
  rect(rectX + 220, rectY + 190, 10, 10);
  rect(rectX + 200, rectY + 200, 10, 10);
  rect(rectX + 210, rectY + 200, 10, 10);
  rect(rectX + 155, rectY + 210, 10, 10);
  rect(rectX + 155, rectY + 220, 10, 65);
  rect(rectX + 230, rectY + 210, 10, 75);
  rect(rectX + 230, rectY + 285, 10, 10);
  rect(rectX + 155, rectY + 285, 10, 170);
  rect(rectX + 230, rectY + 295, 10, 160);
  rect(rectX + 155, rectY + 455, 10, 130);
  rect(rectX + 230, rectY + 455, 10, 140);
  rect(rectX + 155, rectY + 595, 10, 50);
  rect(rectX + 155, rectY + 645, 10, 50);
  rect(rectX + 230, rectY + 595, 10, 100);
  rect(rectX + 155, rectY + 695, 75, 20);
  rect(rectX + 230, rectY + 705, 10, 10);
  rect(rectX + 230, rectY + 715, 10, 10);
  rect(rectX + 165, rectY + 210, 65, 485);
  line(rectX + 130, rectY + 220, rectX + 155, rectY + 220);
  
  //bottom lines
  rect(rectX + 20, rectY + 715, 210, 10);
  rect(rectX, rectY + 725, 240, 25);

  //second line
  rect(rectX + 10, rectY + 10, 110, 10);
  rect(rectX + 120, rectY + 10, 110, 10);

  //third line small boxes
  rect(rectX + 10, rectY + 20, 10, 5);
  rect(rectX + 10, rectY + 25, 10, 5);
  rect(rectX + 30, rectY + 20, 10, 5);
  rect(rectX + 30, rectY + 25, 10, 5);
  rect(rectX + 50, rectY + 20, 10, 5);
  rect(rectX + 50, rectY + 25, 10, 5);
  rect(rectX + 60, rectY + 20, 10, 10);
  rect(rectX + 70, rectY + 20, 10, 5);
  rect(rectX + 70, rectY + 25, 10, 5);
  rect(rectX + 80, rectY + 20, 10, 10);
  rect(rectX + 90, rectY + 20, 10, 5);
  rect(rectX + 90, rectY + 25, 10, 5);
  rect(rectX + 120, rectY + 20, 10,10);
  rect(rectX + 130, rectY + 20, 10, 5);
  rect(rectX + 130, rectY + 25, 10, 5);
  rect(rectX + 150, rectY + 20, 10, 5);
  rect(rectX + 150, rectY + 25, 10, 5);
  rect(rectX + 170, rectY + 20, 10, 5);
  rect(rectX + 170, rectY + 25, 10, 5);
  rect(rectX + 190, rectY + 20, 10, 5);
  rect(rectX + 190, rectY + 25, 10, 5);
  rect(rectX + 200, rectY + 20, 10, 10);
  rect(rectX + 220, rectY + 20, 10, 5);
  rect(rectX + 220, rectY + 25, 10, 5);

  //middle vertical line
  rect(rectX + 120, rectY + 40, 10, 10);
  rect(rectX + 120, rectY + 60, 10, 10);
  rect(rectX + 120, rectY + 80, 10, 10);
  rect(rectX + 120, rectY + 90, 10, 30);
  rect(rectX + 120, rectY + 120, 10, 10);
  rect(rectX + 120, rectY + 130, 10, 10);
  rect(rectX + 120, rectY + 140, 10, 40);

  //left small boxes
  rect(rectX + 10, rectY + 110, 10, 10);
  rect(rectX + 20, rectY + 110, 10, 10);
  rect(rectX, rectY + 120, 10, 10);
  rect(rectX + 20, rectY + 120, 10, 10);
  rect(rectX + 10, rectY + 130, 10, 10);
  rect(rectX + 20, rectY + 140, 10, 10);
  rect(rectX + 20, rectY + 160, 10, 10);
  rect(rectX, rectY + 170, 10, 10);
  rect(rectX + 10, rectY + 170, 10, 10);
  rect(rectX + 10, rectY + 180, 10, 10);
  rect(rectX + 30, rectY + 170, 5, 20);
  rect(rectX + 35, rectY + 170, 10, 10);
  rect(rectX + 45, rectY + 170, 10, 10);
  rect(rectX + 55, rectY + 170, 10, 10);
  rect(rectX + 65, rectY + 170, 10, 10);
  rect(rectX + 75, rectY + 170, 10, 10);
  rect(rectX + 35, rectY + 180, 10, 10);
  rect(rectX + 55, rectY + 180, 10, 10);
  rect(rectX + 75, rectY + 180, 10, 10);
  rect(rectX + 75, rectY + 200, 10, 10);
  rect(rectX + 95, rectY + 180, 15, 10);
  rect(rectX + 120, rectY + 180, 10, 10);
  rect(rectX + 85, rectY + 190, 15, 10);
  rect(rectX + 85, rectY + 200, 25, 10);
  rect(rectX + 120, rectY + 200, 10, 10);
  rect(rectX, rectY + 140, 10, 10);
  rect(rectX + 10, rectY + 150, 10, 10);
  rect(rectX, rectY + 160, 10, 10);
  rect(rectX + 110, rectY + 190, 10, 10);


  // colored boxes down here v

  fill(0,0,0,190); //black
  rect(rectX + 20, rectY + 20, 10, 10);
  rect(rectX + 110, rectY + 20, 10, 10);
  rect(rectX + 160, rectY + 20, 10, 10);
  rect(rectX + 230, rectY + 70, 10, 10);
  rect(rectX + 120, rectY + 50, 10, 10);
  rect(rectX + 120, rectY + 70, 10, 10);
  rect(rectX, rectY + 180, 10, 10);
  rect(rectX + 20, rectY + 180, 10, 10);
  rect(rectX + 45, rectY + 180, 10, 10);
  rect(rectX + 65, rectY + 180, 10, 10);
  rect(rectX + 85, rectY + 180, 10, 10);
  rect(rectX + 75, rectY + 190, 10, 10);
  rect(rectX + 75, rectY + 210, 10, 10);
  rect(rectX + 155, rectY + 180, 10, 10);
  rect(rectX + 220, rectY + 180, 10, 10);
  rect(rectX + 200, rectY + 190, 10, 10);
  rect(rectX + 220, rectY + 200, 10, 10);
  rect(rectX, rectY + 695, 10, 10);
  rect(rectX + 10, rectY + 715, 10, 10);
  rect(rectX + 230, rectY + 695, 10, 10);

  fill(8,9,201,190); //dark blue
  rect(rectX + 40, rectY + 20, 10, 10);
  rect(rectX + 120, rectY + 210, 10, 10);
  rect(rectX + 210, rectY + 190, 10, 10);

  fill(219,155,0, 190); //dark orange
  rect(rectX + 100, rectY + 20, 10, 10);
  rect(rectX + 200, rectY + 70, 30, 30);
  rect(rectX, rectY + 110, 10, 10);
  rect(rectX + 10, rectY + 120, 10, 10);
  rect(rectX, rectY + 130, 10, 10);
  rect(rectX + 20, rectY + 130, 10, 10);
  rect(rectX + 10, rectY + 140, 10, 10);
  rect(rectX, rectY + 150, 10, 10);
  rect(rectX + 20, rectY + 150, 10, 10);
  rect(rectX + 10, rectY + 160, 10, 10);
  rect(rectX + 20, rectY + 170, 10, 10);

  fill(0,166,181, 90); //light blue
  rect(rectX + 140, rectY + 20, 10, 10);

  fill(173,0,0,190); //dark red
  rect(rectX + 180, rectY + 20, 10, 10);
  rect(rectX + 210, rectY + 20, 10, 10);
  rect(rectX + 30, rectY + 60, 45, 10);
  rect(rectX + 75, rectY + 160, 10, 10);
  rect(rectX + 110, rectY + 180, 10, 10);
  rect(rectX + 100, rectY + 190, 10, 10);
  rect(rectX + 120, rectY + 190, 10, 10);
  rect(rectX + 110, rectY + 200, 10, 10);
  rect(rectX + 75, rectY + 285, 10, 10);
  rect(rectX + 155, rectY + 585, 10, 10);

  fill(247,193,0,190); //marigold
  rect(rectX + 10, rectY + 70, 20, 20);
  rect(rectX + 130, rectY + 110 + 30, 35, 35);

  fill(70,102,43, 190); //dark olive
  rect(rectX + 120, rectY + 30, 10, 10);

  fill(97, 173, 30, 190) //light green
  rect(rectX + 10, rectY + 190, 20, 20);

  //erase test
  erase()
  ellipse(rectX + 75, rectY + 65, 60);
  ellipse(rectX + 85, rectY + 135, 60);
  ellipse(rectX + 155, rectY + 75, 30);
  ellipse(rectX + 165, rectY + 135, 60);
  noErase();

  fill(20,149,255);
  ellipse(rectX + 75, rectY + 65, 60);
  ellipse(rectX + 85, rectY + 135, 60);
  ellipse(rectX + 155, rectY + 75, 30);
  ellipse(rectX + 165, rectY + 135, 60);

  //circles

  fill(173,0,0, 190); //dark red
  ellipse(rectX + 75, rectY + 65, 60);

  fill(247,193,0,190); //marigold
  ellipse(rectX + 85, rectY + 135, 60);

  fill(8,9,201,190); //dark blue
  ellipse(rectX + 155, rectY + 75, 30);

  fill(97, 173, 30, 190); //light green
  ellipse(rectX + 165, rectY + 135, 60);

}

function draw() {
}