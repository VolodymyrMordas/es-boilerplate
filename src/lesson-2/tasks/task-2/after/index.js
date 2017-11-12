export function tag(literals, ...substitutions){
    let result = '';

    for (let i = 0; i < substitutions.length; i++) {
        result += literals[i];
        result += substitutions[i].amount + ', and it will be paid in ' + substitutions[i].currency + '!';
    }
    return result;
}
