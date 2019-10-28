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
    constructor(){
        super()
    }
}

// Saxon
class Saxon extends Soldier {
    receiveDamage(incomingDamage){
        super.receiveDamage(incomingDamage);
       if (this.health > 0){
         return `A saxon has received ${incomingDamage} points of damage`
       }
       else {
         return "A Saxon has died in combat"
       }  
     }
     }


// War
class War {}
