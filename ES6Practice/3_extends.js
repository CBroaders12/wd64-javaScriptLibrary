class User {
  constructor(name) {
    this.name = name;
    this.type = "Trial User"; 
  }

  greet() {
    console.log(`Welcome back, ${this.name}`);
  }

  status() {
    console.log(`Current Status: ${this.type}`);
  }
}

class TrialUser extends User {
  trialEnding() {
    console.log(`Your trial will be ending soon, ${this.name}. Would you like to join our program?`);
  }
}

let anonDude = new User("Anonymous");
anonDude.greet();
anonDude.status();

let trialUser = new TrialUser("Paul");
trialUser.greet();
trialUser.trialEnding();
trialUser.status();

class BannedUser extends User {
  banReason() {
    console.log(`${this.name}, you have been banned for knowing too much`);
  }
}

let bannedUser = new BannedUser("Troll");
bannedUser.banReason();