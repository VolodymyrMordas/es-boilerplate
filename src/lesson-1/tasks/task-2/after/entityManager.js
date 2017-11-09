export default class Entity {

    object;


    constructor(opt) {
        this.object = opt
    }

    getEntity(){
        console.log("ADD ENTITY::");
        console.log(this.object);
        return this.object

    }
}

