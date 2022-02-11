
// handle the depotice amount
let count = 0;
let mainBalance2 = 0;
// update balance 
let totalBalance = document.getElementById('balance-main');
let totalBalanceToInt = parseInt(totalBalance.innerText);


document.getElementById('depo-btn').addEventListener('click', function () {


    // let depoAmount = depoField.value;



    let depoField = document.getElementById('depo-amount')

    let depoAmount = parseInt(depoField.value);


    count = count + depoAmount;


    let totalDepo = document.getElementById('depo-main');
    totalDepo.innerText = count;




    totalBalance.innerText = totalBalanceToInt + count;

    let mainBalance2 = totalBalanceToInt + count


    //clear the field
    depoField.value = ''




})



// let previousDepositAmount = totalDepo.innerText;

// let newDepositTotal = previousDepositAmount + newDepositTotal;


// totalDepo.innerText = 



document.getElementById('withdraw-btn').addEventListener('click', function () {

    let withDrawField = document.getElementById('draw-amount');
    let withDrawToInt = parseInt(withDrawField.value);

    count = count + withDrawToInt;



    // update withdraw balance 


    let withdrawTotal = document.getElementById('withdraw-main');

    let mainBalance = document.getElementById("balance-main");
    // console.log(mainBalance.innerText);

    let mainBalanceToInt = parseInt(mainBalance.innerText);


    // console.log(mainBalanceToInt)

    let reduce = mainBalance2 - count;

    withdrawTotal.innerText = count;

    // set updated balance

    mainBalance.innerText = reduce;





    // if any value set in previus 


    // let WithdrawTotalToInt = parseInt(withdrawTotal.innerText);

    // withdrawTotal.innerText = WithdrawTotalToInt + count;



    withDrawField.value = '';







})