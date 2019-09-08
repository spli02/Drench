document.addEventListener('DOMContentLoaded', () => {
    const boardGame = document.querySelector('.board-game');
    const game = new Game();
    game.mount(boardGame);

    //reset button function
    const resetBtn = document.querySelector('.reset');
    resetBtn.addEventListener('click',() => game.resetBtn());

    //circle button function
    const circleAll = document.querySelectorAll(".circle");
    for(let i=0; i < circleAll.length; i++){
      circleAll[i].addEventListener('click',  () => game.circleBtn());
    };

    //color button function
    const greenBtn = document.querySelector(".green");
    greenBtn.addEventListener('click',  () => game.greenChange());

    const pinkBtn = document.querySelector(".pink");
    pinkBtn.addEventListener('click',  () => game.pinkChange());

    const purpleBtn = document.querySelector(".purple");
    purpleBtn.addEventListener('click',  () => game.purpleChange());

    const lightGreenBtn = document.querySelector(".lightGreen");
    lightGreenBtn.addEventListener('click',  () => game.lightGreenChange());

    const redBtn = document.querySelector(".red");
    redBtn.addEventListener('click',  () => game.redChange());

    const orangeBtn = document.querySelector(".orange");
    orangeBtn.addEventListener('click',  () => game.orangeChange());

});

// ***********************************************************

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
            document.querySelector(".game-over").style.display="block";
        }else if(this.countNum < 0){
            this.count.innerHTML = 0;
        } 
        return this.countNum;
    };

    addColor () {
        let random = Math.floor(Math.random()*6)+1;
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
        }else if (random === 6){
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

    circleBtn(){
        this.countDown();
        this.scoreCount();
    };

    resetBtn(){
        this.gameOver = document.querySelector(".game-over");
        this.gameOver.style.display = "none";

        this.countReset();
        this.scoreCount();
        this.addColor();
    };

    addId(){
        for(this.x; this.x <= this.square ; this.x++) {
            for(this.y; this.y <= this.square ; this.y++) {
                this.element.className = [this.x,this.y,'color'];
            }
        }
        return this.x;
    };


    mount(parent) {
        for(let i=0;i< this.square * this.square;i++) {
            parent.appendChild(this.render());
            this.addColor();
            this.addId();
        };
    };
};