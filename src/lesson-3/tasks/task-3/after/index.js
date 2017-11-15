'use strict';
let sum = 0;
export default () => (b) => {
    if(typeof b !== 'number')
        throw new Error(`Argument ${b} should be number. current - ${typeof b}`);

    sum += b;
    console.log(sum);
};
