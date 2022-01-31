// Soldier
class Soldier {
  constructor(healthParam, strengthParam) {
    this.strength = strengthParam;
    this.health = healthParam;
  }
  attack = () => {
    return this.strength;
  };

  receiveDamage = (damageSoldier) => {
    this.health -= damageSoldier;
  };
}

// Viking
class Viking extends Soldier {
  constructor(nameParam, healthParam, strengthParam) {
    super(healthParam, strengthParam);
    this.name = nameParam;
  }

  attack = () => {
    return this.strength;
  };

  receiveDamage = (damageViking) => {
    this.health -= damageViking;
    if (this.health <= 0) {
      return `${this.name} has died in act of combat`;
    } else {
      return `${this.name} has received ${damageViking} points of damage`;
    }
  };

  battleCry = () => {
    return 'Odin Owns You All!';
  };
}

// Saxon
class Saxon extends Soldier {
  //super(healthParam, strengthParam) {}

  receiveDamage = (damageSaxon) => {
    this.health -= damageSaxon;

    if (this.health <= 0) {
      return `A Saxon has died in combat`;
    } else {
      return `A Saxon has received ${damageSaxon} points of damage`;
    }
  };
}

// War
class War {
  constructor(){
    this.vikingArmy = [];
    this.saxonArmy = [];
  }

  addViking = (viking) => {
    this.vikingArmy.push(viking);
  }

  addSaxon = (saxon) => {
    this.saxonArmy.push(saxon)
  }

  vikingAttack = () => {
    let numberSaxonRandom =Math.floor(Math.random() * this.saxonArmy.length)
    let randomSaxon = this.saxonArmy[numberSaxonRandom] 

    let numberVikingRandom = Math.floor(Math.random() * this.vikingArmy.length)
    let randomViking = this.vikingArmy[numberVikingRandom]

  
    let damageViking = randomSaxon.receiveDamage(randomViking.strength);
  
    if (randomSaxon.health <= 0 ){
      this.saxonArmy.pop(randomSaxon);
    }
  
    return damageViking; 
  }


  saxonAttack = () => {
    let numberSaxonRandom =Math.floor(Math.random() * this.saxonArmy.length)
    let randomSaxon = this.saxonArmy[numberSaxonRandom] 

    let numberVikingRandom = Math.floor(Math.random() * this.vikingArmy.length)
    let randomViking = this.vikingArmy[numberVikingRandom]


    let damageSaxon = randomViking.receiveDamage(randomSaxon.strength);
  
    if (randomViking.health <= 0 ){
      this.vikingArmy.pop(randomViking);
    }
  
    return damageSaxon; 

  }


  showStatus = () => {

  }

}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
