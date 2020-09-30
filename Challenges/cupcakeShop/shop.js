const Cupcake = require("./cupcake");

class Shop {
	constructor(location, owner) {
		this.location = location;
		this.owner = owner;
	}

	getLocation() {
		console.log(`This shop is at: ${this.location}`);
	}

	getOwner() {
		console.log(`This shop is owned by: ${this.owner}`);
	}

	changeOwner(newOwner) {
		this.owner = newOwner;
	}
}

class CupcakeShop extends Shop {
	constructor(location, owner, name) {
		super(location, owner);
		this.name = name;
		this.inventory = [];
		this.cash = 0;
	}

	bakeBatch(count, batter, icing, price) {
		//make COUNT cupcakes, add them to inventory
		for (let i = 0; i < count; i++) {
			let newCupcake = new Cupcake(icing, batter, price);
			this.inventory.push(newCupcake);
		}
	}

	sellCupcake() {
		// Remove cupcake from inventory, increase cash by price of cupcake
		let soldCupcake = this.inventory.pop();
		this.cash += soldCupcake.price;
		return soldCupcake;
	}
}

let myCupcakeShop = new CupcakeShop("Broad Ripple", "Conor", "Conor's Cupcakes");

myCupcakeShop.bakeBatch(12, "Chocolate", "Peanut butter", 4);
myCupcakeShop.sellCupcake();
myCupcakeShop.sellCupcake();
myCupcakeShop.sellCupcake();

console.log(myCupcakeShop.cash);

function Fan(diameter, amps) {
	this.diameter = diameter;
	this.amps = amps;
}

let myfan = new Fan(12, 150);

Fan.prototype.turnOn = function () {
	this.isOn = true;
};
