export default (object) => {
    const {id, firstName, lastName, age, sex, social} = object;
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

    if(!Array.isArray(social)){
        throw new Error('social isn\'t array');
    }

    social.forEach(({id, title, views}) => {
        if(typeof id !== 'number')
            throw new Error('social id isn\'t number');

        if(title !== 'facebook' && title !== 'youtube' && title !== 'twitter')
            throw new Error('social name isn\'t valid value.[' + title + ']');


        if(typeof views !== 'number')
            throw new Error('views value isn\'t number');

    });
}
