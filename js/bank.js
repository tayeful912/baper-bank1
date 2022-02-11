
document.getElementById('depo-btn').addEventListener('click', function () {


    // let depoAmount = depoField.value;


    let depoField = document.getElementById('depo-amount')

    let newDepoAmount = parseInt(depoField.value); // eita hochche ne input ar man ta eita hochche ne input ar man ta int a number convert kora  

    // let newDepoAmount = depoField.value;

    let totalDepo = document.getElementById('depo-main');
    let previousDepositAmountText = totalDepo.innerText;
    let previousDepositAmount = parseInt(previousDepositAmountText);// eita hochche age diposit ekora thake sei tar man 


    let newDepositTotal = previousDepositAmount + newDepoAmount; // akhon ager  diposite man ta  ar new dopisite man ta jog korte hobe

    totalDepo.innerText = newDepositTotal; // jog korar korar por  jog kora man ta ke totaldeposit set kore dit ehobe 


    // update balance 
    let totalBalance = document.getElementById('balance-main');
    let totalBalanceToInt = parseInt(totalBalance.innerText); // ager balance man ke nia covert korte hobe  

    totalBalance.innerText = totalBalanceToInt + newDepoAmount; // tarpor convert kora man and new deposit total jog korte hobe.

    // let mainBalance2 = totalBalanceToInt + count


    //clear the field
    depoField.value = ''


})

// withdraw and upadate balance 


document.getElementById('withdraw-btn').addEventListener('click', function () {


    let withdrawAmount = document.getElementById('withdraw-amount');
    let withdrawAmountText = withdrawAmount.value;

    let withdrawAmountInt = parseInt(withdrawAmountText);


    // set withdraw total 

    let withdrawTotal = document.getElementById('withdraw-total');

    let withdrawTotalText = withdrawTotal.innerText;

    let withdrawTotalInt = parseInt(withdrawTotalText);

    //sum total withdraw 

    let totalWithdraw = withdrawAmountInt + withdrawTotalInt;

    console.log(totalWithdraw);

    withdrawTotal.innerText = totalWithdraw;

    //clear withdraw input

    withdrawAmount.value = ' ';

    // update balance 
    let balanceTotal = document.getElementById('balance-main')

    let balanceTotalText = balanceTotal.innerText;
    let balanceTotalInt = parseInt(balanceTotalText);

    let newBalanceTotal = balanceTotalInt - withdrawAmountInt;

    balanceTotal.innerText = newBalanceTotal;


    withdrawAmount.value = '';



})



const nameOfOrganization = document.getElementById("name").value;

console.log(nameOfOrganization);


// let previousDepositAmount = totalDepo.innerText;

// let newDepositTotal = previousDepositAmount + newDepositTotal;


// totalDepo.innerText = 



