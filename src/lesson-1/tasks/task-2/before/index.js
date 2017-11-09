import {
    addEntity as add,
    getEntities,
    getCount,
    getEntityById,
    getFirstEntity,
    getLastEntity
} from '../after/dataManager';

import Entity from '../after/entityManager';

// Create instance for man
const man = new Entity({
    id: 0,
    firstName: 'Tomas',
    lastName: 'Anderson',
    age: 32,
    sex: 'male'
});

// Create instance for woman
const woman = new Entity({
    id: 1,
    firstName: 'Lisa',
    lastName: 'Black',
    age: 18,
    sex: 'female'
});

// Get data for man
const firstEntity = man.getEntity();

// Get data for woman
const secondEntity = woman.getEntity();

// Add man to collection
add(firstEntity);

// Add woman to collection
add(secondEntity);

// Get all entities
const all = getEntities();

// Print entities count
const count = getCount();
console.log("// Print entities count");
console.log(count);

// Get entity by entity.id
const entityById = getEntityById(1);
console.log("// Get entity by entity.id");
console.log(entityById);

// Get first entity
const first = getFirstEntity();
console.log("// Get first entity");
console.log(first);

// Get last entity
const last = getLastEntity();
console.log("// Get last entity");
console.log(last);

// Print all entities
console.log("// Print all entities");
console.log(all);

const filtered = filter(function (item) {
    return item.age > 20 && item.sex === 'male'
});
console.log("// Print filtered values");
console.log(filtered);

function filter(fn){
    return getEntities().filter(fn);
    // let items = getEntities();
    // let result = [];
    // for(let i = 0; i < items.length; i++){
    //     if(fn(items[i])){
    //         result.push(items[i]);
    //     }
    // }

    // return result;
}
