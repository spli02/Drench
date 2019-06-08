document.addEventListener('DOMContentLoaded', () => {
    const board_game = document.querySelector('.board-game');
    const game = new Game();
    game.mount(board_game);

    const reset2 = document.querySelector('.reset');
    reset2.addEventListener('click',() => game.reset_btn());

    const circleAll = document.querySelectorAll(".circle");
    for(var i=0,len=circleAll.length; i<len; i++){
      circleAll[i].addEventListener('click',  () => game.circle_btn());
    };

    const green = document.querySelector("#green");
    green.addEventListener('click',  () => game.greenChange());

    const pink = document.querySelector("#pink");
    pink.addEventListener('click',  () => game.pinkChange());

    const purple = document.querySelector("#purple");
    purple.addEventListener('click',  () => game.purpleChange());

    const lightGreen = document.querySelector("#lightGreen");
    lightGreen.addEventListener('click',  () => game.lightGreenChange());

    const red = document.querySelector("#red");
    red.addEventListener('click',  () => game.redChange());

    const orange = document.querySelector("#orange");
    orange.addEventListener('click',  () => game.orangeChange());

});

// ***********************************************************

class Data{
    constructor() {
        for(let x = 1; x <= this.square ; x++) {
            for(let y = 1; y <= this.square ; y++) {
                this.datas = [
                new Game(x,y,'color'),
                ]
            }
        }
    }
};

// ***********************************************************

let random = 0;
let i = 0;

class Game {
    constructor(x,y,color) {
     this.x = 1;
     this.y = 1;
     this.color = color;
     this.datas=[];
     this.square = 14;
     this.countNum = 10;
    };

    render() {
        this.element = document.createElement('div');
        this.element.className = 'square';
        return this.element;
    };

    countReset(){
        this.countNum = 10;
    };

    countDown(){
        this.countNum --;
    };

    scoreCount(){
        this.count = document.querySelector(".count");
        this.count.innerHTML = this.countNum;
        if (this.countNum === 0){
            document.querySelector(".game_over").style.display="block";
        }else if(this.countNum < 0){
            this.count.innerHTML = 0;
        } 
        return this.countNum;
    };

    addColor () {
        random = Math.floor(Math.random()*5)+1;
        if (random === 1){
            this.element.style.backgroundColor = "green";
        }else if (random === 2){
            this.element.style.backgroundColor = "pink";
        }else if (random === 3){
            this.element.style.backgroundColor = "purple";
        }else if (random === 4){
            this.element.style.backgroundColor = "lightgreen";
        }else if (random === 5){
            this.element.style.backgroundColor = "red";
        }else{
            this.element.style.backgroundColor = "orange";   
        };
    };

    greenChange(){
        this.element.style.backgroundColor = "green";
    }

    pinkChange(){
        this.element.style.backgroundColor = "pink";
    }

    purpleChange(){
        this.element.style.backgroundColor = "purple";
    }

    lightGreenChange(){
        this.element.style.backgroundColor = "lightgreen";
    }

    redChange(){
        this.element.style.backgroundColor = "red";
    }

    orangeChange(){
        this.element.style.backgroundColor = "orange";
    }

    circle_btn(){
        this.countDown();
        this.scoreCount();
    };

    reset_btn(){
        this.gameOver = document.querySelector(".game_over");
        this.gameOver.style.display = "none";

        this.countReset();
        this.scoreCount();
        this.addColor();
    };

    addId(){
        for(this.x; this.x <= this.square ; this.x++) {
            for(this.y; this.y <= this.square ; this.y++) {
                this.element.id = [this.x,this.y,'color'];
            }
        }
    };


    mount(parent) {
        for(i=0;i< this.square * this.square;i++) {
            parent.appendChild(this.render());
            this.addColor();
            this.addId();
        };
    };
};