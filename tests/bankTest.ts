import { Bank } from "../src/bank";
const accounts = [
  { id: 1234567890, balance: 5000 },
  { id: 1234567891, balance: 1000 },
  { id: 1234567892, balance: 50 },
  { id: 1234567893, balance: 6700 },
  { id: 1234567894, balance: 0 },
];
const usernames = ["Alice", "Bob", "Charlie", "David", "Eve"];
const bank = new Bank(accounts, usernames);

// Scenario 1: successful account creation
const account = bank.createAccount("Alice", 20, 1234567895);
if(account.id !== 1234567895 || account.balance !== 0 || account.id.toString().length !== 10){
   
    console.log('Scenario 1 failed');
}else{
    console.log('Testing Account Creation');
    console.log('Scenario 1 passed');
}
try{
    bank.createAccount("Alice", 20, 1234567895);
    console.log('Scenario 2 failed');

}catch(e){
    console.log('Scenario 2 passed');
}   


// Scenario 1: Successful Deposit
try {
    const message = bank.deposit(1234567890, 500);
    console.log('Testing Deposit');
    console.log('Scenario 1 passed:', message);
} catch (e) {
    console.log('Scenario 1 failed');
}

// Scenario 2: Unsuccessful Deposit due to Invalid Account
try {
    bank.deposit(9999999999, 500);
    console.log('Scenario 2 failed');
} catch (e) {
    console.log('Scenario 2 passed');
}

// Scenario 3: Unsuccessful Deposit due to Invalid Amount
try {
    bank.deposit(1234567890, -500);
    console.log('Scenario 3 failed');
} catch (e) {
    console.log('Scenario 3 passed');
}

// Scenario 1: Successful Withdrawal
try {
    const message = bank.withdraw(1234567890, 1000);
    console.log('Testing Withdrawal');
    console.log('Scenario 1 passed:', message);
} catch (e) {
    console.log('Scenario 1 failed');
}

// Scenario 2: Unsuccessful Withdrawal due to Insufficient Balance
try {
    bank.withdraw(1234567891, 2000);
    console.log('Scenario 2 failed');
} catch (e) {
    console.log('Scenario 2 passed');
}

// Scenario 3: Unsuccessful Withdrawal due to Invalid Account
try {
    bank.withdraw(9999999999, 100);
    console.log('Scenario 3 failed');
} catch (e) {
    console.log('Scenario 3 passed');
}

// Scenario 4: Unsuccessful Withdrawal due to Invalid Amount
try {
    bank.withdraw(1234567890, -100);
    console.log('Scenario 4 failed');
} catch (e) {
    console.log('Scenario 4 passed');
}



// Scenario 1: Successful Balance Check
try {
    const message = bank.getBalance(1234567890);
    console.log('Testing Balance Check');
    console.log('Scenario 1 passed:', message);
} catch (e) {
    console.log('Scenario 1 failed');
}

// Scenario 2: Unsuccessful Balance Check due to Invalid Account
try {
    bank.getBalance(9999999999);
    console.log('Scenario 2 failed');
} catch (e) {
    console.log('Scenario 2 passed');
}