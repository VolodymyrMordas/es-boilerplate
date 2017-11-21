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

            return result.length ? result[0] : null;
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
        },

        getEntityTotalViews(entityId, socialIds, callback) {
            const socialArray = this.getEntityById(entityId).social;

            if(Array.isArray(socialIds)){
                return socialArray.filter(itm => socialIds.includes(itm.id) || socialIds.includes(itm.title))
                    .map((itm) => itm.views)
                        .reduce((p1, p2) => p1 + p2)
            }

            if(typeof callback === 'function'){
                return callback(socialArray
                    .map((itm) => itm.views)
                        .reduce((p1, p2) => p1 + p2))
            }

            return socialArray.map((itm) => itm.views).reduce((p1, p2) => p1 + p2);
        },

        getEntitiesSortedByPopularity() {
            return entityCollection.sort((p1, p2) => {
                const v1 =
                    this.getEntityTotalViews(p1.id);
                const v2 =
                    this.getEntityTotalViews(p2.id);

                return v1 > v2 ? -1 : v1 === v2 ? 0 : 1;
            })
        }
    }
}
