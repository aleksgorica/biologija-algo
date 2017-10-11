var a = [[],[]];
var stevilo_crnih = prompt("Vnesite stevilo crnih");
var stevilo_belih = prompt("Vnesite stevilo belih");
var skatla;

function setup(){
  createCanvas(windowWidth,windowHeight);
 skatla = new Skatla();
 skatla.prikazi();
  var negro = new fizol("crn");
  var bianco = new fizol("bel");
  for(var i = 0; i < stevilo_crnih; i++){
  a[0].push(negro);
}
  for(var i = 0; i < stevilo_belih; i++){
  a[1].push(bianco);
  }
  console.log(a.join(","));
}



function draw(){
  background(0);
    skatla.prikazi();

    skatla.zasveti();
    skatla.spremeni();

}

function Skatla(){
  this.widx = 400;
  this.widy = 300;
  this.movex = 0;
  this.movey = 0;
  this.bck = color(0,255,30);

  this.zasveti = function(){
    if(mouseIsPressed && this.movex < mouseX && (this.movex + this. widx)/2 >= mouseX && (this.movey < mouseY && this.movey + this.widy)/2 >= mouseY){
      this.bck = color(50);
    } else this.bck = color(255);
  }
  this.napolju = function(){
    if(mouseIsPressed && this.movex < mouseX && this.movex + this. widx >= mouseX && this.movey < mouseY && this.movey + this.widy >= mouseY){
      return true;
    } else {
      return false;
    }
  };
  this.spremeni = function(){
    if(this.napolju()){q 
      this.movex = mouseX;
      this.movey = mouseY;
    }
  };
  this.prikazi = function(){
    fill(this.bck);
    rectMode(CENTER);
    rect(this.movex,this.movey,this.widx,this.widy);
  };

}
function fizol(barva){
  this.barva = barva;
}
