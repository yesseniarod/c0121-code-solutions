/* exported Bank */
function Bank() {
  this.nextAccountNumber = 1;
  this.accounts = [];
}

Bank.prototype.openAccount = function (holder, balance) {
  if (balance > 0) {
    var account = new Account(this.nextAccountNumber, holder);
    account.transactions.push(balance);
    this.accounts.push(account);
    this.nextAccountNumber++;
    return account.number;
  } else {
    return null;
  }
};

Bank.prototype.getAccount = function (number) {
  var account = new Account(number, this.holder);
  //  console.log("account.number:", account.number); returns number passed
  //  console.log('number:', number); returns number passed
  //  console.log('this.accounts.number:', this.accounts[0].number); returns account number for account object in this.acounts
  //  console.log('this.accounts:', this.accounts); returns array of accounts
  // for (var i = 0; i < this.accounts; i++) invalid loop only allows one iteration {
  if (this.accounts[0].number === account.number) {
    return this.accounts;
  } else {
    return null;
  }

  // }

  //  if (this.accounts[i].number !== number) {
  //    return null;
  //  } else {

//  }
};
