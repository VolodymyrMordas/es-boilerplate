'use strict';

const Timer = function() {
    let time;
    let interval;
    return {
        init : (a = 0, callback) => {
            if(typeof a !== 'number'){
                throw Error('wrong value of init param. it should be number');
            }
            time = {
                minutes : a / 60,
                seconds : a % 60
            };

            callback()
        },

        start : (a = 1, callback) => {
            if(typeof a !== 'number'){
                throw Error('wrong value of init param. it should be number');
            }
            interval = setInterval(() => {
                time.seconds++;
                callback(time);
            }, 1000 / a);
        },

        pause : (callback) => {
            if(interval === undefined){
                throw Error('you should start Timer first');
            }
            clearInterval(interval);
            callback(time)
        },
        stop :  (callback) => {
            if(interval === undefined){
                throw Error('you should start Timer first');
            }
            clearInterval(interval);
            callback(time)
        },
    }
};

export default Timer;
