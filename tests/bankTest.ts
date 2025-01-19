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



