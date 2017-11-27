const map = new Map();

const DataManager = function(){};

DataManager.prototype.add = function(entity) {
    map.set(map.size, entity);
};
DataManager.prototype.getEntities = function() {
    return map.values();
};
DataManager.prototype.getCount = function() {
    return map.size;
};
DataManager.prototype.getEntityById = function(id) {
    return map.has(id) ? map.get(id) : null;
};
DataManager.prototype.getFirstEntity = function() {
    return map.size === 0 ? null : [...map.values()][0];
};
DataManager.prototype.getLastEntity = function(){
    return map.size === 0 ? null : [...map.values()][map.size - 1];
};
DataManager.prototype.filter = function(callback){
    return [...map.values()].filter((value) => callback(value));
};


export {DataManager};
