let box1 = [];
let box2 = [];
let box01 = [];
let box02 = [];
let polje = [[],[]];
//***************************************************************
function setup(){
  createCanvas(640,480);
  background(0);
  start();
  $("#gumb").click(function(){
    razvrsti()});
  $("#razvrsti").click(function(){
    mix();
  $("#onfield").click(function(){
    onfield();
  });
  $("#tobox").click(function(){
    tobox();
  })

  })
}
//**********************************************************************
function draw(){

  display();
}

//**********************************************************
function Fizol(color){
  this.color = color;
}

function start(){
  const wh = prompt("koliko belih");
  const bl = prompt("koliko crnih");
  for(let i = 0; i < wh; i++){
    let f = new Fizol("white");
    box1.push(f);
    console.log(box1[i].color);
  }
  for(let i = 0; i < bl; i++){
    let b = new Fizol("black");
    box2.push(b);
    console.log(box2[i].color);
  }
}

function razvrsti(){
  for(let i = 0; i < (box1.length)/2; i++){
    box01.push(box1[2*i]);
    box02.push(box1[2*i+1]);
    }
box1.splice(0,box1.length);

  for(let i = 0; i < (box2.length)/2; i++){
  box01.push(box2[2*i]);
  box02.push(box2[2*i+1]);
}
box2.splice(0,box2.length);
  console.log("box01");
  box01.forEach(function(current){
    console.log(current.color);
  });
  console.log("box02");
  box02.forEach(function(currentb){
    console.log(currentb.color);
  });
}

function mix(){
  function shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
          let j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
      }
  }

  shuffleArray(box01);
  shuffleArray(box02);
  console.log("zacetek");
  box01.forEach(function(cur){
    console.log(cur.color);
  });
}

function onfield(){
  polje[0] = box01;
  polje[1] = box02;
  box01 = [];
  box02 = [];
//ne pozabit pri tobox spicat box01 in box02
}

function tobox(){
  for(let i = 0; i < polje[0].length; i++){
  box01.push(polje[0][2*i]);
  box02.push(polje[0][2*i+1]);
  }
  polje[0] = [];
  for(let i = 0; i <= polje[1].length; i++){
  box01.push(polje[1][i*2]);
  box02.push(polje[1][i*2+1]);

  }
  console.log("tobox deluje");
}

function display(){
  function nic(){
    let x = width/3;
    let y = 10;
  for(let i = 0; i < polje[0].length; i++){
    if(polje[0][i].color == "white"){
      fill(255);
      ellipse(x,y, 30,20);
    }
    if(polje[1][i].color == "black"){
      fill(0,0,125);
      ellipse(x,y, 30,20);
    }
    y = y + 30;
  }
  console.log("funkcija nic klicana");
}
  function ena(){
    let x = width/3*2;
    let y = 10;
  for(let i = 0; i < polje[1].length; i++){

  if(polje[0][i].color == "white"){
    fill(255);
    ellipse(x,y, 30,20);
  }
  if(polje[1][i].color == "black"){
    fill(0,0,125);
    ellipse(x,y, 30,20);
  }
  y = y + 30;
}
}
  console.log("funkcija ena klicana");
}
