import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'
import { SpecialAccount } from './class/specialAccount'

// criando instancias para contas PeopleAccount
console.log('--------------------------------------------');
console.log('People Account');
console.log('--------------------------------------------');
const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10);
console.log('people deposit ==> ', peopleAccount.deposit(100));
console.log('people withdraw ==> ', peopleAccount.withdraw(50));
console.log('people getName ==> ', peopleAccount.getName());
console.log('people getBalance ==> ', peopleAccount.getBalance());

console.log('--------------------------------------------');
console.log('Comapny Account');
console.log('--------------------------------------------');

// criando instancias para contas CompanyAccount
const companyAccount: CompanyAccount = new CompanyAccount('DIO Company', 20);
console.log('company deposit ==> ', companyAccount.deposit(100));
console.log('company withdraw ==> ', companyAccount.withdraw(50));
console.log('company getName ==> ', companyAccount.getName());
console.log('company getBalance ==> ', companyAccount.getBalance());
console.log('company getLoan ==> ', companyAccount.getLoan(1000));

// criando instancias para contas SpecialAccount
console.log('--------------------------------------------');
console.log('Special Account');
console.log('--------------------------------------------');
const specialAccount: SpecialAccount = new SpecialAccount('DIO Especial', 20);
console.log('special deposit ==> ', specialAccount.deposit(100));
console.log('special withdraw ==> ', specialAccount.withdraw(50));
console.log('special getName ==> ', specialAccount.getName());
console.log('special getBalance ==> ', specialAccount.getBalance());