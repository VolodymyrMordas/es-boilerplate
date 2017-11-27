const Entity = function(object){
    const {firstName, lastName, age, sex} = object;
    return {
        getEntity(){
            return {
                firstName, lastName, age, sex
            }
        }
    }
};

export default Entity;
