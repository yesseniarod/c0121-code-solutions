/* exported student */
var student = {
  firstName: 'Yessenia',
  first: function () {
    return this.firstName;
  },
  lastName: 'Rodriguez',
  last: function () {
    return this.lastName;
  },
  subject: 'JavaScript',
  favorite: function () {
    return this.subject;
  },
  getFullName: function () {
    return this.firstName + ' ' + this.lastName;
  },
  getIntroduction: function () {
    return 'Hello, my name is ' + this.firstName + ' ' + this.lastName + ' and I am studying ' + this.subject + '.';
  }
};
