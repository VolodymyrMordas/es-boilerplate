export default function func(ciclesNumber, timeout, callback){
    for (let i = 0; i < ciclesNumber; i++) {
        setTimeout(() => {
            console.log(callback(i));
        }, timeout * i);
    }
}
