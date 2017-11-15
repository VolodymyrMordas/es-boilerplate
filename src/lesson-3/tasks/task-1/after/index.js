export default (cyclesNumber = 10, timeout = 1000, callback = val => val) => {

    if (typeof cyclesNumber !== 'number') {
        throw new Error('not number');
    }

    if (typeof timeout !== 'number') {
        throw new Error('not number');
    }

    if (typeof callback !== 'function') {
        throw new Error('not function');
    }

    for (let i = 0; i < cyclesNumber; i++) {
        (() => {
            setTimeout(() => {
                console.log(callback(i));
            }, i * timeout);
        })();
    }
}
