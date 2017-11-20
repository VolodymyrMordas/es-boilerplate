export default (object) => {
    const {id, firstName, lastName, age, sex} = object;
    if(typeof id !== 'number'){
        throw new Error('id should be number')
    }

    if(typeof firstName !== 'string'){
        throw new Error('firstName should be string')
    }

    if(typeof lastName !== 'string'){
        throw new Error('lastName should be string')
    }

    if(typeof age !== 'number'){
        throw new Error('age should be number')
    }

    if(sex !== 'male' && sex !== 'female'){
        throw new Error('sex should male/female')
    }
}
