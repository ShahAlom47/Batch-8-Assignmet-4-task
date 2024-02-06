
const amountt = [1, 5, 1];
let chipsPrice = 10;

function canPay(mony, price) {
    let totalmony = 0;
    for (let taka of mony) {
       totalmony += taka;
    };

    if (mony.length <= 0) {
     return "pocket khali ,,, noo pblm muri khaw  "
    }
    else if (totalmony > price) {
        return true;
    }
    else {
        return false;
    }
}


console.log(canPay(amountt, chipsPrice));
