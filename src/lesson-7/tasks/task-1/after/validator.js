export default function (object) {
    const {firstName, lastName, age, sex} = object;

    if(typeof firstName !== 'string'){
        throw new Error('firstName should be string')
    }

    if(typeof lastName !== 'string'){
        throw new Error('lastName should be string')
    }

    if(typeof age !== 'number' || age <= 0){
        throw new Error('age should be number greater than 0')
    }

    if(sex !== 'male' && sex !== 'female'){
        throw new Error('sex should male/female')
    }
};
