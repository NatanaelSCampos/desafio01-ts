export abstract class DioAccount {
  private readonly name: string;
  private readonly accountNumber: number;
  balance: number = 0;
  private status: boolean = true;

  constructor(name: string, accountNumber: number){
    this.name = name;
    this.accountNumber = accountNumber;
  }

  // setName = (name: string): void => {
  //   this.name = name;
  //   console.log('Nome alterado com sucesso!');
  // }

  getName = (): string => {
    return this.name;
  };

  deposit = (valueForDeposit:  number): boolean => {
    if(this.validateStatus()){
      this.balance += valueForDeposit;
      return  true;
    }
    return  false;

  }

  withdraw = (newBalance: number): string => {
    if(this.validadeBalance(newBalance) && this.validateStatus()){
      this.balance = this.balance - newBalance;
      return  `R$ ${newBalance} foi sacado da sua conta com sucesso | Novo saldo me conta: ${this.balance}`;
    }
    throw new Error('Saldo Insuficiente');
  }

  getBalance = (): number => {
    return this.balance;
  }
  private validadeBalance = (newBalance: number):  boolean => {
    return  newBalance < this.balance ? true : false;
  }

  private validateStatus = (): boolean => {
    // if(this.status){
    //   return true;
    // }
    // return false
    return !!this.status;
  }
}
