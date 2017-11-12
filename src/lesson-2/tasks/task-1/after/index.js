export function findString(text, pattern){
    // return text.split(pattern.source).length - 1;
    let count = 0;
    for(let i = 0; i < text.length; i++){
        pattern.lastIndex = i;
        if(pattern.exec(text)) {
            i = pattern.lastIndex;//
            count++;
            // console.log(match);
            // console.log("index:" + match.index + "|lastIndex:" + pattern.lastIndex);
        }
    }

    return count;
}
