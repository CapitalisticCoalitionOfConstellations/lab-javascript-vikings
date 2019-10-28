// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }

    attack() {
        return this.strength;
    }

    receiveDamage(incomingDamage) {
        this.health -= incomingDamage;
    }
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength);
        this.name = name;
    }

    receiveDamage(incomingDamage) {
        super.receiveDamage(incomingDamage);
        if (this.health > 0) {
            console.log(
                `${this.name} has received ${incomingDamage} points of damage`,
            );
        } else {
            console.log(`${this.name} has died in act of combat`);
        }
    }
}

// Saxon
class Saxon extends Soldier {}

// War
class War {}
