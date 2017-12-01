export default class Timer {

    constructor(startTime = 0, callback) {
        if (typeof startTime !== 'number') {
            throw Error('wrong value of init param. it should be number');
        }

        this.minutes = Math.floor(startTime / 60);
        this.seconds = Math.floor(startTime % 60);

        callback()
    }

    getTime() {
        return {
            minutes : this.minutes,
            seconds : this.seconds
        }
    };

    start(speed = 1, callback) {

        if (typeof speed !== 'number') {
            throw Error('wrong value of init param. it should be number');
        }

        this.speed = speed;

        this.interval = setInterval(
            function(){
                this.seconds++;
                callback(this.getTime());
            }.bind(this),
            1000 / this.speed);
    };

    pause(callback) {
        if (this.interval === undefined) {
            throw Error('you should start Timer first');
        }

        clearInterval(this.interval);

        callback(this.getTime())
    }

    stop(callback) {
        if (this.interval === undefined) {
            throw Error('you should start Timer first');
        }
        clearInterval(this.interval);
        callback(this.getTime())
    }

}
