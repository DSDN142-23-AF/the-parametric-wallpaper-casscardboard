
    //your parameter variables go here!
    let flowerCENTREX = 75; // Controls where the centre point of the floer pulls from (where all the petals meet)
    let flowerCENTREY = 120;
    
    let  petalpointoneX= 95; //Controls the point first vert of petal 1(PETALS COUNTED STARTING FROM PINK GOING CLOCKWISE )
    let  petalpointoneY= 15;
    
    let  petalpointTWOX= 95;//Controls the point first vert of petal 2
    let  petalpointTWOY= 116;
    
    let  petalpoint3X= 95;//Controls the point first vert of petal 3
    let  petalpoint3Y= 70;
    
    let  petalpoint4X= 95;//Controls the point first vert of petal 4
    let  petalpoint4Y= 230;
    
    let  petalpoint5X= 95;//Controls the point first vert of petal 5
    let  petalpoint5Y= 222;
    
    let backroundshape= false;



function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(GRID_WALLPAPER);
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(true); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 100;

  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 100;
}

function wallpaper_background() {
  background(240,248,255);
}



function my_symbol() {


  if(backroundshape == true){ fill(107,142,35)

    strokeWeight(0)
stroke(5)

fill(107,142,35)
beginShape();// backround greenery
curveVertex(199,199)
curveVertex(99,185)
curveVertex(44,92)
curveVertex(0,0)
curveVertex(flowerCENTREX,flowerCENTREY)
curveVertex(63,116)
curveVertex(flowerCENTREX,flowerCENTREY)
curveVertex(99,185)
curveVertex(199,199)
  endShape(CLOSE);

 }
  

strokeWeight(0)
stroke(5)
  
  fill(255,182,193)
  beginShape();//
  curveVertex(petalpointoneX,petalpointoneY)
  curveVertex(34,29)
  curveVertex(56,19)
  curveVertex(57,03)
  curveVertex(71,50)
  curveVertex(flowerCENTREX,flowerCENTREY)
  curveVertex(59,66)
  curveVertex(42,60)
  endShape(CLOSE);


 

fill(107,142,35)
  beginShape();// green
  curveVertex(petalpointTWOX,petalpointTWOY)
  curveVertex(155,115)
  curveVertex(163,132)
  curveVertex(102,158)
  curveVertex(149,148)
  curveVertex(flowerCENTREX,flowerCENTREY)
  curveVertex(135,132)
  endShape(CLOSE);
 
 
 
 fill(255,69,0)
    beginShape();// orange petal
    curveVertex( petalpoint3X, petalpoint3Y)
  curveVertex(122,22)
  curveVertex(140, 20)
   curveVertex(151,31)
  curveVertex(153,31)
  curveVertex(flowerCENTREX,flowerCENTREY)
  curveVertex(144,74)
  curveVertex(111,88)
  endShape(CLOSE);



  
fill(100,149,237)// petal 4 ()
    beginShape();
    curveVertex(petalpoint4X,petalpoint4Y)
  curveVertex(46,111)
  curveVertex(51,132)
  curveVertex(54,150)
  curveVertex(11,167)
  curveVertex(flowerCENTREX,flowerCENTREY)
  curveVertex(22,131)
   endShape(CLOSE);
 


   fill(75,0,130)// petal 5 puple petal
    beginShape();
    curveVertex(petalpoint5X,petalpoint5Y)
    curveVertex(85,113)
    curveVertex(92,130)
    curveVertex(129,142)
    curveVertex(75,154)
    curveVertex(flowerCENTREX,flowerCENTREY)
    curveVertex(73,162)
    curveVertex(77,110)
     endShape(CLOSE);

    
    
 
     endShape(CLOSE);


}
