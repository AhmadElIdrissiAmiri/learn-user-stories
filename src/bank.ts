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
}