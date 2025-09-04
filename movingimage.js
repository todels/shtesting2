/*
En klass som håller reda på detaljer om
bilder och hur de rör sig och storleksförändras. Ni behöver inte
behöva ändra något här (om ni inte vill förstås...).
*/

// Deklarerar en klass med namnet 'MovingImage'.

class MovingImage{
 // konstruktor för klassen.
 // inga variabler innan konstruktorn!
 // Parametrar: x-position, y-positions, bredd, höjd, filnamn.
 constructor(tempX, tempY, tempW, tempH, tempFilename){
   this.x = tempX;                      // bildens x-värde
   this.y = tempY;                      // bildens y-värde
   this.imWidth = tempW;                // bildens bredd
   this.imHeight = tempH;               // bildens höjd
   this.img = loadImage(tempFilename);  // bildens filnamn
   this.visible = false;                // bildens synlighet
   this.ImageCaption='';                // bildtext

   // för rörelse
   this.newX;
   this.newY;
   this.dx;
   this.dy

   // för resize
   this.newSX;
   this.newSY;
   this.dsx;
   this.dsy;
 }

 // Klassens metoder

// x, y och tid för bildens förflyttning
moveTo(tempX, tempY, tempSec){
  this.newX = tempX;
  this.newY = tempY;
  frames = frameRate()*tempSec;
  this.dx = (this.newX-this.x)/frames;
  this.dy = (this.newY-this.y)/frames;
}

  // x, y och tid för bildens storleksändring
 resizeTo(tempX, tempY, tempSec){
   this.newSX = tempX;
   this.newSY = tempY;
   frames = frameRate()*tempSec;
   this.dsx  = (this.newSX-this.imWidth)/frames;
   this.dsy  = (this.newSY-this.imHeight)/frames;
 }

 // Sätt bildens synlighet (true eller false)
 setVisible(vis){
   this.visible = vis;
 }

 // Sätt bildtext
 setCaption(s){
   this.ImageCaption = s;
 }

 // Rita bild och bildtext
 draw(){
   // Räkna ut x och y för förflyttning
   if(Math.abs(this.newX-this.x)>Math.abs(this.dx)){
     this.x+=this.dx;
   }
   if(Math.abs(this.newY-this.y)>Math.abs(this.dy)){
     this.y+=this.dy;
   }

   // räkna ut bredd och höjd för storleksförändring
   if(Math.abs(this.newSX-this.imWidth)>Math.abs(this.dsx)){
     this.imWidth+=this.dsx;
   }

   if(Math.abs(this.newSY-this.imHeight)>Math.abs(this.dsy)){
     this.imHeight+=this.dsy;
   }

   // Rita bilden
   if(this.visible){
     image(this.img, this.x, this.y, this.imWidth, this.imHeight);

    // Om bilden har bildtext, rita ruta och skriv text i den
     if(this.ImageCaption !=""){
       noStroke();
       fill(255, 200);
       rect(this.x, this.y+this.imHeight, this.imWidth, 60);
       textAlign(CENTER);
       fill(50);
       textSize(11);
       text(this.ImageCaption, this.x, (this.y+this.imHeight)+5, this.imWidth, 60);
     }
   }
 }
}
