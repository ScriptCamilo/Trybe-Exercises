const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const dragonDamage = () => Math.floor(Math.random() * (dragon.strength - 15 + 1) + 15);

const warriorDamage = () => { 
  return Math.floor(Math.random() * (warrior.strength * warrior.weaponDmg - warrior.strength + 1) + warrior.strength);
}

const mageDamage = () => {
  const damage = Math.floor(Math.random() * (mage.intelligence * 2 - mage.intelligence + 1) + mage.intelligence);
  const mana = (mage.mana > 15) ? mage.mana - 15 : mage.mana;

  if (mana === mage.mana) {
    return { damage: 'Not enough mana...', mana: 0};
  }
  return { damage, mana }
}


const gameActions = {
  warriorAction: (action) => {
    warrior.damage = action();
    dragon.healthPoints -= warrior.damage;
  },
  mageAction: (action) => {
    const { damage, mana } = action();
    mage.damage = damage;
    mage.mana = mana;
    dragon.healthPoints -= damage;
  },
  dragonAction: (action) => {
    dragon.damage = action();
    warrior.healthPoints -= dragon.damage;
    mage.healthPoints -= dragon.damage;
  },
  update: () => battleMembers,
};

const battle = () => {
  while (dragon.healthPoints > 0 || (mage.healthPoints > 0 && warrior.healthPoints > 0)) {
    gameActions.warriorAction(warriorDamage);
    gameActions.mageAction(mageDamage);
    gameActions.dragonAction(dragonDamage);
    console.log(gameActions.update());
  }
  if (dragon.healthPoints < 0) {
    console.log('Congrats, you killed the dragon!')
  } else {
    console.log('Game Over!');
  }
};

battle();
