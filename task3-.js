let houseD ={

    street: 10,
    house : "15A",
    socity : "erth",
}

// console.log(Object.values(houseD));
function findAddress(addrss){
    let str = addrss.street  || "__";
    let hou = addrss.house ||"__";
    let soc = addrss.socity ||"__";

    let rslt =  str + "," + hou+ "," + soc;
    return rslt;


}

let result = findAddress(houseD);
console.log(result);