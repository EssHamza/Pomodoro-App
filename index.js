const minDecElement = document.getElementById("minDec");
const minUniElement = document.getElementById("minUni");
const secDecElement = document.getElementById("secDec");
const secUniElement = document.getElementById("secUni");
const startButtonElement = document.querySelector(".start-button"); 
const numberElements = document.querySelectorAll(".number");

class Pomodoro {

    constructor(){
        this.currentTime = 1500; 
        this.intervalId = null;
    }

    start(){
        this.intervalId = setInterval(() => {
            this.currentTime -= 1;
            if (this.currentTime < 0) {
                this.stop(); 
                return;
            }
            this.updateDisplay();
        }, 1000);
    }

    stop() {
        clearInterval(this.intervalId);
    }

    updateDisplay() {
        secUniElement.textContent = (this.currentTime % 10).toString();
        secDecElement.textContent = Math.floor((this.currentTime / 10) % 6).toString();
        minUniElement.textContent = Math.floor((this.currentTime / 60) % 10).toString();
        minDecElement.textContent = Math.floor((this.currentTime / 600) % 10).toString();
    }
}

const pomodoro = new Pomodoro();

startButtonElement.addEventListener('click', () => {
    pomodoro.start();
    startButtonElement.className = "stop-button";
    
});


const stopButtonElement = document.querySelector(".stop-button");
stopButtonElement.addEventListener('click', () => {
    pomodoro.stop();
});


//secUniElement.textContent = (this.currentTime % 10).toString();
//secDecElement.textContent = Math.floor((this.currentTime / 10) % 6).toString();
//minUniElement.textContent = Math.floor((this.currentTime / 60) % 10).toString();
//minDecElement.textContent = Math.floor((this.currentTime / 600) % 10).toString();
 


//secUniElement.textContent = (this.currentTime % 10).toString();
//secDecElement.textContent = Math.floor((this.currentTime / 10) % 6).toString();
//minUniElement.textContent = Math.floor((this.currentTime / 60) % 10).toString();
//minDecElement.textContent = Math.floor((this.currentTime / 600) % 10).toString();



