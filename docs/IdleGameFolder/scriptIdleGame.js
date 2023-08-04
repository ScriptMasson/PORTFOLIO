/* Global Required Code Here */
/*level code */
let currentLevel = 1;
let currentExperience = 0;
let requiredExp = 2;

function levelUp() {
  if (currentExperience >= requiredExp) {
    currentLevel++;
    currentExperience = currentExperience - requiredExp;
    requiredExp = requiredExp * 2;
  }
}

let levelUpButton = document.getElementById("levelUpButton");

levelUpButton.addEventListener("click", () => {
  levelUp();
});

function displayCurrentLevel() {
  document.getElementById("currentLevel").innerHTML = currentLevel;
}

setInterval(displayCurrentLevel, 325);

function displayExpBar() {
  let currentRatio = currentExperience / requiredExp;
  let currentRatioPercent = currentRatio * 100;
  if (currentRatioPercent <= 99) {
    return (document.getElementById("experienceBarFillingUp").style.width = currentRatioPercent + "%");
  } else if (currentRatioPercent >= 100) {
    return (document.getElementById("experienceBarFillingUp").style.width = 100 + "%");
  }
}
setInterval(displayExpBar, 325);

function displayCurrentExperience() {
  document.getElementById("currentExperience").innerHTML = currentExperience;
}
setInterval(displayCurrentExperience, 325);

function displayRequiredExperience() {
  let ratio = requiredExp - currentExperience;
  if (ratio >= 0) {
    document.getElementById("requiredExperience").innerHTML = ratio;
  } else {
    document.getElementById("requiredExperience").innerHTML = 0;
  }
}
setInterval(displayRequiredExperience, 325);

/*coins code */
let currentCoins = 0;
let coinsGivenByAllMonster = 1;

function displayCurrentCoins() {
  document.getElementById("currentCoins").innerHTML = currentCoins;
}
setInterval(displayCurrentCoins, 325);

/*Unlock Monsters Code */
let IsMonsterAUnlocked = false;
let IsMonsterBUnlocked = false;
let IsMonsterCUnlocked = false;
let IsMonsterDUnlocked = false;
let IsMonsterEUnlocked = false;
let IsMonsterFUnlocked = false;
function lookIfAnyUnlockForMonsters() {
  if (currentLevel >= 1 && !IsMonsterAUnlocked) {
    setInterval(btnFightMonsterA, 1000);
    setInterval(saveForMonsterA, 12000);

    IsMonsterAUnlocked = true;
  }
  if (currentLevel >= 3 && !IsMonsterBUnlocked) {
    setInterval(btnFightMonsterB, 1000);
    setInterval(saveForMonsterB, 12000);

    document.getElementById("monsterContainerB").classList.remove("visibilityHidden");
    document.getElementById("monsterContainerB").classList.add("visibilityVisible");

    document.getElementById("containerForMonsterBUpgrade").classList.remove("visibilityHidden");
    document.getElementById("containerForMonsterBUpgrade").classList.add("visibilityVisible");

    document.getElementById("currentLevel").style.color = "rgb(32, 0, 92)";
    document.getElementById("experienceBarFillingUp").style.backgroundColor = "rgb(32, 0, 92)";

    IsMonsterBUnlocked = true;
  }
  if (currentLevel >= 5 && !IsMonsterCUnlocked) {
    setInterval(btnFightMonsterC, 1000);
    setInterval(saveForMonsterC, 12000);

    document.getElementById("monsterContainerC").classList.remove("visibilityHidden");
    document.getElementById("monsterContainerC").classList.add("visibilityVisible");

    document.getElementById("containerForMonsterCUpgrade").classList.remove("visibilityHidden");
    document.getElementById("containerForMonsterCUpgrade").classList.add("visibilityVisible");

    document.getElementById("currentLevel").style.color = "rgb(145, 0, 150)";
    document.getElementById("experienceBarFillingUp").style.backgroundColor = "rgb(145, 0, 150)";

    IsMonsterCUnlocked = true;
  }
  if (currentLevel >= 8 && !IsMonsterDUnlocked) {
    setInterval(btnFightMonsterD, 1000);
    setInterval(saveForMonsterD, 12000);

    document.getElementById("monsterContainerD").classList.remove("visibilityHidden");
    document.getElementById("monsterContainerD").classList.add("visibilityVisible");

    document.getElementById("containerForMonsterDUpgrade").classList.remove("visibilityHidden");
    document.getElementById("containerForMonsterDUpgrade").classList.add("visibilityVisible");

    document.getElementById("currentLevel").style.color = "rgb(133, 0, 0)";
    document.getElementById("experienceBarFillingUp").style.backgroundColor = "rgb(133, 0, 0)";

    IsMonsterDUnlocked = true;
  }
  if (currentLevel >= 11 && !IsMonsterEUnlocked) {
    setInterval(btnFightMonsterE, 1000);
    setInterval(saveForMonsterE, 12000);

    document.getElementById("monsterContainerE").classList.remove("visibilityHidden");
    document.getElementById("monsterContainerE").classList.add("visibilityVisible");

    document.getElementById("containerForMonsterEUpgrade").classList.remove("visibilityHidden");
    document.getElementById("containerForMonsterEUpgrade").classList.add("visibilityVisible");

    document.getElementById("currentLevel").style.color = "rgb(168, 76, 0)";
    document.getElementById("experienceBarFillingUp").style.backgroundColor = "rgb(168, 76, 0)";

    IsMonsterEUnlocked = true;
  }
  if (currentLevel >= 15 && !IsMonsterFUnlocked) {
    setInterval(btnFightMonsterF, 1000);
    setInterval(saveForMonsterF, 12000);

    document.getElementById("monsterContainerF").classList.remove("visibilityHidden");
    document.getElementById("monsterContainerF").classList.add("visibilityVisible");

    document.getElementById("containerForMonsterFUpgrade").classList.remove("visibilityHidden");
    document.getElementById("containerForMonsterFUpgrade").classList.add("visibilityVisible");

    document.getElementById("currentLevel").style.color = "rgb(255, 224, 87)";
    document.getElementById("experienceBarFillingUp").style.backgroundColor = "rgb(255, 224, 87)";

    IsMonsterFUnlocked = true;
  }
}
setInterval(lookIfAnyUnlockForMonsters, 325);

/* Save system */
function saveProgressForCommonStats() {
  /* Create the "saveProgress" object and create "key: value," pair with something as a key and a variable as a value */
  let saveProgress = {
    KeyCurrentExp: currentExperience,
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
    let saveDeserialized = JSON.parse(localStorage.getItem("saveForCommonStats"));
    /* Reinitialise "saveProgress" as our new "saveDeserialized" to close the loop! */
    /* loop is: Values -> saveProgress -> saveSerialized -> localStorage -> saveDeserialized -> saveProgress -> Values */
    saveProgress = saveDeserialized;
    /* Reinitialised the value of the saved object using our saveDeserialized object which is equal to our beginning "saveProgress" */
    /* Recall Global Values For Common Stats from localStorage*/
    currentExperience = saveProgress.KeyCurrentExp;
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
setInterval(saveProgressForCommonStats, 15000);

/* Area for boutique */
let upgradeShop = document.getElementById("upgradeShop");
let containerForMonsters = document.getElementById("containerForMonsters");
let buttonToReturn = document.getElementById("buttonToReturn");
let buttonToUpgradeShop = document.getElementById("buttonToUpgradeShop");

buttonToReturn.addEventListener("click", function () {
  containerForMonsters.classList.remove("displayNone");
  containerForMonsters.classList.add("displayFlex");
  upgradeShop.classList.remove("displayFlex");
  upgradeShop.classList.add("displayNone");
});

buttonToUpgradeShop.addEventListener("click", function () {
  // BtnBoutiqueForUpgrades
  containerForMonsters.classList.remove("displayFlex");
  containerForMonsters.classList.add("displayNone");
  upgradeShop.classList.remove("displayNone");
  upgradeShop.classList.add("displayFlex");
});

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
    let saveForMonsterADeserialized = JSON.parse(localStorage.getItem("saveForMonsterA"));

    killNumberMonsterA = saveForMonsterADeserialized.KeyKillNumberMonsterA;
    baseExpGivenByMonsterA = saveForMonsterADeserialized.KeyBaseExpGivenByMonsterA;
    costForUpgradeMonsterA = saveForMonsterADeserialized.KeyCostForUpgradeMonsterA;
    upgradeNumberMonsterA = saveForMonsterADeserialized.KeyUpgradeNumberMonsterA;
  } else {
    saveForMonsterA();
  }
}
setTimeout(loadForMonsterA, 250);

let btnUpgradeMonsterAInHTML = document.getElementById("btnUpgradeMonsterA");
btnUpgradeMonsterAInHTML.addEventListener("click", () => {
  upgradesForMonsterA();
});

function displayForStatsMonsterA() {
  document.getElementById("btnUpgradeMonsterA").innerHTML = costForUpgradeMonsterA;
  document.getElementById("monsterAUpgrade").innerHTML = upgradeNumberMonsterA;
  document.getElementById("monsterAKill").innerHTML = killNumberMonsterA;
}
setInterval(displayForStatsMonsterA, 325);

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
  if (upgradeNumberMonsterA > 10 && upgradeNumberMonsterA <= 100 && currentCoins >= costForUpgradeMonsterA) {
    baseExpGivenByMonsterA = baseExpGivenByMonsterA + 1;
    currentCoins = currentCoins - costForUpgradeMonsterA;
    upgradeNumberMonsterA++;
    costForUpgradeMonsterA = costForUpgradeMonsterA + 2;
    document.getElementById("btnUpgradeMonsterA").innerHTML = costForUpgradeMonsterA;
    document.getElementById("monsterAUpgrade").innerHTML = upgradeNumberMonsterA;
  }
  if (upgradeNumberMonsterA > 100 && upgradeNumberMonsterA <= 1000 && currentCoins >= costForUpgradeMonsterA) {
    baseExpGivenByMonsterA = baseExpGivenByMonsterA + 1;
    currentCoins = currentCoins - costForUpgradeMonsterA;
    upgradeNumberMonsterA++;
    costForUpgradeMonsterA = costForUpgradeMonsterA + 4;
    document.getElementById("btnUpgradeMonsterA").innerHTML = costForUpgradeMonsterA;
    document.getElementById("monsterAUpgrade").innerHTML = upgradeNumberMonsterA;
  }
}

if (killNumberMonsterA == 0) {
  document.getElementById("monsterAExp").innerHTML = baseExpGivenByMonsterA;
}
function btnFightMonsterA() {
  if (killNumberMonsterA <= 10) {
    /* initial kill value before doubling... */
    currentExperience = currentExperience + baseExpGivenByMonsterA;
    killNumberMonsterA++;
    document.getElementById("monsterAExp").innerHTML = baseExpGivenByMonsterA;
    currentCoins = currentCoins + coinsGivenByAllMonster;
  }
  if (killNumberMonsterA > 10 && killNumberMonsterA <= 100) {
    /* power of 10 one time */
    let expGivenByMonsterDoubled = baseExpGivenByMonsterA * 2;
    currentExperience = currentExperience + expGivenByMonsterDoubled;
    document.getElementById("monsterAExp").innerHTML = expGivenByMonsterDoubled;
    killNumberMonsterA++;
    currentCoins = currentCoins + coinsGivenByAllMonster;
  }
  if (killNumberMonsterA > 100 && killNumberMonsterA <= 1000) {
    /* power of 10 two times */
    let expGivenByMonsterQuadrupled = baseExpGivenByMonsterA * 4;
    currentExperience = currentExperience + expGivenByMonsterQuadrupled;
    document.getElementById("monsterAExp").innerHTML = expGivenByMonsterQuadrupled;
    killNumberMonsterA++;
    currentCoins = currentCoins + coinsGivenByAllMonster;
  }
  if (killNumberMonsterA > 1000 && killNumberMonsterA <= 10000) {
    /* power of 10 three times */
    let expGivenByMonsterTimesEight = baseExpGivenByMonsterA * 8;
    currentExperience = currentExperience + expGivenByMonsterTimesEight;
    document.getElementById("monsterAExp").innerHTML = expGivenByMonsterTimesEight;
    killNumberMonsterA++;
    currentCoins = currentCoins + coinsGivenByAllMonster;
  }
  if (killNumberMonsterA > 10000 && killNumberMonsterA <= 100000) {
    /* power of 10 four times */
    let expGivenByMonsterTimesSixteen = baseExpGivenByMonsterA * 16;
    currentExperience = currentExperience + expGivenByMonsterTimesSixteen;
    document.getElementById("monsterAExp").innerHTML = expGivenByMonsterTimesSixteen;
    killNumberMonsterA++;
    currentCoins = currentCoins + coinsGivenByAllMonster;
  }
  if (killNumberMonsterA > 100000) {
    /* power of 10 four times */
    let expGivenByMonsterTimesThirtyTwo = baseExpGivenByMonsterA * 32;
    currentExperience = currentExperience + expGivenByMonsterTimesThirtyTwo;
    document.getElementById("monsterAExp").innerHTML = expGivenByMonsterTimesThirtyTwo;
    killNumberMonsterA++;
    currentCoins = currentCoins + coinsGivenByAllMonster;
  }
}

/* Monster B */
var killNumberMonsterB = 0;
var baseExpGivenByMonsterB = 2;
var upgradeNumberMonsterB = 0;
var costForUpgradeMonsterB = 2;

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
    let saveForMonsterBDeserialized = JSON.parse(localStorage.getItem("saveForMonsterB"));

    killNumberMonsterB = saveForMonsterBDeserialized.KeyKillNumberMonsterB;
    baseExpGivenByMonsterB = saveForMonsterBDeserialized.KeyBaseExpGivenByMonsterB;
    costForUpgradeMonsterB = saveForMonsterBDeserialized.KeyCostForUpgradeMonsterB;
    upgradeNumberMonsterB = saveForMonsterBDeserialized.KeyUpgradeNumberMonsterB;
  }
  if (!saveExistsForMonsterB) {
    saveForMonsterB();
  }
}

setTimeout(loadForMonsterB, 250);

let btnUpgradeMonsterBInHTML = document.getElementById("btnUpgradeMonsterB");
btnUpgradeMonsterBInHTML.addEventListener("click", () => {
  upgradesForMonsterB();
});

function displayForStatsMonsterB() {
  document.getElementById("btnUpgradeMonsterB").innerHTML = costForUpgradeMonsterB;
  document.getElementById("monsterBUpgrade").innerHTML = upgradeNumberMonsterB;
  document.getElementById("monsterBKill").innerHTML = killNumberMonsterB;
}

setInterval(displayForStatsMonsterB, 325);

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
  if (upgradeNumberMonsterB > 10 && upgradeNumberMonsterB <= 100 && currentCoins >= costForUpgradeMonsterB) {
    baseExpGivenByMonsterB = baseExpGivenByMonsterB + 1;
    currentCoins = currentCoins - costForUpgradeMonsterB;
    upgradeNumberMonsterB++;
    costForUpgradeMonsterB = costForUpgradeMonsterB + 4;
    document.getElementById("btnUpgradeMonsterB").innerHTML = costForUpgradeMonsterB;
    document.getElementById("monsterBUpgrade").innerHTML = upgradeNumberMonsterB;
  }
  if (upgradeNumberMonsterB > 100 && upgradeNumberMonsterB <= 1000 && currentCoins >= costForUpgradeMonsterB) {
    baseExpGivenByMonsterB = baseExpGivenByMonsterB + 1;
    currentCoins = currentCoins - costForUpgradeMonsterB;
    upgradeNumberMonsterB++;
    costForUpgradeMonsterB = costForUpgradeMonsterB + 8;
    document.getElementById("btnUpgradeMonsterB").innerHTML = costForUpgradeMonsterB;
    document.getElementById("monsterBUpgrade").innerHTML = upgradeNumberMonsterB;
  }
}

function btnFightMonsterB() {
  if (killNumberMonsterB <= 10) {
    /* initial kill value before doubling... */
    currentExperience = currentExperience + baseExpGivenByMonsterB;
    killNumberMonsterB++;
    document.getElementById("monsterBExp").innerHTML = baseExpGivenByMonsterB;
    currentCoins = currentCoins + coinsGivenByAllMonster;
  }
  if (killNumberMonsterB > 10 && killNumberMonsterB <= 100) {
    /* power of 10 one time */
    let expGivenByMonsterDoubled = baseExpGivenByMonsterB * 2;
    currentExperience = currentExperience + expGivenByMonsterDoubled;
    document.getElementById("monsterBExp").innerHTML = expGivenByMonsterDoubled;
    killNumberMonsterB++;
    currentCoins = currentCoins + coinsGivenByAllMonster;
  }
  if (killNumberMonsterB > 100 && killNumberMonsterB <= 1000) {
    /* power of 10 two times */
    let expGivenByMonsterQuadrupled = baseExpGivenByMonsterB * 4;
    currentExperience = currentExperience + expGivenByMonsterQuadrupled;
    document.getElementById("monsterBExp").innerHTML = expGivenByMonsterQuadrupled;
    killNumberMonsterB++;
    currentCoins = currentCoins + coinsGivenByAllMonster;
  }
  if (killNumberMonsterB > 1000 && killNumberMonsterB <= 10000) {
    /* power of 10 three times */
    let expGivenByMonsterTimesEight = baseExpGivenByMonsterB * 8;
    currentExperience = currentExperience + expGivenByMonsterTimesEight;
    document.getElementById("monsterBExp").innerHTML = expGivenByMonsterTimesEight;
    killNumberMonsterB++;
    currentCoins = currentCoins + coinsGivenByAllMonster;
  }
  if (killNumberMonsterB > 10000 && killNumberMonsterB <= 100000) {
    /* power of 10 four times */
    let expGivenByMonsterTimesSixteen = baseExpGivenByMonsterB * 16;
    currentExperience = currentExperience + expGivenByMonsterTimesSixteen;
    document.getElementById("monsterBExp").innerHTML = expGivenByMonsterTimesSixteen;
    killNumberMonsterB++;
    currentCoins = currentCoins + coinsGivenByAllMonster;
  }
  if (killNumberMonsterB > 100000) {
    /* power of 10 four times */
    let expGivenByMonsterTimesThirtyTwo = baseExpGivenByMonsterB * 32;
    currentExperience = currentExperience + expGivenByMonsterTimesThirtyTwo;
    document.getElementById("monsterBExp").innerHTML = expGivenByMonsterTimesThirtyTwo;
    killNumberMonsterB++;
    currentCoins = currentCoins + coinsGivenByAllMonster;
  }
}

/* Monster C */
var killNumberMonsterC = 0;
var baseExpGivenByMonsterC = 4;
var upgradeNumberMonsterC = 0;
var costForUpgradeMonsterC = 4;

function saveForMonsterC() {
  let saveForMonsterC = {
    KeyKillNumberMonsterC: killNumberMonsterC,
    KeyBaseExpGivenByMonsterC: baseExpGivenByMonsterC,
    KeyCostForUpgradeMonsterC: costForUpgradeMonsterC,
    KeyUpgradeNumberMonsterC: upgradeNumberMonsterC,
  };
  let saveForMonsterCSerialized = JSON.stringify(saveForMonsterC);
  localStorage.setItem("saveForMonsterC", saveForMonsterCSerialized);
}

setInterval(saveForMonsterC, 15000);

let saveExistsForMonsterC = localStorage.getItem("saveForMonsterC");

function loadForMonsterC() {
  if (saveExistsForMonsterC) {
    let saveForMonsterCDeserialized = JSON.parse(localStorage.getItem("saveForMonsterC"));

    killNumberMonsterC = saveForMonsterCDeserialized.KeyKillNumberMonsterC;
    baseExpGivenByMonsterC = saveForMonsterCDeserialized.KeyBaseExpGivenByMonsterC;
    costForUpgradeMonsterC = saveForMonsterCDeserialized.KeyCostForUpgradeMonsterC;
    upgradeNumberMonsterC = saveForMonsterCDeserialized.KeyUpgradeNumberMonsterC;
  }
  if (!saveExistsForMonsterC) {
    saveForMonsterC();
  }
}

setTimeout(loadForMonsterC, 250);

let btnUpgradeMonsterCInHTML = document.getElementById("btnUpgradeMonsterC");
btnUpgradeMonsterCInHTML.addEventListener("click", () => {
  upgradesForMonsterC();
});

function displayForStatsMonsterC() {
  document.getElementById("btnUpgradeMonsterC").innerHTML = costForUpgradeMonsterC;
  document.getElementById("monsterCUpgrade").innerHTML = upgradeNumberMonsterC;
  document.getElementById("monsterCKill").innerHTML = killNumberMonsterC;
}

setInterval(displayForStatsMonsterC, 325);

function upgradesForMonsterC() {
  if (upgradeNumberMonsterC <= 10 && currentCoins >= costForUpgradeMonsterC) {
    //add one to the base experience given by this monster
    baseExpGivenByMonsterC = baseExpGivenByMonsterC + 1;
    //substract the cost from gold pile
    currentCoins = currentCoins - costForUpgradeMonsterC;
    //add one to the upgrade number and the cost of an upgrade
    upgradeNumberMonsterC = upgradeNumberMonsterC + 1;
    costForUpgradeMonsterC = costForUpgradeMonsterC + 4;
    //update the displays of the cost and the number of upgrades (refers to base experience boost)
  }
  if (upgradeNumberMonsterC > 10 && upgradeNumberMonsterC <= 100 && currentCoins >= costForUpgradeMonsterC) {
    baseExpGivenByMonsterC = baseExpGivenByMonsterC + 1;
    currentCoins = currentCoins - costForUpgradeMonsterC;
    upgradeNumberMonsterC++;
    costForUpgradeMonsterC = costForUpgradeMonsterC + 8;
  }
  if (upgradeNumberMonsterC > 100 && upgradeNumberMonsterC <= 1000 && currentCoins >= costForUpgradeMonsterC) {
    baseExpGivenByMonsterC = baseExpGivenByMonsterC + 1;
    currentCoins = currentCoins - costForUpgradeMonsterC;
    upgradeNumberMonsterC++;
    costForUpgradeMonsterC = costForUpgradeMonsterC + 16;
  }
}

function btnFightMonsterC() {
  if (killNumberMonsterC <= 10) {
    /* initial kill value before doubling... */
    currentExperience = currentExperience + baseExpGivenByMonsterC;
    killNumberMonsterC++;
    document.getElementById("monsterCExp").innerHTML = baseExpGivenByMonsterC;
    currentCoins = currentCoins + coinsGivenByAllMonster;
  }
  if (killNumberMonsterC > 10 && killNumberMonsterC <= 100) {
    /* power of 10 one time */
    let expGivenByMonsterDoubled = baseExpGivenByMonsterC * 2;
    currentExperience = currentExperience + expGivenByMonsterDoubled;
    document.getElementById("monsterCExp").innerHTML = expGivenByMonsterDoubled;
    killNumberMonsterC++;
    currentCoins = currentCoins + coinsGivenByAllMonster;
  }
  if (killNumberMonsterC > 100 && killNumberMonsterC <= 1000) {
    /* power of 10 two times */
    let expGivenByMonsterQuadrupled = baseExpGivenByMonsterC * 4;
    currentExperience = currentExperience + expGivenByMonsterQuadrupled;
    document.getElementById("monsterCExp").innerHTML = expGivenByMonsterQuadrupled;
    killNumberMonsterC++;
    currentCoins = currentCoins + coinsGivenByAllMonster;
  }
  if (killNumberMonsterC > 1000 && killNumberMonsterC <= 10000) {
    /* power of 10 three times */
    let expGivenByMonsterTimesEight = baseExpGivenByMonsterC * 8;
    currentExperience = currentExperience + expGivenByMonsterTimesEight;
    document.getElementById("monsterCExp").innerHTML = expGivenByMonsterTimesEight;
    killNumberMonsterC++;
    currentCoins = currentCoins + coinsGivenByAllMonster;
  }
  if (killNumberMonsterC > 10000 && killNumberMonsterC <= 100000) {
    /* power of 10 four times */
    let expGivenByMonsterTimesSixteen = baseExpGivenByMonsterC * 16;
    currentExperience = currentExperience + expGivenByMonsterTimesSixteen;
    document.getElementById("monsterCExp").innerHTML = expGivenByMonsterTimesSixteen;
    killNumberMonsterC++;
    currentCoins = currentCoins + coinsGivenByAllMonster;
  }
  if (killNumberMonsterC > 100000) {
    /* power of 10 four times */
    let expGivenByMonsterTimesThirtyTwo = baseExpGivenByMonsterC * 32;
    currentExperience = currentExperience + expGivenByMonsterTimesThirtyTwo;
    document.getElementById("monsterCExp").innerHTML = expGivenByMonsterTimesThirtyTwo;
    killNumberMonsterC++;
    currentCoins = currentCoins + coinsGivenByAllMonster;
  }
}


/* Monster D */
var killNumberMonsterD = 0;
var baseExpGivenByMonsterD = 8;
var upgradeNumberMonsterD = 0;
var costForUpgradeMonsterD = 8;

function saveForMonsterD() {
  let saveForMonsterD = {
    KeyKillNumberMonsterD: killNumberMonsterD,
    KeyBaseExpGivenByMonsterD: baseExpGivenByMonsterD,
    KeyCostForUpgradeMonsterD: costForUpgradeMonsterD,
    KeyUpgradeNumberMonsterD: upgradeNumberMonsterD,
  };
  let saveForMonsterDSerialized = JSON.stringify(saveForMonsterD);
  localStorage.setItem("saveForMonsterD", saveForMonsterDSerialized);
}

setInterval(saveForMonsterD, 15000);

let saveExistsForMonsterD = localStorage.getItem("saveForMonsterD");

function loadForMonsterD() {
  if (saveExistsForMonsterD) {
    let saveForMonsterDDeserialized = JSON.parse(localStorage.getItem("saveForMonsterD"));
    
    killNumberMonsterD = saveForMonsterDDeserialized.KeyKillNumberMonsterD;
    baseExpGivenByMonsterD = saveForMonsterDDeserialized.KeyBaseExpGivenByMonsterD;
    costForUpgradeMonsterD = saveForMonsterDDeserialized.KeyCostForUpgradeMonsterD;
    upgradeNumberMonsterD = saveForMonsterDDeserialized.KeyUpgradeNumberMonsterD;
  }
  if (!saveExistsForMonsterD) {
    saveForMonsterD();
  }
}

setTimeout(loadForMonsterD, 250);

let btnUpgradeMonsterDInHTML = document.getElementById("btnUpgradeMonsterD");
btnUpgradeMonsterDInHTML.addEventListener("click", () => {
  upgradesForMonsterD();
});

function displayForStatsMonsterD() {
  document.getElementById("btnUpgradeMonsterD").innerHTML = costForUpgradeMonsterD;
  document.getElementById("monsterDUpgrade").innerHTML = upgradeNumberMonsterD;
  document.getElementById("monsterDKill").innerHTML = killNumberMonsterD;
}

setInterval(displayForStatsMonsterD, 325);

function upgradesForMonsterD() {
  if (upgradeNumberMonsterD <= 10 && currentCoins >= costForUpgradeMonsterD) {
    //add one to the base experience given by this monster
    baseExpGivenByMonsterC = baseExpGivenByMonsterC + 1;
    //substract the cost from gold pile
    currentCoins = currentCoins - costForUpgradeMonsterD;
    //add one to the upgrade number and the cost of an upgrade
    upgradeNumberMonsterD = upgradeNumberMonsterD + 1;
    costForUpgradeMonsterD = costForUpgradeMonsterD + 8;
    //update the displays of the cost and the number of upgrades (refers to base experience boost)
  }
  if (upgradeNumberMonsterD > 10 && upgradeNumberMonsterD <= 100 && currentCoins >= costForUpgradeMonsterD) {
    baseExpGivenByMonsterD = baseExpGivenByMonsterD + 1;
    currentCoins = currentCoins - costForUpgradeMonsterD;
    upgradeNumberMonsterD++;
    costForUpgradeMonsterD = costForUpgradeMonsterD + 16;
  }
  if (upgradeNumberMonsterD > 100 && upgradeNumberMonsterD <= 1000 && currentCoins >= costForUpgradeMonsterD) {
    baseExpGivenByMonsterD = baseExpGivenByMonsterD + 1;
    currentCoins = currentCoins - costForUpgradeMonsterD;
    upgradeNumberMonsterD++;
    costForUpgradeMonsterD = costForUpgradeMonsterD + 32;
  }
}

function btnFightMonsterD() {
  if (killNumberMonsterD <= 10) {
    /* initial kill value before doubling... */
    currentExperience = currentExperience + baseExpGivenByMonsterD;
    killNumberMonsterD++;
    document.getElementById("monsterDExp").innerHTML = baseExpGivenByMonsterD;
    currentCoins = currentCoins + coinsGivenByAllMonster;
  }
  if (killNumberMonsterD > 10 && killNumberMonsterD <= 100) {
    /* power of 10 one time */
    let expGivenByMonsterDoubled = baseExpGivenByMonsterD * 2;
    currentExperience = currentExperience + expGivenByMonsterDoubled;
    document.getElementById("monsterDExp").innerHTML = expGivenByMonsterDoubled;
    killNumberMonsterD++;
    currentCoins = currentCoins + coinsGivenByAllMonster;
  }
  if (killNumberMonsterD > 100 && killNumberMonsterD <= 1000) {
    /* power of 10 two times */
    let expGivenByMonsterQuadrupled = baseExpGivenByMonsterD * 4;
    currentExperience = currentExperience + expGivenByMonsterQuadrupled;
    document.getElementById("monsterDExp").innerHTML = expGivenByMonsterQuadrupled;
    killNumberMonsterD++;
    currentCoins = currentCoins + coinsGivenByAllMonster;
  }
  if (killNumberMonsterD > 1000 && killNumberMonsterD <= 10000) {
    /* power of 10 three times */
    let expGivenByMonsterTimesEight = baseExpGivenByMonsterD * 8;
    currentExperience = currentExperience + expGivenByMonsterTimesEight;
    document.getElementById("monsterDExp").innerHTML = expGivenByMonsterTimesEight;
    killNumberMonsterD++;
    currentCoins = currentCoins + coinsGivenByAllMonster;
  }
  if (killNumberMonsterD > 10000 && killNumberMonsterD <= 100000) {
    /* power of 10 four times */
    let expGivenByMonsterTimesSixteen = baseExpGivenByMonsterD * 16;
    currentExperience = currentExperience + expGivenByMonsterTimesSixteen;
    document.getElementById("monsterDExp").innerHTML = expGivenByMonsterTimesSixteen;
    killNumberMonsterD++;
    currentCoins = currentCoins + coinsGivenByAllMonster;
  }
  if (killNumberMonsterD > 100000) {
    /* power of 10 four times */
    let expGivenByMonsterTimesThirtyTwo = baseExpGivenByMonsterD * 32;
    currentExperience = currentExperience + expGivenByMonsterTimesThirtyTwo;
    document.getElementById("monsterDExp").innerHTML = expGivenByMonsterTimesThirtyTwo;
    killNumberMonsterD++;
    currentCoins = currentCoins + coinsGivenByAllMonster;
  }
}

/* Monster E */
var killNumberMonsterE = 0;
var baseExpGivenByMonsterE = 16;
var upgradeNumberMonsterE = 0;
var costForUpgradeMonsterE = 16;

function saveForMonsterE() {
  let saveForMonsterE = {
    KeyKillNumberMonsterE: killNumberMonsterE,
    KeyBaseExpGivenByMonsterE: baseExpGivenByMonsterE,
    KeyCostForUpgradeMonsterE: costForUpgradeMonsterE,
    KeyUpgradeNumberMonsterE: upgradeNumberMonsterE,
  };
  let saveForMonsterESerialized = JSON.stringify(saveForMonsterE);
  localStorage.setItem("saveForMonsterE", saveForMonsterESerialized);
}

setInterval(saveForMonsterE, 15000);

let saveExistsForMonsterE = localStorage.getItem("saveForMonsterE");

function loadForMonsterE() {
  if (saveExistsForMonsterE) {
    let saveForMonsterEDeserialized = JSON.parse(localStorage.getItem("saveForMonsterE"));

    killNumberMonsterE = saveForMonsterEDeserialized.KeyKillNumberMonsterE;
    baseExpGivenByMonsterE = saveForMonsterEDeserialized.KeyBaseExpGivenByMonsterE;
    costForUpgradeMonsterE = saveForMonsterEDeserialized.KeyCostForUpgradeMonsterE;
    upgradeNumberMonsterE = saveForMonsterEDeserialized.KeyUpgradeNumberMonsterE;
  }
  if (!saveExistsForMonsterE) {
    saveForMonsterE();
  }
}

setTimeout(loadForMonsterE, 250);

let btnUpgradeMonsterEInHTML = document.getElementById("btnUpgradeMonsterE");
btnUpgradeMonsterEInHTML.addEventListener("click", () => {
  upgradesForMonsterE();
});

function displayForStatsMonsterE() {
  document.getElementById("btnUpgradeMonsterE").innerHTML = costForUpgradeMonsterE;
  document.getElementById("monsterEUpgrade").innerHTML = upgradeNumberMonsterE;
  document.getElementById("monsterEKill").innerHTML = killNumberMonsterE;
}

setInterval(displayForStatsMonsterE, 325);

function upgradesForMonsterE() {
  if (upgradeNumberMonsterE <= 10 && currentCoins >= costForUpgradeMonsterE) {
    //add one to the base experience given by this monster
    baseExpGivenByMonsterE = baseExpGivenByMonsterE + 1;
    //substract the cost from gold pile
    currentCoins = currentCoins - costForUpgradeMonsterE;
    //add one to the upgrade number and the cost of an upgrade
    upgradeNumberMonsterE = upgradeNumberMonsterE + 1;
    costForUpgradeMonsterE = costForUpgradeMonsterE + 16;
    //update the displays of the cost and the number of upgrades (refers to base experience boost)
  }
  if (upgradeNumberMonsterE > 10 && upgradeNumberMonsterE <= 100 && currentCoins >= costForUpgradeMonsterE) {
    baseExpGivenByMonsterE = baseExpGivenByMonsterE + 1;
    currentCoins = currentCoins - costForUpgradeMonsterE;
    upgradeNumberMonsterE++;
    costForUpgradeMonsterE = costForUpgradeMonsterE + 32;
  }
  if (upgradeNumberMonsterE > 100 && upgradeNumberMonsterE <= 1000 && currentCoins >= costForUpgradeMonsterE) {
    baseExpGivenByMonsterE = baseExpGivenByMonsterE + 1;
    currentCoins = currentCoins - costForUpgradeMonsterE;
    upgradeNumberMonsterE++;
    costForUpgradeMonsterE = costForUpgradeMonsterE + 64;
  }
}

function btnFightMonsterE() {
  if (killNumberMonsterE <= 10) {
    /* initial kill value before doubling... */
    currentExperience = currentExperience + baseExpGivenByMonsterE;
    killNumberMonsterE++;
    document.getElementById("monsterEExp").innerHTML = baseExpGivenByMonsterE;
    currentCoins = currentCoins + coinsGivenByAllMonster;
  }
  if (killNumberMonsterE > 10 && killNumberMonsterE <= 100) {
    /* power of 10 one time */
    let expGivenByMonsterDoubled = baseExpGivenByMonsterE * 2;
    currentExperience = currentExperience + expGivenByMonsterDoubled;
    document.getElementById("monsterEExp").innerHTML = expGivenByMonsterDoubled;
    killNumberMonsterE++;
    currentCoins = currentCoins + coinsGivenByAllMonster;
  }
  if (killNumberMonsterE > 100 && killNumberMonsterE <= 1000) {
    /* power of 10 two times */
    let expGivenByMonsterQuadrupled = baseExpGivenByMonsterE * 4;
    currentExperience = currentExperience + expGivenByMonsterQuadrupled;
    document.getElementById("monsterEExp").innerHTML = expGivenByMonsterQuadrupled;
    killNumberMonsterE++;
    currentCoins = currentCoins + coinsGivenByAllMonster;
  }
  if (killNumberMonsterE > 1000 && killNumberMonsterE <= 10000) {
    /* power of 10 three times */
    let expGivenByMonsterTimesEight = baseExpGivenByMonsterE * 8;
    currentExperience = currentExperience + expGivenByMonsterTimesEight;
    document.getElementById("monsterEExp").innerHTML = expGivenByMonsterTimesEight;
    killNumberMonsterE++;
    currentCoins = currentCoins + coinsGivenByAllMonster;
  }
  if (killNumberMonsterE > 10000 && killNumberMonsterE <= 100000) {
    /* power of 10 four times */
    let expGivenByMonsterTimesSixteen = baseExpGivenByMonsterE * 16;
    currentExperience = currentExperience + expGivenByMonsterTimesSixteen;
    document.getElementById("monsterEExp").innerHTML = expGivenByMonsterTimesSixteen;
    killNumberMonsterE++;
    currentCoins = currentCoins + coinsGivenByAllMonster;
  }
  if (killNumberMonsterE > 100000) {
    /* power of 10 four times */
    let expGivenByMonsterTimesThirtyTwo = baseExpGivenByMonsterE * 32;
    currentExperience = currentExperience + expGivenByMonsterTimesThirtyTwo;
    document.getElementById("monsterEExp").innerHTML = expGivenByMonsterTimesThirtyTwo;
    killNumberMonsterE++;
    currentCoins = currentCoins + coinsGivenByAllMonster;
  }
}

/* Monster F */
var killNumberMonsterF = 0;
var baseExpGivenByMonsterF = 32;
var upgradeNumberMonsterF = 0;
var costForUpgradeMonsterF = 32;

function saveForMonsterF() {
  let saveForMonsterF = {
    KeyKillNumberMonsterF: killNumberMonsterF,
    KeyBaseExpGivenByMonsterF: baseExpGivenByMonsterF,
    KeyCostForUpgradeMonsterF: costForUpgradeMonsterF,
    KeyUpgradeNumberMonsterF: upgradeNumberMonsterF,
  };
  let saveForMonsterFSerialized = JSON.stringify(saveForMonsterF);
  localStorage.setItem("saveForMonsterF", saveForMonsterFSerialized);
}

setInterval(saveForMonsterF, 15000);

let saveExistsForMonsterF = localStorage.getItem("saveForMonsterF");

function loadForMonsterF() {
  if (saveExistsForMonsterF) {
    let saveForMonsterFDeserialized = JSON.parse(localStorage.getItem("saveForMonsterF"));

    killNumberMonsterF = saveForMonsterFDeserialized.KeyKillNumberMonsterF;
    baseExpGivenByMonsterF = saveForMonsterFDeserialized.KeyBaseExpGivenByMonsterF;
    costForUpgradeMonsterF = saveForMonsterFDeserialized.KeyCostForUpgradeMonsterF;
    upgradeNumberMonsterF = saveForMonsterFDeserialized.KeyUpgradeNumberMonsterF;
  }
  if (!saveExistsForMonsterF) {
    saveForMonsterF();
  }
}

setTimeout(loadForMonsterF, 250);

let btnUpgradeMonsterFInHTML = document.getElementById("btnUpgradeMonsterF");
btnUpgradeMonsterFInHTML.addEventListener("click", () => {
  upgradesForMonsterF();
});

function displayForStatsMonsterF() {
  document.getElementById("btnUpgradeMonsterF").innerHTML = costForUpgradeMonsterF;
  document.getElementById("monsterFUpgrade").innerHTML = upgradeNumberMonsterF;
  document.getElementById("monsterFKill").innerHTML = killNumberMonsterF;
}

setInterval(displayForStatsMonsterF, 325);

function upgradesForMonsterF() {
  if (upgradeNumberMonsterF <= 10 && currentCoins >= costForUpgradeMonsterF) {
    //add one to the base experience given by this monster
    baseExpGivenByMonsterF = baseExpGivenByMonsterF + 1;
    //substract the cost from gold pile
    currentCoins = currentCoins - costForUpgradeMonsterF;
    //add one to the upgrade number and the cost of an upgrade
    upgradeNumberMonsterF = upgradeNumberMonsterF + 1;
    costForUpgradeMonsterF = costForUpgradeMonsterF + 32;
    //update the displays of the cost and the number of upgrades (refers to base experience boost)
  }
  if (upgradeNumberMonsterF > 10 && upgradeNumberMonsterF <= 100 && currentCoins >= costForUpgradeMonsterF) {
    baseExpGivenByMonsterF = baseExpGivenByMonsterF + 1;
    currentCoins = currentCoins - costForUpgradeMonsterF;
    upgradeNumberMonsterF++;
    costForUpgradeMonsterF = costForUpgradeMonsterF + 64;
  }
  if (upgradeNumberMonsterF > 100 && upgradeNumberMonsterF <= 1000 && currentCoins >= costForUpgradeMonsterF) {
    baseExpGivenByMonsterF = baseExpGivenByMonsterF + 1;
    currentCoins = currentCoins - costForUpgradeMonsterF;
    upgradeNumberMonsterF++;
    costForUpgradeMonsterF = costForUpgradeMonsterF + 128;
  }
}

function btnFightMonsterF() {
  if (killNumberMonsterF <= 10) {
    /* initial kill value before doubling... */
    currentExperience = currentExperience + baseExpGivenByMonsterF;
    killNumberMonsterF++;
    document.getElementById("monsterFExp").innerHTML = baseExpGivenByMonsterF;
    currentCoins = currentCoins + coinsGivenByAllMonster;
  }
  if (killNumberMonsterF > 10 && killNumberMonsterF <= 100) {
    /* power of 10 one time */
    let expGivenByMonsterDoubled = baseExpGivenByMonsterF * 2;
    currentExperience = currentExperience + expGivenByMonsterDoubled;
    document.getElementById("monsterFExp").innerHTML = expGivenByMonsterDoubled;
    killNumberMonsterF++;
    currentCoins = currentCoins + coinsGivenByAllMonster;
  }
  if (killNumberMonsterF > 100 && killNumberMonsterF <= 1000) {
    /* power of 10 two times */
    let expGivenByMonsterQuadrupled = baseExpGivenByMonsterF * 4;
    currentExperience = currentExperience + expGivenByMonsterQuadrupled;
    document.getElementById("monsterFExp").innerHTML = expGivenByMonsterQuadrupled;
    killNumberMonsterF++;
    currentCoins = currentCoins + coinsGivenByAllMonster;
  }
  if (killNumberMonsterF > 1000 && killNumberMonsterF <= 10000) {
    /* power of 10 three times */
    let expGivenByMonsterTimesEight = baseExpGivenByMonsterF * 8;
    currentExperience = currentExperience + expGivenByMonsterTimesEight;
    document.getElementById("monsterFExp").innerHTML = expGivenByMonsterTimesEight;
    killNumberMonsterF++;
    currentCoins = currentCoins + coinsGivenByAllMonster;
  }
  if (killNumberMonsterF > 10000 && killNumberMonsterF <= 100000) {
    /* power of 10 four times */
    let expGivenByMonsterTimesSixteen = baseExpGivenByMonsterF * 16;
    currentExperience = currentExperience + expGivenByMonsterTimesSixteen;
    document.getElementById("monsterFExp").innerHTML = expGivenByMonsterTimesSixteen;
    killNumberMonsterF++;
    currentCoins = currentCoins + coinsGivenByAllMonster;
  }
  if (killNumberMonsterF > 100000) {
    /* power of 10 four times */
    let expGivenByMonsterTimesThirtyTwo = baseExpGivenByMonsterF * 32;
    currentExperience = currentExperience + expGivenByMonsterTimesThirtyTwo;
    document.getElementById("monsterFExp").innerHTML = expGivenByMonsterTimesThirtyTwo;
    killNumberMonsterF++;
    currentCoins = currentCoins + coinsGivenByAllMonster;
  }
}

/*  
(Immediately Invoked Function Expression)(); 
"(WrapTheFunctionHere)" in parentheses and "();"" immediately invoke it! 
Making it an Immediately Invoked Function Expression (*Anonymous and dont take place in the global Scope...) 
*/
function saveEverything() {
  saveProgressForCommonStats();
  saveForMonsterA();
  saveForMonsterB();
  saveForMonsterC();
  saveForMonsterD();
  saveForMonsterE();
  saveForMonsterF();
}
