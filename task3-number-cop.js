
const numbers = [ -6, 6 ];

function sortMakr(sort){

const [a,b]=sort;
// let a = sort[0]
// let b = sort[1]

if (a<0 || b<0 ){

    return "ivalid input ";
}
else if ( a=== b){

    return "equal";
}

else if (a>b){

    return [a , b];
}
else if (b>a){
    return [b , a] ;
}

}


console.log( sortMakr (numbers));
