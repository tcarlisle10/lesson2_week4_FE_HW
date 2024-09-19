let isLoggedIn = true

if (isLoggedIn) {
    console.log("You are now signed in")
} else {
    console.log("Please sign in")
};

function deposit(currentBalance, depositAmount) {
    console.log(currentBalance)


    if (depositAmount > 0) {
        newBalance = currentBalance + depositAmount
        console.log(`You have deposited $${newBalance} into your account, New Balance: $${newBalance}`)
    } else if (depositAmount < 0) {
        console.log("Can not take a negative amount")
    }   
}

function withdraw(currentBalance, withdrawAmount) {
    console.log(`Current Balance: $${currentBalance}`);

    if (withdrawAmount <= 0) {
        console.log("Withdrawal amount must be greater than zero.");
    } else if (withdrawAmount > currentBalance) {
        console.log(`You do not have enough in your account. Current Balance: $${currentBalance}`);
    } else {
        const withdrawNewBalance = currentBalance - withdrawAmount;
        console.log(`You withdrew: $${withdrawAmount}. Your new balance is: $${newBalance}`);
        return withdrawNewBalance; 
    }
}

