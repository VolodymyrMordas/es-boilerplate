export function DataManager(){
    let entityCollection = [];

    return {
        add(opt) {
            if (!this.isUnique(opt.id, entityCollection))
                throw new Error('not unique');

            entityCollection.push(opt);
        },

        getEntityById(idx) {
            let result = entityCollection.filter((item) => {
                return item.id === idx;
            });

            return result.length ? result : null;
        },

        getEntities() {
            return entityCollection
        },

        getCount(){
            return entityCollection.length
        },

        getFirstEntity() {
            const [firstEntity] = entityCollection;
            return firstEntity;
        },

        getLastEntity () {
            return entityCollection.length ? entityCollection[entityCollection.length - 1] : null;
        },

        isUnique(id, all) {
            return all.filter((itm) => itm.id === id).length === 0;
        },

        filter(fn) {
            return entityCollection.filter(fn)
        }
    }
}
