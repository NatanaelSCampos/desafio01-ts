import { DioAccount } from "./DioAccount";

export class SpecialAccount extends DioAccount {
    abono: number = 10; 
    constructor(name: string, accountNumber: number){
        super(name, accountNumber);
    }
    deposit = (valueForDeposit:  number): string => {
        this.balance += valueForDeposit + this.abono;
        return  `Deposito => Novo Saldo == ${this.balance}`;

    }
}