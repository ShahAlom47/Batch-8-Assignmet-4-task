function cubeNumber(number) {

    if (typeof number !== "number") {

        return "please provide number"
    }
    else if (number<0){

        return 'its nagative number .please provide posetive  number  '
    }

    let cubeIs = Math.pow(number, 3);

    return cubeIs;

}

console.log(cubeNumber(7))
console.log(cubeNumber(4))
console.log(cubeNumber(9))