class User {
  constructor(first, last, e) {
    this.f = first;
    this.l = last;
    this.email = e;
  }
}

let userOne = new User("Paul", "O'Connor", "poconnor@elevenfifty.org");
console.log(userOne.first);
console.log(userOne.f);
console.log(userOne.l);
console.log(userOne);

class Player {
  constructor(name, number, avgPoints) {
    this.name = name;
    this.number = number;
    this.pointAverage = avgPoints;
  }
}