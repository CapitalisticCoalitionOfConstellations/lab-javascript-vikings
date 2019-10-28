// Soldier
class Soldier {
<<<<<<< HEAD
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
class Viking extends Soldier {}

// Saxon
class Saxon extends Soldier {}
=======
    constructor(health, strength){
        this.health = health;
        this.strength = strength
      }
}

// Viking
class Viking extends Soldier{}

// Saxon
class Saxon extends Soldier{}
>>>>>>> 1735deb0391ae34591bbbc1f693f52f2db41bc94

// War
class War {}
