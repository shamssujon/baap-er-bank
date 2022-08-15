const depositBalance = document.getElementById("deposit-balance");
const lastDepositAmount = document.getElementById("last-deposit-amount");
const depositInput = document.getElementById("deposit-input");
const depositButton = document.getElementById("deposit-btn");

const withdrawBalance = document.getElementById("withdraw-balance");
const lastWithdrawAmount = document.getElementById("last-withdraw-amount");
const withdrawInput = document.getElementById("withdraw-input");
const withdrawButton = document.getElementById("withdraw-btn");

const mainBalance = document.getElementById("main-balance");

// Deposit
depositButton.addEventListener("click", function () {
    // Get the deposit amount from the deposit input field and convert it from string to number
    const depositAmount = parseFloat(depositInput.value);

    // Clear the deposit field
    depositInput.value = "";

    // Check if the deposit amount is a number or not
    if (isNaN(depositAmount)) {
        alert("Enter a valid number");
        return;
    }

    // Get the current deposit balance and convert it from string to number
    const currentDepositBalance = parseFloat(depositBalance.innerText);

    // Add current deposit balance and deposit amount and set the calculated value to the deposit balance
    depositBalance.innerText = currentDepositBalance + depositAmount;

    // Set the last deposit amount
    lastDepositAmount.innerText = depositAmount;

    // Get current main balance and convert it from string to number
    const mainBalanceAmount = parseFloat(mainBalance.innerText);

    // Add current main balance and deposit amount and set the calculated value to the main balance
    mainBalance.innerText = mainBalanceAmount + depositAmount;
});

// Withdraw
withdrawButton.addEventListener("click", function () {
    // Get the withdraw amount from the withdraw input field and convert it from string to number
    const withdrawAmount = parseFloat(withdrawInput.value);

    // Clear the withdraw field
    withdrawInput.value = "";

    // Check if the withdraw amount is a number or not
    if (isNaN(withdrawAmount)) {
        alert("Enter a valid number");
        return;
    }

    // Get current main balance and convert it from string to number
    const mainBalanceAmount = parseFloat(mainBalance.innerText);

    // Check if the withdraw amount is grater than the main balance
    if (withdrawAmount > mainBalanceAmount) {
        alert("Eto teka nai!!");
        return;
    }

    // Get the current withdraw balance and convert it from string to number
    const currentWithdrawBalance = parseFloat(withdrawBalance.innerText);

    // Add current withdraw balance and withdraw amount and set the calculated value to the withdraw balance
    withdrawBalance.innerText = currentWithdrawBalance + withdrawAmount;

    // Set the last withdraw amount
    lastWithdrawAmount.innerText = withdrawAmount;

    // Substract current main balance and withdraw amount and set the calculated value to the main balance
    mainBalance.innerText = mainBalanceAmount - withdrawAmount;
});
