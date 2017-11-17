'use strict';

export function getInfo(data) {
    if(typeof data !== 'object'){
        throw new Error('wrong type of input date. it should be object')
    }

    const {arr0, arr1, arr2} = data;

    return ((arr0, arr1 = [], arr2 = []) => {
        const arr = [...arr0, ...arr1, ...arr2];

        return {
            length: arr.length,
            max : arr.reduce((a1, a2) => Math.max(a1, a2)),
            min : arr.reduce((a1, a2) => Math.min(a1, a2)),
        }
    })(arr0, arr1, arr2);
}
