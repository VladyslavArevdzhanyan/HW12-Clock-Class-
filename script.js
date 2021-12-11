class Clock {
    constructor (clock) {
        this.clock = clock;
    }

    render() {
        this.time = new Date();
        this.hours = (this.time.getHours() < 10) ? '0' + this.time.getHours() : this.time.getHours();
        this.minutes = (this.time.getMinutes() < 10) ? '0' + this.time.getMinutes() : this.time.getMinutes();
        this.seconds = (this.time.getSeconds() < 10) ? '0' + this.time.getSeconds() : this.time.getSeconds(); 
        this.clock.innerHTML = `${this.hours}:${this.minutes}` + `<span>:${this.seconds}</span>`;
    }

    clickClock() {
        let block = document.getElementById('clockBlock');
        block.addEventListener('click', function (event) { 
            let target = event.target; 
            if (target === block) {
                function toggleSec(element) {
                    element.classList.toggle('remove')
                }
                return toggleSec(block);
            }
        })
    }
}

let time = document.getElementById('clockBlock');

let clocks = new Clock(time);
clocks.render();
clocks.clickClock();

setInterval(() => {clocks.render()}, 250);