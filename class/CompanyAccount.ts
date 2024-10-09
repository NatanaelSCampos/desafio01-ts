import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {

  constructor(name: string, accountNumber: number){
    super(name, accountNumber);
  };

  // Caso esse metodo seja usado em outros tipos de conta, o melhor seria ter um metodo proprio dentro do DioAccount
  getLoan = (newLoan: number): string => {
    if(this.deposit(newLoan)){
      return `novo saldo ${this.getBalance()}`;
    };
    throw new Error('Conta com Status invalido');
  };
}
