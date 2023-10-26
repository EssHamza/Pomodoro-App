
const minDecElement = document.getElementById("minDec");
const minUniElement = document.getElementById("minUni");
const secDecElement = document.getElementById("secDec");
const secUniElement = document.getElementById("secUni");
const startButtonElement = document.querySelector(".start-button");

class Pomodoro {
    constructor() {
        this.currentTime = 1500;
        this.intervalId = null;
    }

    start() {
        this.intervalId = setInterval(() => {
            this.currentTime--;
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

    resetPomodoro() {
        this.currentTime = 1500;
        this.updateDisplay();
    }

    resetShortBreak() {
        this.currentTime = 300; 
        this.updateDisplay();
    }

    updateDisplay() {
        secUniElement.textContent = (this.currentTime % 10).toString();
        secDecElement.textContent = Math.floor((this.currentTime / 10) % 6).toString();
        minUniElement.textContent = Math.floor((this.currentTime / 60) % 10).toString();
        minDecElement.textContent = Math.floor((this.currentTime / 600) % 10).toString();
    }
}

const pomodoro = new Pomodoro();

function toggleTimer() {
    if (startButtonElement.classList.contains("start-button")) {
        pomodoro.start();
        startButtonElement.className = "stop-button";
        startButtonElement.innerHTML = "STOP";
    } else {
        pomodoro.stop();
        startButtonElement.className = "start-button";
        startButtonElement.innerHTML = "START";
    }

    localStorage.setItem('pomodoroState', pomodoro.currentTime);
}



if (window.location.href.includes('shortBreak.html')) {
    pomodoro.resetShortBreak();
}


//secUniElement.textContent = (this.currentTime % 10).toString();
//secDecElement.textContent = Math.floor((this.currentTime / 10) % 6).toString();
//minUniElement.textContent = Math.floor((this.currentTime / 60) % 10).toString();
//minDecElement.textContent = Math.floor((this.currentTime / 600) % 10).toString();
 


//secUniElement.textContent = (this.currentTime % 10).toString();
//secDecElement.textContent = Math.floor((this.currentTime / 10) % 6).toString();
//minUniElement.textContent = Math.floor((this.currentTime / 60) % 10).toString();
//minDecElement.textContent = Math.floor((this.currentTime / 600) % 10).toString();



//secUniElement.textContent = (this.currentTime % 10).toString();
//secDecElement.textContent = Math.floor((this.currentTime / 10) % 6).toString();
//minUniElement.textContent = Math.floor((this.currentTime / 60) % 10).toString();
//minDecElement.textContent = Math.floor((this.currentTime / 600) % 10).toString();
 


//secUniElement.textContent = (this.currentTime % 10).toString();
//secDecElement.textContent = Math.floor((this.currentTime / 10) % 6).toString();
//minUniElement.textContent = Math.floor((this.currentTime / 60) % 10).toString();
//minDecElement.textContent = Math.floor((this.currentTime / 600) % 10).toString();


//secUniElement.textContent = (this.currentTime % 10).toString();
//secDecElement.textContent = Math.floor((this.currentTime / 10) % 6).toString();
//minUniElement.textContent = Math.floor((this.currentTime / 60) % 10).toString();
//minDecElement.textContent = Math.floor((this.currentTime / 600) % 10).toString();
 


//secUniElement.textContent = (this.currentTime % 10).toString();
//secDecElement.textContent = Math.floor((this.currentTime / 10) % 6).toString();
//minUniElement.textContent = Math.floor((this.currentTime / 60) % 10).toString();
//minDecElement.textContent = Math.floor((this.currentTime / 600) % 10).toString();



//secUniElement.textContent = (this.currentTime % 10).toString();
//secDecElement.textContent = Math.floor((this.currentTime / 10) % 6).toString();
//minUniElement.textContent = Math.floor((this.currentTime / 60) % 10).toString();
//minDecElement.textContent = Math.floor((this.currentTime / 600) % 10).toString();
 


//secUniElement.textContent = (this.currentTime % 10).toString();
//secDecElement.textContent = Math.floor((this.currentTime / 10) % 6).toString();
//minUniElement.textContent = Math.floor((this.currentTime / 60) % 10).toString();
//minDecElement.textContent = Math.floor((this.currentTime / 600) % 10).toString();



//secUniElement.textContent = (this.currentTime % 10).toString();
//secDecElement.textContent = Math.floor((this.currentTime / 10) % 6).toString();
//minUniElement.textContent = Math.floor((this.currentTime / 60) % 10).toString();
//minDecElement.textContent = Math.floor((this.currentTime / 600) % 10).toString();
 


//secUniElement.textContent = (this.currentTime % 10).toString();
//secDecElement.textContent = Math.floor((this.currentTime / 10) % 6).toString();
//minUniElement.textContent = Math.floor((this.currentTime / 60) % 10).toString();
//minDecElement.textContent = Math.floor((this.currentTime / 600) % 10).toString();




//secUniElement.textContent = (this.currentTime % 10).toString();
//secDecElement.textContent = Math.floor((this.currentTime / 10) % 6).toString();
//minUniElement.textContent = Math.floor((this.currentTime / 60) % 10).toString();
//minDecElement.textContent = Math.floor((this.currentTime / 600) % 10).toString();
 


//secUniElement.textContent = (this.currentTime % 10).toString();
//secDecElement.textContent = Math.floor((this.currentTime / 10) % 6).toString();
//minUniElement.textContent = Math.floor((this.currentTime / 60) % 10).toString();
//minDecElement.textContent = Math.floor((this.currentTime / 600) % 10).toString();




//secUniElement.textContent = (this.currentTime % 10).toString();
//secDecElement.textContent = Math.floor((this.currentTime / 10) % 6).toString();
//minUniElement.textContent = Math.floor((this.currentTime / 60) % 10).toString();
//minDecElement.textContent = Math.floor((this.currentTime / 600) % 10).toString();
 


//secUniElement.textContent = (this.currentTime % 10).toString();
//secDecElement.textContent = Math.floor((this.currentTime / 10) % 6).toString();
//minUniElement.textContent = Math.floor((this.currentTime / 60) % 10).toString();
//minDecElement.textContent = Math.floor((this.currentTime / 600) % 10).toString();




//secUniElement.textContent = (this.currentTime % 10).toString();
//secDecElement.textContent = Math.floor((this.currentTime / 10) % 6).toString();
//minUniElement.textContent = Math.floor((this.currentTime / 60) % 10).toString();
//minDecElement.textContent = Math.floor((this.currentTime / 600) % 10).toString();
 


//secUniElement.textContent = (this.currentTime % 10).toString();
//secDecElement.textContent = Math.floor((this.currentTime / 10) % 6).toString();
//minUniElement.textContent = Math.floor((this.currentTime / 60) % 10).toString();
//minDecElement.textContent = Math.floor((this.currentTime / 600) % 10).toString();



//secUniElement.textContent = (this.currentTime % 10).toString();
//secDecElement.textContent = Math.floor((this.currentTime / 10) % 6).toString();
//minUniElement.textContent = Math.floor((this.currentTime / 60) % 10).toString();
//minDecElement.textContent = Math.floor((this.currentTime / 600) % 10).toString();






//secUniElement.textContent = (this.currentTime % 10).toString();
//secDecElement.textContent = Math.floor((this.currentTime / 10) % 6).toString();
//minUniElement.textContent = Math.floor((this.currentTime / 60) % 10).toString();
//minDecElement.textContent = Math.floor((this.currentTime / 600) % 10).toString();
 


//secUniElement.textContent = (this.currentTime % 10).toString();
//secDecElement.textContent = Math.floor((this.currentTime / 10) % 6).toString();
//minUniElement.textContent = Math.floor((this.currentTime / 60) % 10).toString();
//minDecElement.textContent = Math.floor((this.currentTime / 600) % 10).toString();




//secUniElement.textContent = (this.currentTime % 10).toString();
//secDecElement.textContent = Math.floor((this.currentTime / 10) % 6).toString();
//minUniElement.textContent = Math.floor((this.currentTime / 60) % 10).toString();
//minDecElement.textContent = Math.floor((this.currentTime / 600) % 10).toString();
 


//secUniElement.textContent = (this.currentTime % 10).toString();
//secDecElement.textContent = Math.floor((this.currentTime / 10) % 6).toString();
//minUniElement.textContent = Math.floor((this.currentTime / 60) % 10).toString();
//minDecElement.textContent = Math.floor((this.currentTime / 600) % 10).toString();



//secUniElement.textContent = (this.currentTime % 10).toString();
//secDecElement.textContent = Math.floor((this.currentTime / 10) % 6).toString();
//minUniElement.textContent = Math.floor((this.currentTime / 60) % 10).toString();
//minDecElement.textContent = Math.floor((this.currentTime / 600) % 10).toString();
 


//secUniElement.textContent = (this.currentTime % 10).toString();
//secDecElement.textContent = Math.floor((this.currentTime / 10) % 6).toString();
//minUniElement.textContent = Math.floor((this.currentTime / 60) % 10).toString();
//minDecElement.textContent = Math.floor((this.currentTime / 600) % 10).toString();
//secUniElement.textContent = (this.currentTime % 10).toString();
//secDecElement.textContent = Math.floor((this.currentTime / 10) % 6).toString();
//minUniElement.textContent = Math.floor((this.currentTime / 60) % 10).toString();
//minDecElement.textContent = Math.floor((this.currentTime / 600) % 10).toString();
 


//secUniElement.textContent = (this.currentTime % 10).toString();
//secDecElement.textContent = Math.floor((this.currentTime / 10) % 6).toString();
//minUniElement.textContent = Math.floor((this.currentTime / 60) % 10).toString();
//minDecElement.textContent = Math.floor((this.currentTime / 600) % 10).toString();//secUniElement.textContent = (this.currentTime % 10).toString();
//secDecElement.textContent = Math.floor((this.currentTime / 10) % 6).toString();
//minUniElement.textContent = Math.floor((this.currentTime / 60) % 10).toString();
//minDecElement.textContent = Math.floor((this.currentTime / 600) % 10).toString();
 


//secUniElement.textContent = (this.currentTime % 10).toString();
//secDecElement.textContent = Math.floor((this.currentTime / 10) % 6).toString();
//minUniElement.textContent = Math.floor((this.currentTime / 60) % 10).toString();
//minDecElement.textContent = Math.floor((this.currentTime / 600) % 10).toString();//secUniElement.textContent = (this.currentTime % 10).toString();
//secDecElement.textContent = Math.floor((this.currentTime / 10) % 6).toString();
//minUniElement.textContent = Math.floor((this.currentTime / 60) % 10).toString();
//minDecElement.textContent = Math.floor((this.currentTime / 600) % 10).toString();
 


//secUniElement.textContent = (this.currentTime % 10).toString();
//secDecElement.textContent = Math.floor((this.currentTime / 10) % 6).toString();
//minUniElement.textContent = Math.floor((this.currentTime / 60) % 10).toString();
//minDecElement.textContent = Math.floor((this.currentTime / 600) % 10).toString();//secUniElement.textContent = (this.currentTime % 10).toString();
//secDecElement.textContent = Math.floor((this.currentTime / 10) % 6).toString();
//minUniElement.textContent = Math.floor((this.currentTime / 60) % 10).toString();
//minDecElement.textContent = Math.floor((this.currentTime / 600) % 10).toString();
 


//secUniElement.textContent = (this.currentTime % 10).toString();
//secDecElement.textContent = Math.floor((this.currentTime / 10) % 6).toString();
//minUniElement.textContent = Math.floor((this.currentTime / 60) % 10).toString();
//minDecElement.textContent = Math.floor((this.currentTime / 600) % 10).toString();//secUniElement.textContent = (this.currentTime % 10).toString();
//secDecElement.textContent = Math.floor((this.currentTime / 10) % 6).toString();
//minUniElement.textContent = Math.floor((this.currentTime / 60) % 10).toString();
//minDecElement.textContent = Math.floor((this.currentTime / 600) % 10).toString();
 


//secUniElement.textContent = (this.currentTime % 10).toString();
//secDecElement.textContent = Math.floor((this.currentTime / 10) % 6).toString();
//minUniElement.textContent = Math.floor((this.currentTime / 60) % 10).toString();
//minDecElement.textContent = Math.floor((this.currentTime / 600) % 10).toString();//secUniElement.textContent = (this.currentTime % 10).toString();
//secDecElement.textContent = Math.floor((this.currentTime / 10) % 6).toString();
//minUniElement.textContent = Math.floor((this.currentTime / 60) % 10).toString();
//minDecElement.textContent = Math.floor((this.currentTime / 600) % 10).toString();
 


//secUniElement.textContent = (this.currentTime % 10).toString();
//secDecElement.textContent = Math.floor((this.currentTime / 10) % 6).toString();
//minUniElement.textContent = Math.floor((this.currentTime / 60) % 10).toString();
//minDecElement.textContent = Math.floor((this.currentTime / 600) % 10).toString();


