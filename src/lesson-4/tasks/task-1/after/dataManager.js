let entityCollection = [];

const addEntity = (opt) => {
    if(! isUnique(opt.id, entityCollection))
        throw new Error('not unique');

    entityCollection.push(opt);
};

const getEntityById = (idx) => {
    let result = entityCollection.filter((item)=>{
        return item.id === idx;
    });

    return result.length ? result : null;
};

const getEntities = () => entityCollection;

const getCount = () => entityCollection.length;

const getFirstEntity = () => {
    const [firstEntity] = entityCollection;
    return firstEntity;
};

const getLastEntity = () => entityCollection.length ? entityCollection[entityCollection.length-1] : null;

const isUnique = (id, all) => all.filter((itm) => itm.id === id).length === 0;

const filter = (fn) => entityCollection.filter(fn);

export {addEntity, getEntities, getCount, getEntityById, getFirstEntity, getLastEntity, filter}
