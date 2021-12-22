class Ninja {
    constructor(name, health) {
        this.name = name;
        this.health = health;
        this.speed = 3;
        this.strength = 3;
    }

    sayName() {
        return (`Ninja's name is ${this.name}`);
    }

    showStats() {
        return (
            `Name: ${this.name} \nHealth: ${this.health} \nSpeed: ${this.speed} \nStrength: ${this.strength}`
        );
    }

    drinkSake() {
        this.health += 10;
    }
}

let michael = new Ninja("Michael", 100);
console.log(michael);
console.log(michael.sayName());
console.log(michael.showStats());
michael.drinkSake();
console.log(michael.showStats());