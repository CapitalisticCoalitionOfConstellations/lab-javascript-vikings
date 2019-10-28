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
            return `${this.name} has received ${incomingDamage} points of damage`;
        } else {
            return `${this.name} has died in act of combat`;
        }
    }

    battleCry() {
        return `Odin Owns You All!`;
    }
}

// Saxon
class Saxon extends Soldier {
    receiveDamage(incomingDamage) {
        super.receiveDamage(incomingDamage);
        if (this.health > 0) {
            return `A Saxon has received ${incomingDamage} points of damage`;
        } else {
            return 'A Saxon has died in combat';
        }
    }
}

// War
class War {
    constructor() {
        this.vikingArmy = [];
        this.saxonArmy = [];
    }

    addViking(viking) {
        this.vikingArmy.push(viking);
    }
    addSaxon(saxon) {
        this.saxonArmy.push(saxon);
    }
    vikingAttack() {
        let saxIndex = [Math.floor(Math.random() * this.saxonArmy.length)];
        let vikIndex = [Math.floor(Math.random() * this.vikingArmy.length)];
        let randomSax = this.saxonArmy[saxIndex];
        let randomVik = this.vikingArmy[vikIndex];
        randomSax.receiveDamage(randomVik.strength);
        if (randomSax.health <= 0) {
            this.saxonArmy.splice(saxIndex, 1);
            return 'A Saxon has died in combat';
        }
    }
    saxonAttack() {
        let saxIndex = [Math.floor(Math.random() * this.saxonArmy.length)];
        let vikIndex = [Math.floor(Math.random() * this.vikingArmy.length)];
        let randomSax = this.saxonArmy[saxIndex];
        let randomVik = this.vikingArmy[vikIndex];
        randomVik.receiveDamage(randomSax.strength);
        if (randomVik.health <= 0) {
            this.vikingArmy.splice(vikIndex, 1);
            return `${randomVik.name} has died in combat`;
        }
        return `${randomVik.name} has received ${randomSax.strength} points of damage`;
    }
    showStatus() {
        if (this.saxonArmy.length <= 0) {
            return 'Vikings have won the war of the century!';
        } else if (this.vikingArmy.length <= 0) {
            return 'Saxons have fought for their lives and survived another day...';
        } else {
            return 'Vikings and Saxons are still in the thick of battle.';
        }
    }
}
// }
