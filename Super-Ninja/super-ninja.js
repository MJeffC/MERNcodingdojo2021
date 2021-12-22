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

class Sensei extends Ninja {
    constructor(name) {
        super(name, 200);
        this.wisdom = 10;
    }

    speakWisdom() {
        super.drinkSake();
        return ('What one programmer can do in one month, two programmers can do in two months.');
    }
}

let michael = new Ninja("Michael", 100);
console.log(michael);
console.log(michael.sayName());
console.log(michael.showStats());
michael.drinkSake();
console.log(michael.showStats());

const superSensei = new Sensei("Master Splinter");
console.log(superSensei.speakWisdom());
console.log(superSensei.showStats());
console.log(superSensei);