
function matchFinder(word ,target){

if( typeof word !== "string" || typeof target !== 'string'){

    return "its not a string ,please provide string "

}
let find = word.includes(target);

return find;



}

console.log( matchFinder("John Dew","ohn"))
console.log(matchFinder("JavaScript","code"))
console.log( matchFinder("Peter Perker","pen"))
console.log( matchFinder("Peter Perker","pet"))