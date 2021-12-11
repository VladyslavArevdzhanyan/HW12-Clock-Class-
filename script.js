class Clock {
    constructor (clock) {
        this.clock = clock;
    }

    render() {
        setInterval(() => {
            let time = new Date();
            let hours = (time.getHours() < 10) ? '0' + time.getHours() : time.getHours();
            let minutes = (time.getMinutes() < 10) ? '0' + time.getMinutes() : time.getMinutes();
            let seconds = (time.getSeconds() < 10) ? '0' + time.getSeconds() : time.getSeconds(); 
            document.getElementById('clockBlock').innerHTML = `${hours}:${minutes}` + `<span>:${seconds}</span>`;
        }, 250);
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

let clocks = new Clock();
clocks.render();
clocks.clickClock();
