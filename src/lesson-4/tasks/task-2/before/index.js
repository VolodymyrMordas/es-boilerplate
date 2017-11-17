import Timer from '../after';

const timer = Timer();

timer.init(0, () => {
    console.log('Timer is configured.');
});

timer.start(1, time => {
    const {minutes, seconds} = time;
    const template = `Minutes: ${ minutes } Seconds: ${ seconds }`;

    console.log(template);
});

setTimeout(() => {
    timer.pause(time => {
        const {minutes, seconds} = time;
        const template = `Last time was Minutes: ${ minutes } Seconds: ${ seconds }`;

        console.log('Timer is frozen');
        console.log(template);
    });
    timer.start(2, time => {
        const {minutes, seconds} = time;
        const template = `Minutes: ${ minutes } Seconds: ${ seconds }`;

        console.log(template);
    });
    setTimeout(() => {
        timer.stop(time => {
            const {minutes, seconds} = time;
            const template = `Last time was Minutes: ${ minutes } Seconds: ${ seconds }`;

            console.log('Timer is stopped');
            console.log(template);
        });
    }, 3000);
}, 3000);

