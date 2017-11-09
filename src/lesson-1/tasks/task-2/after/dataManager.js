let entityCollection = [];

export function addEntity(opt) {
    entityCollection.push(opt);
}

export function getEntities() {
    return entityCollection;
}

export function getCount(){
    return entityCollection.length;
}

export function getEntityById(idx){
    return entityCollection.filter((item)=>{
        return item.id === idx;
    })[0];
}

export function getFirstEntity(){
    return entityCollection[0];
}

export function getLastEntity(){
    return entityCollection[entityCollection.length-1];
}
