export function Entity(opt) {
    let {id, firstName, surName, lastName, sex} = opt;

    this.say = function () {
        console.log(id, firstName, surName, lastName, sex);
    }
}

export const talk = {
    sayAge() {
        const sayAgeTmp
            = `I'm ${this.age} years old.`;

        console.log(sayAgeTmp);
        return sayAgeTmp;
    }
};

export const age = {
    fixAge(age) {
        this.age = age;
    }
};
