/* Global Required Code Here */
/*level code */
let currentLevel = 1;
let currentExp = 0;
let requiredExp = 2;

function levelUp() {
  if (currentExp >= requiredExp) {
    currentLevel++;
    currentExp = currentExp - requiredExp;
    requiredExp = requiredExp * 2;
  }
}

let levelUpButton = document.getElementById("levelUpButton");
levelUpButton.addEventListener("click", () => {
  levelUp();
});

setInterval(function displayCurrentLevel() {
  document.getElementById("currentLevel").innerHTML = currentLevel;
}, 325);

setInterval(function displayCurrentExperience() {
  document.getElementById("levelUpCurrentExperience").innerHTML = currentExp;
}, 325);

setInterval(function displayRequiredExperience() {
  let ratio = requiredExp - currentExp;
  if (ratio >= 0) {
    document.getElementById("levelUpRequiredExperience").innerHTML = ratio;
  } else {
    document.getElementById("levelUpRequiredExperience").innerHTML = 0;
  }
}, 325);

setInterval(function displayExpBar() {
  let currentRatio = currentExp / requiredExp;
  let currentRatioPercent = currentRatio * 100;
  if (currentRatioPercent <= 99) {
    return (document.getElementById(
      "levelUpExperienceBarFillingUp"
    ).style.width = currentRatioPercent + "%");
  } else if (currentRatioPercent >= 100) {
    return (document.getElementById(
      "levelUpExperienceBarFillingUp"
    ).style.width = 100 + "%");
  }
}, 325);

/*coins code */
let currentCoins = 0;
let coinsGivenByAllMonster = 1;

setInterval(function displayCurrentCoins() {
  document.getElementById("currentCoins").innerHTML = currentCoins;
}, 325);

/* Monsters Script */

/* Monster A */
var killNumberMonsterA = 0;
var baseExpGivenByMonsterA = 1;
var upgradeNumberMonsterA = 0;
var costForUpgradeMonsterA = 1;

function saveForMonsterA() {
  let saveForMonsterA = {
    KeyKillNumberMonsterA: killNumberMonsterA,
    KeyBaseExpGivenByMonsterA: baseExpGivenByMonsterA,
    KeyCostForUpgradeMonsterA: costForUpgradeMonsterA,
    KeyUpgradeNumberMonsterA: upgradeNumberMonsterA,
  };
  let saveForMonsterASerialized = JSON.stringify(saveForMonsterA);
  localStorage.setItem("saveForMonsterA", saveForMonsterASerialized);
}
setInterval(saveForMonsterA, 15000);

let saveExistsForMonsterA = localStorage.getItem("saveForMonsterA");
function loadForMonsterA() {
  if (saveExistsForMonsterA) {
    let saveForMonsterADeserialized = JSON.parse(
      localStorage.getItem("saveForMonsterA")
    );

    killNumberMonsterA = saveForMonsterADeserialized.KeyKillNumberMonsterA;
    baseExpGivenByMonsterA =
      saveForMonsterADeserialized.KeyBaseExpGivenByMonsterA;
    costForUpgradeMonsterA =
      saveForMonsterADeserialized.KeyCostForUpgradeMonsterA;
    upgradeNumberMonsterA =
      saveForMonsterADeserialized.KeyUpgradeNumberMonsterA;
  } else {
    saveForMonsterA();
  }
}
setTimeout(loadForMonsterA, 250);

setInterval(function displayForStatsMonsterA() {
  document.getElementById("btnUpgradeMonsterA").innerHTML =
    costForUpgradeMonsterA;
  document.getElementById("monsterAUpgrade").innerHTML = upgradeNumberMonsterA;
  document.getElementById("monsterAKill").innerHTML = killNumberMonsterA;
}, 325);

let btnUpgradeMonsterAInHTML = document.getElementById("btnUpgradeMonsterA");
btnUpgradeMonsterAInHTML.addEventListener("click", () => {
  upgradesForMonsterA();
});
function upgradesForMonsterA() {
  if (upgradeNumberMonsterA <= 10 && currentCoins >= costForUpgradeMonsterA) {
    //add one to the base experience given by this monster
    baseExpGivenByMonsterA = baseExpGivenByMonsterA + 1;
    //substract the cost from gold pile
    currentCoins = currentCoins - costForUpgradeMonsterA;
    //add one to the upgrade number and the cost of an upgrade
    upgradeNumberMonsterA = upgradeNumberMonsterA + 1;
    costForUpgradeMonsterA = costForUpgradeMonsterA + 1;
    //update the displays of the cost and the number of upgrades (refers to base experience boost)
  }
  if (
    upgradeNumberMonsterA > 10 &&
    upgradeNumberMonsterA <= 100 &&
    currentCoins >= costForUpgradeMonsterA
  ) {
    baseExpGivenByMonsterA = baseExpGivenByMonsterA + 1;
    currentCoins = currentCoins - costForUpgradeMonsterA;
    upgradeNumberMonsterA++;
    costForUpgradeMonsterA = costForUpgradeMonsterA + 2;
    document.getElementById("btnUpgradeMonsterA").innerHTML =
      costForUpgradeMonsterA;
    document.getElementById("monsterAUpgrade").innerHTML =
      upgradeNumberMonsterA;
  }
  if (
    upgradeNumberMonsterA > 100 &&
    upgradeNumberMonsterA <= 1000 &&
    currentCoins >= costForUpgradeMonsterA
  ) {
    baseExpGivenByMonsterA = baseExpGivenByMonsterA + 1;
    currentCoins = currentCoins - costForUpgradeMonsterA;
    upgradeNumberMonsterA++;
    costForUpgradeMonsterA = costForUpgradeMonsterA + 4;
    document.getElementById("btnUpgradeMonsterA").innerHTML =
      costForUpgradeMonsterA;
    document.getElementById("monsterAUpgrade").innerHTML =
      upgradeNumberMonsterA;
  }
}

if (killNumberMonsterA == 0) {
  document.getElementById("monsterAExp").innerHTML = baseExpGivenByMonsterA;
}
function btnFightMonsterA() {
  if (killNumberMonsterA <= 10) {
    /* initial kill value before doubling... */
    currentExp = currentExp + baseExpGivenByMonsterA;
    killNumberMonsterA++;
    document.getElementById("monsterAExp").innerHTML = baseExpGivenByMonsterA;
    currentCoins = currentCoins + coinsGivenByAllMonster;
  }
  if (killNumberMonsterA > 10 && killNumberMonsterA <= 100) {
    /* power of 10 one time */
    let expGivenByMonsterDoubled = baseExpGivenByMonsterA * 2;
    currentExp = currentExp + expGivenByMonsterDoubled;
    document.getElementById("monsterAExp").innerHTML = expGivenByMonsterDoubled;
    killNumberMonsterA++;
    currentCoins = currentCoins + coinsGivenByAllMonster;
  }
  if (killNumberMonsterA > 100 && killNumberMonsterA <= 1000) {
    /* power of 10 two times */
    let expGivenByMonsterQuadrupled = baseExpGivenByMonsterA * 4;
    currentExp = currentExp + expGivenByMonsterQuadrupled;
    document.getElementById("monsterAExp").innerHTML =
      expGivenByMonsterQuadrupled;
    killNumberMonsterA++;
    currentCoins = currentCoins + coinsGivenByAllMonster;
  }
  if (killNumberMonsterA > 1000 && killNumberMonsterA <= 10000) {
    /* power of 10 three times */
    let expGivenByMonsterTimesEight = baseExpGivenByMonsterA * 8;
    currentExp = currentExp + expGivenByMonsterTimesEight;
    document.getElementById("monsterAExp").innerHTML =
      expGivenByMonsterTimesEight;
    killNumberMonsterA++;
    currentCoins = currentCoins + coinsGivenByAllMonster;
  }
  if (killNumberMonsterA > 10000 && killNumberMonsterA <= 100000) {
    /* power of 10 four times */
    let expGivenByMonsterTimesSixteen = baseExpGivenByMonsterA * 16;
    currentExp = currentExp + expGivenByMonsterTimesSixteen;
    document.getElementById("monsterAExp").innerHTML =
      expGivenByMonsterTimesSixteen;
    killNumberMonsterA++;
    currentCoins = currentCoins + coinsGivenByAllMonster;
  }
  if (killNumberMonsterA > 100000) {
    /* power of 10 four times */
    let expGivenByMonsterTimesThirtyTwo = baseExpGivenByMonsterA * 32;
    currentExp = currentExp + expGivenByMonsterTimesThirtyTwo;
    document.getElementById("monsterAExp").innerHTML =
      expGivenByMonsterTimesThirtyTwo;
    killNumberMonsterA++;
    currentCoins = currentCoins + coinsGivenByAllMonster;
  }
}

/* Monster B */
var killNumberMonsterB = 0;
var baseExpGivenByMonsterB = 1;
var upgradeNumberMonsterB = 0;
var costForUpgradeMonsterB = 1;

function saveForMonsterB() {
  let saveForMonsterB = {
    KeyKillNumberMonsterB: killNumberMonsterB,
    KeyBaseExpGivenByMonsterB: baseExpGivenByMonsterB,
    KeyCostForUpgradeMonsterB: costForUpgradeMonsterB,
    KeyUpgradeNumberMonsterB: upgradeNumberMonsterB,
  };
  let saveForMonsterBSerialized = JSON.stringify(saveForMonsterB);
  localStorage.setItem("saveForMonsterB", saveForMonsterBSerialized);
}
setInterval(saveForMonsterB, 15000);

let saveExistsForMonsterB = localStorage.getItem("saveForMonsterB");
function loadForMonsterB() {
  if (saveExistsForMonsterB) {
    let saveForMonsterBDeserialized = JSON.parse(
      localStorage.getItem("saveForMonsterB")
    );

    killNumberMonsterB = saveForMonsterBDeserialized.KeyKillNumberMonsterB;
    baseExpGivenByMonsterB =
      saveForMonsterBDeserialized.KeyBaseExpGivenByMonsterB;
    costForUpgradeMonsterB =
      saveForMonsterBDeserialized.KeyCostForUpgradeMonsterB;
    upgradeNumberMonsterB =
      saveForMonsterBDeserialized.KeyUpgradeNumberMonsterB;
  } else {
    saveForMonsterB();
  }
}
setTimeout(loadForMonsterB, 250);

setInterval(function displayForStatsMonsterB() {
  document.getElementById("btnUpgradeMonsterB").innerHTML =
    costForUpgradeMonsterB;
  document.getElementById("monsterBUpgrade").innerHTML = upgradeNumberMonsterB;
  document.getElementById("monsterBKill").innerHTML = killNumberMonsterB;
}, 325);

let btnUpgradeMonsterBInHTML = document.getElementById("btnUpgradeMonsterB");
btnUpgradeMonsterBInHTML.addEventListener("click", () => {
  upgradesForMonsterB();
});
function upgradesForMonsterB() {
  if (upgradeNumberMonsterB <= 10 && currentCoins >= costForUpgradeMonsterB) {
    //add one to the base experience given by this monster
    baseExpGivenByMonsterB = baseExpGivenByMonsterB + 1;
    //substract the cost from gold pile
    currentCoins = currentCoins - costForUpgradeMonsterB;
    //add one to the upgrade number and the cost of an upgrade
    upgradeNumberMonsterB = upgradeNumberMonsterB + 1;
    costForUpgradeMonsterB = costForUpgradeMonsterB + 2;
    //update the displays of the cost and the number of upgrades (refers to base experience boost)
  }
  if (
    upgradeNumberMonsterB > 10 &&
    upgradeNumberMonsterB <= 100 &&
    currentCoins >= costForUpgradeMonsterB
  ) {
    baseExpGivenByMonsterB = baseExpGivenByMonsterB + 1;
    currentCoins = currentCoins - costForUpgradeMonsterB;
    upgradeNumberMonsterB++;
    costForUpgradeMonsterB = costForUpgradeMonsterB + 4;
    document.getElementById("btnUpgradeMonsterB").innerHTML =
      costForUpgradeMonsterB;
    document.getElementById("monsterBUpgrade").innerHTML =
      upgradeNumberMonsterB;
  }
  if (
    upgradeNumberMonsterB > 100 &&
    upgradeNumberMonsterB <= 1000 &&
    currentCoins >= costForUpgradeMonsterB
  ) {
    baseExpGivenByMonsterB = baseExpGivenByMonsterB + 1;
    currentCoins = currentCoins - costForUpgradeMonsterB;
    upgradeNumberMonsterB++;
    costForUpgradeMonsterB = costForUpgradeMonsterB + 8;
    document.getElementById("btnUpgradeMonsterB").innerHTML =
      costForUpgradeMonsterB;
    document.getElementById("monsterBUpgrade").innerHTML =
      upgradeNumberMonsterB;
  }
}

if (killNumberMonsterB == 0) {
  document.getElementById("monsterBExp").innerHTML = baseExpGivenByMonsterB;
}
function btnFightMonsterB() {
  if (killNumberMonsterB <= 10) {
    /* initial kill value before doubling... */
    currentExp = currentExp + baseExpGivenByMonsterB;
    killNumberMonsterB++;
    document.getElementById("monsterBExp").innerHTML = baseExpGivenByMonsterB;
    currentCoins = currentCoins + coinsGivenByAllMonster;
  }
  if (killNumberMonsterB > 10 && killNumberMonsterB <= 100) {
    /* power of 10 one time */
    let expGivenByMonsterDoubled = baseExpGivenByMonsterB * 2;
    currentExp = currentExp + expGivenByMonsterDoubled;
    document.getElementById("monsterBExp").innerHTML = expGivenByMonsterDoubled;
    killNumberMonsterB++;
    currentCoins = currentCoins + coinsGivenByAllMonster;
  }
  if (killNumberMonsterB > 100 && killNumberMonsterB <= 1000) {
    /* power of 10 two times */
    let expGivenByMonsterQuadrupled = baseExpGivenByMonsterB * 4;
    currentExp = currentExp + expGivenByMonsterQuadrupled;
    document.getElementById("monsterBExp").innerHTML =
      expGivenByMonsterQuadrupled;
    killNumberMonsterB++;
    currentCoins = currentCoins + coinsGivenByAllMonster;
  }
  if (killNumberMonsterB > 1000 && killNumberMonsterB <= 10000) {
    /* power of 10 three times */
    let expGivenByMonsterTimesEight = baseExpGivenByMonsterB * 8;
    currentExp = currentExp + expGivenByMonsterTimesEight;
    document.getElementById("monsterBExp").innerHTML =
      expGivenByMonsterTimesEight;
    killNumberMonsterB++;
    currentCoins = currentCoins + coinsGivenByAllMonster;
  }
  if (killNumberMonsterB > 10000 && killNumberMonsterB <= 100000) {
    /* power of 10 four times */
    let expGivenByMonsterTimesSixteen = baseExpGivenByMonsterB * 16;
    currentExp = currentExp + expGivenByMonsterTimesSixteen;
    document.getElementById("monsterBExp").innerHTML =
      expGivenByMonsterTimesSixteen;
    killNumberMonsterB++;
    currentCoins = currentCoins + coinsGivenByAllMonster;
  }
  if (killNumberMonsterB > 100000) {
    /* power of 10 four times */
    let expGivenByMonsterTimesThirtyTwo = baseExpGivenByMonsterB * 32;
    currentExp = currentExp + expGivenByMonsterTimesThirtyTwo;
    document.getElementById("monsterBExp").innerHTML =
      expGivenByMonsterTimesThirtyTwo;
    killNumberMonsterB++;
    currentCoins = currentCoins + coinsGivenByAllMonster;
  }
}





/*Unlock Monsters Code */
let boolForMonsterAUnlock = false;
let boolForMonsterBUnlock = false;
setInterval(function intervalUnlockForMonsters() {
  if (currentLevel >= 1 && !boolForMonsterAUnlock) {
    setInterval(btnFightMonsterA, 1000);
    setInterval(saveForMonsterA, 12000);
    boolForMonsterAUnlock = true;
  }
  if (currentLevel >= 3 && !boolForMonsterBUnlock) {
    setInterval(btnFightMonsterB, 1000);
    setInterval(saveForMonsterB, 12000);
    boolForMonsterBUnlock = true;
    let B = document.getElementById("monsterContainerB");
    B.classList.remove("notUnlocked");
    B.classList.add("nowUnlocked");
    document.getElementById("currentLevel").style.color = "rgb(32, 0, 92)";
    document.getElementById("levelUpExperienceBarFillingUp").style.backgroundColor = "rgb(32, 0, 92)";
  }
}, 325);

/* Save system */
function saveProgressForCommonStats() {
  /* Create the "saveProgress" object and create "key: value," pair with something as a key and a variable as a value */
  let saveProgress = {
    KeyCurrentExp: currentExp,
    KeyCurrentLevel: currentLevel,
    KeyCurrentRequiredExp: requiredExp,
    KeyCurrentCoins: currentCoins,
    KeyCoinsGivenByAllMonster: coinsGivenByAllMonster,
  };
  /* Create a variable "saveSerialized" with the value of "JSON.stringify(objectNameHere)" which will serialize to JSON a given object.*/
  let saveSerialized = JSON.stringify(saveProgress);
  /* Now we can send the serialized version of our object to the storage! Using the method: "localStorage.setItem("nameOfKey", serializedVarHere)" */
  localStorage.setItem("saveForCommonStats", saveSerialized);
}

/* Boolean "saveExists" to verify if it is present inside localStorage... */
let saveExistsForCommonStats = localStorage.getItem("saveForCommonStats");

function loadProgressForCommonStats() {
  if (saveExistsForCommonStats) {
    /* Create the "saveDeserialized" variable of which the value will be the method to get an item from storage using its "nameOfKey" */
    /* JSON.parse(localStorage.getItem("nameOfKey")); */
    let saveDeserialized = JSON.parse(
      localStorage.getItem("saveForCommonStats")
    );
    /* Reinitialise "saveProgress" as our new "saveDeserialized" to close the loop! */
    /* loop is: Values -> saveProgress -> saveSerialized -> localStorage -> saveDeserialized -> saveProgress -> Values */
    saveProgress = saveDeserialized;
    /* Reinitialised the value of the saved object using our saveDeserialized object which is equal to our beginning "saveProgress" */
    /* Recall Global Values For Common Stats from localStorage*/
    currentExp = saveProgress.KeyCurrentExp;
    currentLevel = saveProgress.KeyCurrentLevel;
    requiredExp = saveProgress.KeyCurrentRequiredExp;
    currentCoins = saveProgress.KeyCurrentCoins;
    coinsGivenByAllMonster = saveProgress.KeyCoinsGivenByAllMonster;
  }
}
if (saveExistsForCommonStats) {
  setTimeout(function loadSaveIfItExists() {
    loadProgressForCommonStats();
  }, 100);
}
if (!saveExistsForCommonStats) {
  saveProgressForCommonStats();
}

/* Area for boutique */
let coinsBonusBoutique = document.getElementById("coinsBonusBoutique");
let monsterCombatArea = document.getElementById("monsterCombatArea");
let btnReturn = document.getElementById("btnReturn");
let btnBonusBoutique = document.getElementById("btnBonusBoutique");
btnReturn.addEventListener("click", function () {
  // BtnReturn inside Boutique
  monsterCombatArea.classList.remove("closed");
  monsterCombatArea.classList.add("openFlex");
  coinsBonusBoutique.classList.remove("openFlex");
  coinsBonusBoutique.classList.add("closed");
});
btnBonusBoutique.addEventListener("click", function () {
  // BtnBoutiqueForUpgrades
  monsterCombatArea.classList.remove("openFlex");
  monsterCombatArea.classList.add("closed");
  coinsBonusBoutique.classList.remove("closed");
  coinsBonusBoutique.classList.add("openFlex");
});

/*  
    (Immediately Invoked Function Expression)(); 
    "(WrapTheFunctionHere)" in parentheses and "();"" immediately invoke it! 
    Making it an Immediately Invoked Function Expression (*Anonymous and dont take place in the global Scope...) 
*/
