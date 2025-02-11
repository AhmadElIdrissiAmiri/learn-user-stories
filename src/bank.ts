import { BankType,AccountType } from "./types";
export class Bank implements BankType {
    private accounts: AccountType[] = [];
    private username: string[]= [];
    public constructor(accounts: AccountType[], username: string[]) {
        this.accounts = accounts;
        this.username = username;
    }
    private findAccountById(id: number): AccountType | undefined {
        return this.accounts.find(account => account.id === id);
    };
    private isAccountNumberInvalid(accountNumber:number):boolean{
        return accountNumber.toString().length !==10 ;
    };
    private isUsernameExists(username:string):boolean{
        return this.username.includes(username);
    };
    createAccount(username:string, age:number,accountNumber:number):AccountType {
        if(this.isAccountNumberInvalid(accountNumber)){
            throw new Error("Invalid account number");
        }
        if(!this.isUsernameExists(username)){
            throw new Error("User not found");
        }
        if(age<18){
            throw new Error("User is under 18");
        }
        if(this.findAccountById(accountNumber)){
            throw new Error("Account already exists");
        }

        const account:AccountType={
            id: accountNumber,
            balance: 0
        };
        this.accounts.push(account);
        return account;
    }
    // Issue # 2 deposit function
    public deposit(accountId: number, amount: number): string {
        if (this.isAccountNumberInvalid(accountId)) {
            throw new Error("Invalid account ID");
        }
        if (typeof amount !== "number" || amount <= 0) {
            throw new Error("Invalid deposit amount");
        }
        const account = this.findAccountById(accountId);
        if (!account) {
            throw new Error("Account not found");
        }
        account.balance += amount;
        return `Deposit successful. New balance: ${account.balance}`;
    }
    public withdraw(accountId: number, amount: number): string {
        if (this.isAccountNumberInvalid(accountId)) {
            throw new Error("Invalid account ID");
        }
    
        const account = this.findAccountById(accountId);
        if (!account) {
            throw new Error("Account not found");
        }
    
        if (amount <= 0 || isNaN(amount)) {
            throw new Error("Invalid withdrawal amount");
        }
    
        if (account.balance < amount) {
            throw new Error("Insufficient balance");
        }
    
        account.balance -= amount;
        return `Withdrawal of $${amount} successful. Remaining balance: $${account.balance}`;
    }
    public getBalance(accountId: number): string {
        if (this.isAccountNumberInvalid(accountId)) {
            throw new Error("Invalid account ID");
        }
    
        const account = this.findAccountById(accountId);
        if (!account) {
            throw new Error("Account not found");
        }
    
        return `The current balance is $${account.balance}`;
    }
}