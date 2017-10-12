let box;
function setup(){
    createCanvas(1000,600);
    box = new skatla();

}


function draw(){
    background(0);
    box.display();
    if(box.naliku()){
    box.update();
    }
}

function skatla(){
    this.x = 50;
    this.y = 60;
    this.width = 70;
    this.display = function(){
        fill(255);
        rectMode(CENTER);
        rect(this.x,this.y,this.width,this.width);
    }
    this.naliku = function(){
        if(mouseIsPressed && mouseX > this.x-this.width/2 && mouseX < this.x + this.width/2 && mouseY > this.y-this.width/2 && mouseY < this.y + this.width/2){
            return true;
        }
    }
    this.update = function(){
        this.x = mouseX;
        this.y = mouseY;
    }
    
}