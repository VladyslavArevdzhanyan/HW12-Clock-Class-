class Clock {
    constructor (clock) {
        this.clock = clock;
        this.clock.addEventListener('click', () => this.clock.classList.toggle('isFull'));
    }

    render() {
        this.clock.innerHTML = this.getTime();
    }

    getTime() {
        let isFullTime = this.clock.classList.contains('isFull');
        const time = new Date();
        const hours = (time.getHours() < 10) ? '0' + time.getHours() : time.getHours();
        const minutes = (time.getMinutes() < 10) ? '0' + time.getMinutes() : time.getMinutes();
        const seconds = (time.getSeconds() < 10) ? '0' + time.getSeconds() : time.getSeconds();
        
        if(isFullTime) {
            return `${hours}:${minutes}:${seconds}`
        } else {
            return `${hours}:${minutes}`;
        }
    }
}

let time = document.getElementById('clockBlock');
let clocks = new Clock(time);
setInterval(() => clocks.render(), 250);