/* Global Required Code Here */
/*level code */
let currentLevel = 1;
let currentExperience = 0;
let requiredExp = 2;

function levelUp() {
  if (currentExperience >= requiredExp) {
    currentLevel++;
    currentExperience = currentExperience - requiredExp;
    requiredExp = requiredExp * 1.5;
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
let IsMonsterGUnlocked = false;
let IsMonsterHUnlocked = false;
let IsMonsterIUnlocked = false;
let IsMonsterJUnlocked = false;
let IsMonsterKUnlocked = false;
let IsMonsterLUnlocked = false;
let IsMonsterMUnlocked = false;
let IsMonsterNUnlocked = false;
let IsMonsterOUnlocked = false;
let IsMonsterPUnlocked = false;
let IsMonsterQUnlocked = false;
let IsMonsterRUnlocked = false;
let IsMonsterSUnlocked = false;
let IsMonsterTUnlocked = false;
let IsMonsterUUnlocked = false;
let IsMonsterVUnlocked = false;
let IsMonsterWUnlocked = false;
let IsMonsterXUnlocked = false;
let IsMonsterYUnlocked = false;
let IsMonsterZUnlocked = false;

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
  if (currentLevel >= 7 && !IsMonsterDUnlocked) {
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
  if (currentLevel >= 10 && !IsMonsterEUnlocked) {
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
  if (currentLevel >= 13 && !IsMonsterFUnlocked) {
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
    if (currentLevel >= 16 && !IsMonsterGUnlocked) {
    setInterval(btnFightMonsterG, 1000);
    setInterval(saveForMonsterG, 12000);

    document.getElementById("monsterContainerG").classList.remove("visibilityHidden");
    document.getElementById("monsterContainerG").classList.add("visibilityVisible");

    document.getElementById("containerForMonsterGUpgrade").classList.remove("visibilityHidden");
    document.getElementById("containerForMonsterGUpgrade").classList.add("visibilityVisible");

    document.getElementById("currentLevel").style.color = "rgb(255, 224, 87)";
    document.getElementById("experienceBarFillingUp").style.backgroundColor = "rgb(255, 224, 87)";

    IsMonsterGUnlocked = true;
  }
  if (currentLevel >= 19 && !IsMonsterHUnlocked) {
    setInterval(btnFightMonsterH, 1000);
    setInterval(saveForMonsterH, 12000);

    document.getElementById("monsterContainerH").classList.remove("visibilityHidden");
    document.getElementById("monsterContainerH").classList.add("visibilityVisible");

    document.getElementById("containerForMonsterHUpgrade").classList.remove("visibilityHidden");
    document.getElementById("containerForMonsterHUpgrade").classList.add("visibilityVisible");

    document.getElementById("currentLevel").style.color = "rgb(255, 224, 87)";
    document.getElementById("experienceBarFillingUp").style.backgroundColor = "rgb(255, 224, 87)";

    IsMonsterHUnlocked = true;
  }
  if (currentLevel >= 22 && !IsMonsterIUnlocked) {
    setInterval(btnFightMonsterI, 1000);
    setInterval(saveForMonsterI, 12000);

    document.getElementById("monsterContainerI").classList.remove("visibilityHidden");
    document.getElementById("monsterContainerI").classList.add("visibilityVisible");

    document.getElementById("containerForMonsterIUpgrade").classList.remove("visibilityHidden");
    document.getElementById("containerForMonsterIUpgrade").classList.add("visibilityVisible");

    document.getElementById("currentLevel").style.color = "rgb(255, 224, 87)";
    document.getElementById("experienceBarFillingUp").style.backgroundColor = "rgb(255, 224, 87)";

    IsMonsterIUnlocked = true;
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

/* Monster G */
var killNumberMonsterG = 0;
var baseExpGivenByMonsterG = 32;
var upgradeNumberMonsterG = 0;
var costForUpgradeMonsterG = 32;

function saveForMonsterG() {
  let saveForMonsterG = {
    KeyKillNumberMonsterG: killNumberMonsterG,
    KeyBaseExpGivenByMonsterG: baseExpGivenByMonsterG,
    KeyCostForUpgradeMonsterG: costForUpgradeMonsterG,
    KeyUpgradeNumberMonsterG: upgradeNumberMonsterG,
  };
  let saveForMonsterGSerialized = JSON.stringify(saveForMonsterG);
  localStorage.setItem("saveForMonsterG", saveForMonsterGSerialized);
}

setInterval(saveForMonsterG, 15000);

let saveExistsForMonsterG = localStorage.getItem("saveForMonsterG");

function loadForMonsterG() {
  if (saveExistsForMonsterG) {
    let saveForMonsterGDeserialized = JSON.parse(localStorage.getItem("saveForMonsterG"));

    killNumberMonsterG = saveForMonsterGDeserialized.KeyKillNumberMonsterG;
    baseExpGivenByMonsterG = saveForMonsterGDeserialized.KeyBaseExpGivenByMonsterG;
    costForUpgradeMonsterG = saveForMonsterGDeserialized.KeyCostForUpgradeMonsterG;
    upgradeNumberMonsterG = saveForMonsterGDeserialized.KeyUpgradeNumberMonsterG;
  }
  if (!saveExistsForMonsterG) {
    saveForMonsterG();
  }
}

setTimeout(loadForMonsterG, 250);

let btnUpgradeMonsterGInHTML = document.getElementById("btnUpgradeMonsterG");
btnUpgradeMonsterGInHTML.addEventListener("click", () => {
  upgradesForMonsterG();
});

function displayForStatsMonsterG() {
  document.getElementById("btnUpgradeMonsterG").innerHTML = costForUpgradeMonsterG;
  document.getElementById("monsterGUpgrade").innerHTML = upgradeNumberMonsterG;
  document.getElementById("monsterGKill").innerHTML = killNumberMonsterG;
}

setInterval(displayForStatsMonsterG, 325);

function upgradesForMonsterG() {
  if (upgradeNumberMonsterG <= 10 && currentCoins >= costForUpgradeMonsterG) {
    //add one to the base experience given by this monster
    baseExpGivenByMonsterG = baseExpGivenByMonsterG + 1;
    //subtract the cost from gold pile
    currentCoins = currentCoins - costForUpgradeMonsterG;
    //add one to the upgrade number and the cost of an upgrade
    upgradeNumberMonsterG = upgradeNumberMonsterG + 1;
    costForUpgradeMonsterG = costForUpgradeMonsterG + 32;
    //update the displays of the cost and the number of upgrades (refers to base experience boost)
  }
  if (upgradeNumberMonsterG > 10 && upgradeNumberMonsterG <= 100 && currentCoins >= costForUpgradeMonsterG) {
    baseExpGivenByMonsterG = baseExpGivenByMonsterG + 1;
    currentCoins = currentCoins - costForUpgradeMonsterG;
    upgradeNumberMonsterG++;
    costForUpgradeMonsterG = costForUpgradeMonsterG + 64;
  }
  if (upgradeNumberMonsterG > 100 && upgradeNumberMonsterG <= 1000 && currentCoins >= costForUpgradeMonsterG) {
    baseExpGivenByMonsterG = baseExpGivenByMonsterG + 1;
    currentCoins = currentCoins - costForUpgradeMonsterG;
    upgradeNumberMonsterG++;
    costForUpgradeMonsterG = costForUpgradeMonsterG + 128;
  }
}

function btnFightMonsterG() {
  if (killNumberMonsterG <= 10) {
    /* initial kill value before doubling... */
    currentExperience = currentExperience + baseExpGivenByMonsterG;
    killNumberMonsterG++;
    document.getElementById("monsterGExp").innerHTML = baseExpGivenByMonsterG;
    currentCoins = currentCoins + coinsGivenByAllMonster;
  }
  if (killNumberMonsterG > 10 && killNumberMonsterG <= 100) {
    /* power of 10 one time */
    let expGivenByMonsterDoubled = baseExpGivenByMonsterG * 2;
    currentExperience = currentExperience + expGivenByMonsterDoubled;
    document.getElementById("monsterGExp").innerHTML = expGivenByMonsterDoubled;
    killNumberMonsterG++;
    currentCoins = currentCoins + coinsGivenByAllMonster;
  }
  if (killNumberMonsterG > 100 && killNumberMonsterG <= 1000) {
    /* power of 10 two times */
    let expGivenByMonsterQuadrupled = baseExpGivenByMonsterG * 4;
    currentExperience = currentExperience + expGivenByMonsterQuadrupled;
    document.getElementById("monsterGExp").innerHTML = expGivenByMonsterQuadrupled;
    killNumberMonsterG++;
    currentCoins = currentCoins + coinsGivenByAllMonster;
  }
  if (killNumberMonsterG > 1000 && killNumberMonsterG <= 10000) {
    /* power of 10 three times */
    let expGivenByMonsterTimesEight = baseExpGivenByMonsterG * 8;
    currentExperience = currentExperience + expGivenByMonsterTimesEight;
    document.getElementById("monsterGExp").innerHTML = expGivenByMonsterTimesEight;
    killNumberMonsterG++;
    currentCoins = currentCoins + coinsGivenByAllMonster;
  }
  if (killNumberMonsterG > 10000 && killNumberMonsterG <= 100000) {
    /* power of 10 four times */
    let expGivenByMonsterTimesSixteen = baseExpGivenByMonsterG * 16;
    currentExperience = currentExperience + expGivenByMonsterTimesSixteen;
    document.getElementById("monsterGExp").innerHTML = expGivenByMonsterTimesSixteen;
    killNumberMonsterG++;
    currentCoins = currentCoins + coinsGivenByAllMonster;
  }
  if (killNumberMonsterG > 100000) {
    /* power of 10 four times */
    let expGivenByMonsterTimesThirtyTwo = baseExpGivenByMonsterG * 32;
    currentExperience = currentExperience + expGivenByMonsterTimesThirtyTwo;
    document.getElementById("monsterGExp").innerHTML = expGivenByMonsterTimesThirtyTwo;
    killNumberMonsterG++;
    currentCoins = currentCoins + coinsGivenByAllMonster;
  }
}
/* Monster H */
var killNumberMonsterH = 0;
var baseExpGivenByMonsterH = 32;
var upgradeNumberMonsterH = 0;
var costForUpgradeMonsterH = 32;

function saveForMonsterH() {
  let saveForMonsterH = {
    KeyKillNumberMonsterH: killNumberMonsterH,
    KeyBaseExpGivenByMonsterH: baseExpGivenByMonsterH,
    KeyCostForUpgradeMonsterH: costForUpgradeMonsterH,
    KeyUpgradeNumberMonsterH: upgradeNumberMonsterH,
  };
  let saveForMonsterHSerialized = JSON.stringify(saveForMonsterH);
  localStorage.setItem("saveForMonsterH", saveForMonsterHSerialized);
}

setInterval(saveForMonsterH, 15000);

let saveExistsForMonsterH = localStorage.getItem("saveForMonsterH");

function loadForMonsterH() {
  if (saveExistsForMonsterH) {
    let saveForMonsterHDeserialized = JSON.parse(localStorage.getItem("saveForMonsterH"));

    killNumberMonsterH = saveForMonsterHDeserialized.KeyKillNumberMonsterH;
    baseExpGivenByMonsterH = saveForMonsterHDeserialized.KeyBaseExpGivenByMonsterH;
    costForUpgradeMonsterH = saveForMonsterHDeserialized.KeyCostForUpgradeMonsterH;
    upgradeNumberMonsterH = saveForMonsterHDeserialized.KeyUpgradeNumberMonsterH;
  }
  if (!saveExistsForMonsterH) {
    saveForMonsterH();
  }
}

setTimeout(loadForMonsterH, 250);

let btnUpgradeMonsterHInHTML = document.getElementById("btnUpgradeMonsterH");
btnUpgradeMonsterHInHTML.addEventListener("click", () => {
  upgradesForMonsterH();
});

function displayForStatsMonsterH() {
  document.getElementById("btnUpgradeMonsterH").innerHTML = costForUpgradeMonsterH;
  document.getElementById("monsterHUpgrade").innerHTML = upgradeNumberMonsterH;
  document.getElementById("monsterHKill").innerHTML = killNumberMonsterH;
}

setInterval(displayForStatsMonsterH, 325);

function upgradesForMonsterH() {
  if (upgradeNumberMonsterH <= 10 && currentCoins >= costForUpgradeMonsterH) {
    //add one to the base experience given by this monster
    baseExpGivenByMonsterH = baseExpGivenByMonsterH + 1;
    //subtract the cost from gold pile
    currentCoins = currentCoins - costForUpgradeMonsterH;
    //add one to the upgrade number and the cost of an upgrade
    upgradeNumberMonsterH = upgradeNumberMonsterH + 1;
    costForUpgradeMonsterH = costForUpgradeMonsterH + 32;
    //update the displays of the cost and the number of upgrades (refers to base experience boost)
  }
  if (upgradeNumberMonsterH > 10 && upgradeNumberMonsterH <= 100 && currentCoins >= costForUpgradeMonsterH) {
    baseExpGivenByMonsterH = baseExpGivenByMonsterH + 1;
    currentCoins = currentCoins - costForUpgradeMonsterH;
    upgradeNumberMonsterH++;
    costForUpgradeMonsterH = costForUpgradeMonsterH + 64;
  }
  if (upgradeNumberMonsterH > 100 && upgradeNumberMonsterH <= 1000 && currentCoins >= costForUpgradeMonsterH) {
    baseExpGivenByMonsterH = baseExpGivenByMonsterH + 1;
    currentCoins = currentCoins - costForUpgradeMonsterH;
    upgradeNumberMonsterH++;
    costForUpgradeMonsterH = costForUpgradeMonsterH + 128;
  }
}

function btnFightMonsterH() {
  if (killNumberMonsterH <= 10) {
    /* initial kill value before doubling... */
    currentExperience = currentExperience + baseExpGivenByMonsterH;
    killNumberMonsterH++;
    document.getElementById("monsterHExp").innerHTML = baseExpGivenByMonsterH;
    currentCoins = currentCoins + coinsGivenByAllMonster;
  }
  if (killNumberMonsterH > 10 && killNumberMonsterH <= 100) {
    /* power of 10 one time */
    let expGivenByMonsterDoubled = baseExpGivenByMonsterH * 2;
    currentExperience = currentExperience + expGivenByMonsterDoubled;
    document.getElementById("monsterHExp").innerHTML = expGivenByMonsterDoubled;
    killNumberMonsterH++;
    currentCoins = currentCoins + coinsGivenByAllMonster;
  }
  if (killNumberMonsterH > 100 && killNumberMonsterH <= 1000) {
    /* power of 10 two times */
    let expGivenByMonsterQuadrupled = baseExpGivenByMonsterH * 4;
    currentExperience = currentExperience + expGivenByMonsterQuadrupled;
    document.getElementById("monsterHExp").innerHTML = expGivenByMonsterQuadrupled;
    killNumberMonsterH++;
    currentCoins = currentCoins + coinsGivenByAllMonster;
  }
  if (killNumberMonsterH > 1000 && killNumberMonsterH <= 10000) {
    /* power of 10 three times */
    let expGivenByMonsterTimesEight = baseExpGivenByMonsterH * 8;
    currentExperience = currentExperience + expGivenByMonsterTimesEight;
    document.getElementById("monsterHExp").innerHTML = expGivenByMonsterTimesEight;
    killNumberMonsterH++;
    currentCoins = currentCoins + coinsGivenByAllMonster;
  }
  if (killNumberMonsterH > 10000 && killNumberMonsterH <= 100000) {
    /* power of 10 four times */
    let expGivenByMonsterTimesSixteen = baseExpGivenByMonsterH * 16;
    currentExperience = currentExperience + expGivenByMonsterTimesSixteen;
    document.getElementById("monsterHExp").innerHTML = expGivenByMonsterTimesSixteen;
    killNumberMonsterH++;
    currentCoins = currentCoins + coinsGivenByAllMonster;
  }
  if (killNumberMonsterH > 100000) {
    /* power of 10 four times */
    let expGivenByMonsterTimesThirtyTwo = baseExpGivenByMonsterH * 32;
    currentExperience = currentExperience + expGivenByMonsterTimesThirtyTwo;
    document.getElementById("monsterHExp").innerHTML = expGivenByMonsterTimesThirtyTwo;
    killNumberMonsterH++;
    currentCoins = currentCoins + coinsGivenByAllMonster;
  }
}

/* Monster I */
var killNumberMonsterI = 0;
var baseExpGivenByMonsterI = 32;
var upgradeNumberMonsterI = 0;
var costForUpgradeMonsterI = 32;

function saveForMonsterI() {
  let saveForMonsterI = {
    KeyKillNumberMonsterI: killNumberMonsterI,
    KeyBaseExpGivenByMonsterI: baseExpGivenByMonsterI,
    KeyCostForUpgradeMonsterI: costForUpgradeMonsterI,
    KeyUpgradeNumberMonsterI: upgradeNumberMonsterI,
  };
  let saveForMonsterISerialized = JSON.stringify(saveForMonsterI);
  localStorage.setItem("saveForMonsterI", saveForMonsterISerialized);
}

setInterval(saveForMonsterI, 15000);

let saveExistsForMonsterI = localStorage.getItem("saveForMonsterI");

function loadForMonsterI() {
  if (saveExistsForMonsterI) {
    let saveForMonsterIDeserialized = JSON.parse(localStorage.getItem("saveForMonsterI"));

    killNumberMonsterI = saveForMonsterIDeserialized.KeyKillNumberMonsterI;
    baseExpGivenByMonsterI = saveForMonsterIDeserialized.KeyBaseExpGivenByMonsterI;
    costForUpgradeMonsterI = saveForMonsterIDeserialized.KeyCostForUpgradeMonsterI;
    upgradeNumberMonsterI = saveForMonsterIDeserialized.KeyUpgradeNumberMonsterI;
  }
  if (!saveExistsForMonsterI) {
    saveForMonsterI();
  }
}

setTimeout(loadForMonsterI, 250);

let btnUpgradeMonsterIInHTML = document.getElementById("btnUpgradeMonsterI");
btnUpgradeMonsterIInHTML.addEventListener("click", () => {
  upgradesForMonsterI();
});

function displayForStatsMonsterI() {
  document.getElementById("btnUpgradeMonsterI").innerHTML = costForUpgradeMonsterI;
  document.getElementById("monsterIUpgrade").innerHTML = upgradeNumberMonsterI;
  document.getElementById("monsterIKill").innerHTML = killNumberMonsterI;
}

setInterval(displayForStatsMonsterI, 325);

function upgradesForMonsterI() {
  if (upgradeNumberMonsterI <= 10 && currentCoins >= costForUpgradeMonsterI) {
    //add one to the base experience given by this monster
    baseExpGivenByMonsterI = baseExpGivenByMonsterI + 1;
    //subtract the cost from gold pile
    currentCoins = currentCoins - costForUpgradeMonsterI;
    //add one to the upgrade number and the cost of an upgrade
    upgradeNumberMonsterI = upgradeNumberMonsterI + 1;
    costForUpgradeMonsterI = costForUpgradeMonsterI + 32;
    //update the displays of the cost and the number of upgrades (refers to base experience boost)
  }
  if (upgradeNumberMonsterI > 10 && upgradeNumberMonsterI <= 100 && currentCoins >= costForUpgradeMonsterI) {
    baseExpGivenByMonsterI = baseExpGivenByMonsterI + 1;
    currentCoins = currentCoins - costForUpgradeMonsterI;
    upgradeNumberMonsterI++;
    costForUpgradeMonsterI = costForUpgradeMonsterI + 64;
  }
  if (upgradeNumberMonsterI > 100 && upgradeNumberMonsterI <= 1000 && currentCoins >= costForUpgradeMonsterI) {
    baseExpGivenByMonsterI = baseExpGivenByMonsterI + 1;
    currentCoins = currentCoins - costForUpgradeMonsterI;
    upgradeNumberMonsterI++;
    costForUpgradeMonsterI = costForUpgradeMonsterI + 128;
  }
}

function btnFightMonsterI() {
  if (killNumberMonsterI <= 10) {
    /* initial kill value before doubling... */
    currentExperience = currentExperience + baseExpGivenByMonsterI;
    killNumberMonsterI++;
    document.getElementById("monsterIExp").innerHTML = baseExpGivenByMonsterI;
    currentCoins = currentCoins + coinsGivenByAllMonster;
  }
  if (killNumberMonsterI > 10 && killNumberMonsterI <= 100) {
    /* power of 10 one time */
    let expGivenByMonsterDoubled = baseExpGivenByMonsterI * 2;
    currentExperience = currentExperience + expGivenByMonsterDoubled;
    document.getElementById("monsterIExp").innerHTML = expGivenByMonsterDoubled;
    killNumberMonsterI++;
    currentCoins = currentCoins + coinsGivenByAllMonster;
  }
  if (killNumberMonsterI > 100 && killNumberMonsterI <= 1000) {
    /* power of 10 two times */
    let expGivenByMonsterQuadrupled = baseExpGivenByMonsterI * 4;
    currentExperience = currentExperience + expGivenByMonsterQuadrupled;
    document.getElementById("monsterIExp").innerHTML = expGivenByMonsterQuadrupled;
    killNumberMonsterI++;
    currentCoins = currentCoins + coinsGivenByAllMonster;
  }
  if (killNumberMonsterI > 1000 && killNumberMonsterI <= 10000) {
    /* power of 10 three times */
    let expGivenByMonsterTimesEight = baseExpGivenByMonsterI * 8;
    currentExperience = currentExperience + expGivenByMonsterTimesEight;
    document.getElementById("monsterIExp").innerHTML = expGivenByMonsterTimesEight;
    killNumberMonsterI++;
    currentCoins = currentCoins + coinsGivenByAllMonster;
  }
  if (killNumberMonsterI > 10000 && killNumberMonsterI <= 100000) {
    /* power of 10 four times */
    let expGivenByMonsterTimesSixteen = baseExpGivenByMonsterI * 16;
    currentExperience = currentExperience + expGivenByMonsterTimesSixteen;
    document.getElementById("monsterIExp").innerHTML = expGivenByMonsterTimesSixteen;
    killNumberMonsterI++;
    currentCoins = currentCoins + coinsGivenByAllMonster;
  }
  if (killNumberMonsterI > 100000) {
    /* power of 10 four times */
    let expGivenByMonsterTimesThirtyTwo = baseExpGivenByMonsterI * 32;
    currentExperience = currentExperience + expGivenByMonsterTimesThirtyTwo;
    document.getElementById("monsterIExp").innerHTML = expGivenByMonsterTimesThirtyTwo;
    killNumberMonsterI++;
    currentCoins = currentCoins + coinsGivenByAllMonster;
  }
}

/* Monster J */
var killNumberMonsterJ = 0;
var baseExpGivenByMonsterJ = 32;
var upgradeNumberMonsterJ = 0;
var costForUpgradeMonsterJ = 32;

function saveForMonsterJ() {
  let saveForMonsterJ = {
    KeyKillNumberMonsterJ: killNumberMonsterJ,
    KeyBaseExpGivenByMonsterJ: baseExpGivenByMonsterJ,
    KeyCostForUpgradeMonsterJ: costForUpgradeMonsterJ,
    KeyUpgradeNumberMonsterJ: upgradeNumberMonsterJ,
  };
  let saveForMonsterJSerialized = JSON.stringify(saveForMonsterJ);
  localStorage.setItem("saveForMonsterJ", saveForMonsterJSerialized);
}

setInterval(saveForMonsterJ, 15000);

let saveExistsForMonsterJ = localStorage.getItem("saveForMonsterJ");

function loadForMonsterJ() {
  if (saveExistsForMonsterJ) {
    let saveForMonsterJDeserialized = JSON.parse(localStorage.getItem("saveForMonsterJ"));

    killNumberMonsterJ = saveForMonsterJDeserialized.KeyKillNumberMonsterJ;
    baseExpGivenByMonsterJ = saveForMonsterJDeserialized.KeyBaseExpGivenByMonsterJ;
    costForUpgradeMonsterJ = saveForMonsterJDeserialized.KeyCostForUpgradeMonsterJ;
    upgradeNumberMonsterJ = saveForMonsterJDeserialized.KeyUpgradeNumberMonsterJ;
  }
  if (!saveExistsForMonsterJ) {
    saveForMonsterJ();
  }
}

setTimeout(loadForMonsterJ, 250);

let btnUpgradeMonsterJInHTML = document.getElementById("btnUpgradeMonsterJ");
btnUpgradeMonsterJInHTML.addEventListener("click", () => {
  upgradesForMonsterJ();
});

function displayForStatsMonsterJ() {
  document.getElementById("btnUpgradeMonsterJ").innerHTML = costForUpgradeMonsterJ;
  document.getElementById("monsterJUpgrade").innerHTML = upgradeNumberMonsterJ;
  document.getElementById("monsterJKill").innerHTML = killNumberMonsterJ;
}

setInterval(displayForStatsMonsterJ, 325);

function upgradesForMonsterJ() {
  if (upgradeNumberMonsterJ <= 10 && currentCoins >= costForUpgradeMonsterJ) {
    //add one to the base experience given by this monster
    baseExpGivenByMonsterJ = baseExpGivenByMonsterJ + 1;
    //subtract the cost from gold pile
    currentCoins = currentCoins - costForUpgradeMonsterJ;
    //add one to the upgrade number and the cost of an upgrade
    upgradeNumberMonsterJ = upgradeNumberMonsterJ + 1;
    costForUpgradeMonsterJ = costForUpgradeMonsterJ + 32;
    //update the displays of the cost and the number of upgrades (refers to base experience boost)
  }
  if (upgradeNumberMonsterJ > 10 && upgradeNumberMonsterJ <= 100 && currentCoins >= costForUpgradeMonsterJ) {
    baseExpGivenByMonsterJ = baseExpGivenByMonsterJ + 1;
    currentCoins = currentCoins - costForUpgradeMonsterJ;
    upgradeNumberMonsterJ++;
    costForUpgradeMonsterJ = costForUpgradeMonsterJ + 64;
  }
  if (upgradeNumberMonsterJ > 100 && upgradeNumberMonsterJ <= 1000 && currentCoins >= costForUpgradeMonsterJ) {
    baseExpGivenByMonsterJ = baseExpGivenByMonsterJ + 1;
    currentCoins = currentCoins - costForUpgradeMonsterJ;
    upgradeNumberMonsterJ++;
    costForUpgradeMonsterJ = costForUpgradeMonsterJ + 128;
  }
}

function btnFightMonsterJ() {
  if (killNumberMonsterJ <= 10) {
    /* initial kill value before doubling... */
    currentExperience = currentExperience + baseExpGivenByMonsterJ;
    killNumberMonsterJ++;
    document.getElementById("monsterJExp").innerHTML = baseExpGivenByMonsterJ;
    currentCoins = currentCoins + coinsGivenByAllMonster;
  }
  if (killNumberMonsterJ > 10 && killNumberMonsterJ <= 100) {
    /* power of 10 one time */
    let expGivenByMonsterDoubled = baseExpGivenByMonsterJ * 2;
    currentExperience = currentExperience + expGivenByMonsterDoubled;
    document.getElementById("monsterJExp").innerHTML = expGivenByMonsterDoubled;
    killNumberMonsterJ++;
    currentCoins = currentCoins + coinsGivenByAllMonster;
  }
  if (killNumberMonsterJ > 100 && killNumberMonsterJ <= 1000) {
    /* power of 10 two times */
    let expGivenByMonsterQuadrupled = baseExpGivenByMonsterJ * 4;
    currentExperience = currentExperience + expGivenByMonsterQuadrupled;
    document.getElementById("monsterJExp").innerHTML = expGivenByMonsterQuadrupled;
    killNumberMonsterJ++;
    currentCoins = currentCoins + coinsGivenByAllMonster;
  }
  if (killNumberMonsterJ > 1000 && killNumberMonsterJ <= 10000) {
    /* power of 10 three times */
    let expGivenByMonsterTimesEight = baseExpGivenByMonsterJ * 8;
    currentExperience = currentExperience + expGivenByMonsterTimesEight;
    document.getElementById("monsterJExp").innerHTML = expGivenByMonsterTimesEight;
    killNumberMonsterJ++;
    currentCoins = currentCoins + coinsGivenByAllMonster;
  }
  if (killNumberMonsterJ > 10000 && killNumberMonsterJ <= 100000) {
    /* power of 10 four times */
    let expGivenByMonsterTimesSixteen = baseExpGivenByMonsterJ * 16;
    currentExperience = currentExperience + expGivenByMonsterTimesSixteen;
    document.getElementById("monsterJExp").innerHTML = expGivenByMonsterTimesSixteen;
    killNumberMonsterJ++;
    currentCoins = currentCoins + coinsGivenByAllMonster;
  }
  if (killNumberMonsterJ > 100000) {
    /* power of 10 four times */
    let expGivenByMonsterTimesThirtyTwo = baseExpGivenByMonsterJ * 32;
    currentExperience = currentExperience + expGivenByMonsterTimesThirtyTwo;
    document.getElementById("monsterJExp").innerHTML = expGivenByMonsterTimesThirtyTwo;
    killNumberMonsterJ++;
    currentCoins = currentCoins + coinsGivenByAllMonster;
  }
}

/* Monster K */
var killNumberMonsterK = 0;
var baseExpGivenByMonsterK = 32;
var upgradeNumberMonsterK = 0;
var costForUpgradeMonsterK = 32;

function saveForMonsterK() {
  let saveForMonsterK = {
    KeyKillNumberMonsterK: killNumberMonsterK,
    KeyBaseExpGivenByMonsterK: baseExpGivenByMonsterK,
    KeyCostForUpgradeMonsterK: costForUpgradeMonsterK,
    KeyUpgradeNumberMonsterK: upgradeNumberMonsterK,
  };
  let saveForMonsterKSerialized = JSON.stringify(saveForMonsterK);
  localStorage.setItem("saveForMonsterK", saveForMonsterKSerialized);
}

setInterval(saveForMonsterK, 15000);

let saveExistsForMonsterK = localStorage.getItem("saveForMonsterK");

function loadForMonsterK() {
  if (saveExistsForMonsterK) {
    let saveForMonsterKDeserialized = JSON.parse(localStorage.getItem("saveForMonsterK"));

    killNumberMonsterK = saveForMonsterKDeserialized.KeyKillNumberMonsterK;
    baseExpGivenByMonsterK = saveForMonsterKDeserialized.KeyBaseExpGivenByMonsterK;
    costForUpgradeMonsterK = saveForMonsterKDeserialized.KeyCostForUpgradeMonsterK;
    upgradeNumberMonsterK = saveForMonsterKDeserialized.KeyUpgradeNumberMonsterK;
  }
  if (!saveExistsForMonsterK) {
    saveForMonsterK();
  }
}

setTimeout(loadForMonsterK, 250);

let btnUpgradeMonsterKInHTML = document.getElementById("btnUpgradeMonsterK");
btnUpgradeMonsterKInHTML.addEventListener("click", () => {
  upgradesForMonsterK();
});

function displayForStatsMonsterK() {
  document.getElementById("btnUpgradeMonsterK").innerHTML = costForUpgradeMonsterK;
  document.getElementById("monsterKUpgrade").innerHTML = upgradeNumberMonsterK;
  document.getElementById("monsterKKill").innerHTML = killNumberMonsterK;
}

setInterval(displayForStatsMonsterK, 325);

function upgradesForMonsterK() {
  if (upgradeNumberMonsterK <= 10 && currentCoins >= costForUpgradeMonsterK) {
    //add one to the base experience given by this monster
    baseExpGivenByMonsterK = baseExpGivenByMonsterK + 1;
    //subtract the cost from gold pile
    currentCoins = currentCoins - costForUpgradeMonsterK;
    //add one to the upgrade number and the cost of an upgrade
    upgradeNumberMonsterK = upgradeNumberMonsterK + 1;
    costForUpgradeMonsterK = costForUpgradeMonsterK + 32;
    //update the displays of the cost and the number of upgrades (refers to base experience boost)
  }
  if (upgradeNumberMonsterK > 10 && upgradeNumberMonsterK <= 100 && currentCoins >= costForUpgradeMonsterK) {
    baseExpGivenByMonsterK = baseExpGivenByMonsterK + 1;
    currentCoins = currentCoins - costForUpgradeMonsterK;
    upgradeNumberMonsterK++;
    costForUpgradeMonsterK = costForUpgradeMonsterK + 64;
  }
  if (upgradeNumberMonsterK > 100 && upgradeNumberMonsterK <= 1000 && currentCoins >= costForUpgradeMonsterK) {
    baseExpGivenByMonsterK = baseExpGivenByMonsterK + 1;
    currentCoins = currentCoins - costForUpgradeMonsterK;
    upgradeNumberMonsterK++;
    costForUpgradeMonsterK = costForUpgradeMonsterK + 128;
  }
}

function btnFightMonsterK() {
  if (killNumberMonsterK <= 10) {
    /* initial kill value before doubling... */
    currentExperience = currentExperience + baseExpGivenByMonsterK;
    killNumberMonsterK++;
    document.getElementById("monsterKExp").innerHTML = baseExpGivenByMonsterK;
    currentCoins = currentCoins + coinsGivenByAllMonster;
  }
  if (killNumberMonsterK > 10 && killNumberMonsterK <= 100) {
    /* power of 10 one time */
    let expGivenByMonsterDoubled = baseExpGivenByMonsterK * 2;
    currentExperience = currentExperience + expGivenByMonsterDoubled;
    document.getElementById("monsterKExp").innerHTML = expGivenByMonsterDoubled;
    killNumberMonsterK++;
    currentCoins = currentCoins + coinsGivenByAllMonster;
  }
  if (killNumberMonsterK > 100 && killNumberMonsterK <= 1000) {
    /* power of 10 two times */
    let expGivenByMonsterQuadrupled = baseExpGivenByMonsterK * 4;
    currentExperience = currentExperience + expGivenByMonsterQuadrupled;
    document.getElementById("monsterKExp").innerHTML = expGivenByMonsterQuadrupled;
    killNumberMonsterK++;
    currentCoins = currentCoins + coinsGivenByAllMonster;
  }
  if (killNumberMonsterK > 1000 && killNumberMonsterK <= 10000) {
    /* power of 10 three times */
    let expGivenByMonsterTimesEight = baseExpGivenByMonsterK * 8;
    currentExperience = currentExperience + expGivenByMonsterTimesEight;
    document.getElementById("monsterKExp").innerHTML = expGivenByMonsterTimesEight;
    killNumberMonsterK++;
    currentCoins = currentCoins + coinsGivenByAllMonster;
  }
    if (killNumberMonsterK > 100000) {
    /* power of 10 four times */
    let expGivenByMonsterTimesThirtyTwo = baseExpGivenByMonsterK * 32;
    currentExperience = currentExperience + expGivenByMonsterTimesThirtyTwo;
    document.getElementById("monsterKExp").innerHTML = expGivenByMonsterTimesThirtyTwo;
    killNumberMonsterK++;
    currentCoins = currentCoins + coinsGivenByAllMonster;
  }
}
/* Monster L */
var killNumberMonsterL = 0;
var baseExpGivenByMonsterL = 32;
var upgradeNumberMonsterL = 0;
var costForUpgradeMonsterL = 32;

function saveForMonsterL() {
  let saveForMonsterL = {
    KeyKillNumberMonsterL: killNumberMonsterL,
    KeyBaseExpGivenByMonsterL: baseExpGivenByMonsterL,
    KeyCostForUpgradeMonsterL: costForUpgradeMonsterL,
    KeyUpgradeNumberMonsterL: upgradeNumberMonsterL,
  };
  let saveForMonsterLSerialized = JSON.stringify(saveForMonsterL);
  localStorage.setItem("saveForMonsterL", saveForMonsterLSerialized);
}

setInterval(saveForMonsterL, 15000);

let saveExistsForMonsterL = localStorage.getItem("saveForMonsterL");

function loadForMonsterL() {
  if (saveExistsForMonsterL) {
    let saveForMonsterLDeserialized = JSON.parse(localStorage.getItem("saveForMonsterL"));

    killNumberMonsterL = saveForMonsterLDeserialized.KeyKillNumberMonsterL;
    baseExpGivenByMonsterL = saveForMonsterLDeserialized.KeyBaseExpGivenByMonsterL;
    costForUpgradeMonsterL = saveForMonsterLDeserialized.KeyCostForUpgradeMonsterL;
    upgradeNumberMonsterL = saveForMonsterLDeserialized.KeyUpgradeNumberMonsterL;
  }
  if (!saveExistsForMonsterL) {
    saveForMonsterL();
  }
}

setTimeout(loadForMonsterL, 250);

let btnUpgradeMonsterLInHTML = document.getElementById("btnUpgradeMonsterL");
btnUpgradeMonsterLInHTML.addEventListener("click", () => {
  upgradesForMonsterL();
});

function displayForStatsMonsterL() {
  document.getElementById("btnUpgradeMonsterL").innerHTML = costForUpgradeMonsterL;
  document.getElementById("monsterLUpgrade").innerHTML = upgradeNumberMonsterL;
  document.getElementById("monsterLKill").innerHTML = killNumberMonsterL;
}

setInterval(displayForStatsMonsterL, 325);

function upgradesForMonsterL() {
  if (upgradeNumberMonsterL <= 10 && currentCoins >= costForUpgradeMonsterL) {
    //add one to the base experience given by this monster
    baseExpGivenByMonsterL = baseExpGivenByMonsterL + 1;
    //subtract the cost from gold pile
    currentCoins = currentCoins - costForUpgradeMonsterL;
    //add one to the upgrade number and the cost of an upgrade
    upgradeNumberMonsterL = upgradeNumberMonsterL + 1;
    costForUpgradeMonsterL = costForUpgradeMonsterL + 32;
    //update the displays of the cost and the number of upgrades (refers to base experience boost)
  }
  if (upgradeNumberMonsterL > 10 && upgradeNumberMonsterL <= 100 && currentCoins >= costForUpgradeMonsterL) {
    baseExpGivenByMonsterL = baseExpGivenByMonsterL + 1;
    currentCoins = currentCoins - costForUpgradeMonsterL;
    upgradeNumberMonsterL++;
    costForUpgradeMonsterL = costForUpgradeMonsterL + 64;
  }
  if (upgradeNumberMonsterL > 100 && upgradeNumberMonsterL <= 1000 && currentCoins >= costForUpgradeMonsterL) {
    baseExpGivenByMonsterL = baseExpGivenByMonsterL + 1;
    currentCoins = currentCoins - costForUpgradeMonsterL;
    upgradeNumberMonsterL++;
    costForUpgradeMonsterL = costForUpgradeMonsterL + 128;
  }
}

function btnFightMonsterL() {
  if (killNumberMonsterL <= 10) {
    /* initial kill value before doubling... */
    currentExperience = currentExperience + baseExpGivenByMonsterL;
    killNumberMonsterL++;
    document.getElementById("monsterLExp").innerHTML = baseExpGivenByMonsterL;
    currentCoins = currentCoins + coinsGivenByAllMonster;
  }
  if (killNumberMonsterL > 10 && killNumberMonsterL <= 100) {
    /* power of 10 one time */
    let expGivenByMonsterDoubled = baseExpGivenByMonsterL * 2;
    currentExperience = currentExperience + expGivenByMonsterDoubled;
    document.getElementById("monsterLExp").innerHTML = expGivenByMonsterDoubled;
    killNumberMonsterL++;
    currentCoins = currentCoins + coinsGivenByAllMonster;
  }
  if (killNumberMonsterL > 100 && killNumberMonsterL <= 1000) {
    /* power of 10 two times */
    let expGivenByMonsterQuadrupled = baseExpGivenByMonsterL * 4;
    currentExperience = currentExperience + expGivenByMonsterQuadrupled;
    document.getElementById("monsterLExp").innerHTML = expGivenByMonsterQuadrupled;
    killNumberMonsterL++;
    currentCoins = currentCoins + coinsGivenByAllMonster;
  }
  if (killNumberMonsterL > 1000 && killNumberMonsterL <= 10000) {
    /* power of 10 three times */
    let expGivenByMonsterTimesEight = baseExpGivenByMonsterL * 8;
    currentExperience = currentExperience + expGivenByMonsterTimesEight;
    document.getElementById("monsterLExp").innerHTML = expGivenByMonsterTimesEight;
    killNumberMonsterL++;
    currentCoins = currentCoins + coinsGivenByAllMonster;
  }
  if (killNumberMonsterL > 100000) {
    /* power of 10 four times */
    let expGivenByMonsterTimesThirtyTwo = baseExpGivenByMonsterL * 32;
    currentExperience = currentExperience + expGivenByMonsterTimesThirtyTwo;
    document.getElementById("monsterLExp").innerHTML = expGivenByMonsterTimesThirtyTwo;
    killNumberMonsterL++;
    currentCoins = currentCoins + coinsGivenByAllMonster;
  }
}

/* Monster M */
var killNumberMonsterM = 0;
var baseExpGivenByMonsterM = 32;
var upgradeNumberMonsterM = 0;
var costForUpgradeMonsterM = 32;

function saveForMonsterM() {
  let saveForMonsterM = {
    KeyKillNumberMonsterM: killNumberMonsterM,
    KeyBaseExpGivenByMonsterM: baseExpGivenByMonsterM,
    KeyCostForUpgradeMonsterM: costForUpgradeMonsterM,
    KeyUpgradeNumberMonsterM: upgradeNumberMonsterM,
  };
  let saveForMonsterMSerialized = JSON.stringify(saveForMonsterM);
  localStorage.setItem("saveForMonsterM", saveForMonsterMSerialized);
}

setInterval(saveForMonsterM, 15000);

let saveExistsForMonsterM = localStorage.getItem("saveForMonsterM");

function loadForMonsterM() {
  if (saveExistsForMonsterM) {
    let saveForMonsterMDeserialized = JSON.parse(localStorage.getItem("saveForMonsterM"));

    killNumberMonsterM = saveForMonsterMDeserialized.KeyKillNumberMonsterM;
    baseExpGivenByMonsterM = saveForMonsterMDeserialized.KeyBaseExpGivenByMonsterM;
    costForUpgradeMonsterM = saveForMonsterMDeserialized.KeyCostForUpgradeMonsterM;
    upgradeNumberMonsterM = saveForMonsterMDeserialized.KeyUpgradeNumberMonsterM;
  }
  if (!saveExistsForMonsterM) {
    saveForMonsterM();
  }
}

setTimeout(loadForMonsterM, 250);

let btnUpgradeMonsterMInHTML = document.getElementById("btnUpgradeMonsterM");
btnUpgradeMonsterMInHTML.addEventListener("click", () => {
  upgradesForMonsterM();
});

function displayForStatsMonsterM() {
  document.getElementById("btnUpgradeMonsterM").innerHTML = costForUpgradeMonsterM;
  document.getElementById("monsterMUpgrade").innerHTML = upgradeNumberMonsterM;
  document.getElementById("monsterMKill").innerHTML = killNumberMonsterM;
}

setInterval(displayForStatsMonsterM, 325);

function upgradesForMonsterM() {
  if (upgradeNumberMonsterM <= 10 && currentCoins >= costForUpgradeMonsterM) {
    //add one to the base experience given by this monster
    baseExpGivenByMonsterM = baseExpGivenByMonsterM + 1;
    //subtract the cost from gold pile
    currentCoins = currentCoins - costForUpgradeMonsterM;
    //add one to the upgrade number and the cost of an upgrade
    upgradeNumberMonsterM = upgradeNumberMonsterM + 1;
    costForUpgradeMonsterM = costForUpgradeMonsterM + 32;
    //update the displays of the cost and the number of upgrades (refers to base experience boost)
  }
  if (upgradeNumberMonsterM > 10 && upgradeNumberMonsterM <= 100 && currentCoins >= costForUpgradeMonsterM) {
    baseExpGivenByMonsterM = baseExpGivenByMonsterM + 1;
    currentCoins = currentCoins - costForUpgradeMonsterM;
    upgradeNumberMonsterM++;
    costForUpgradeMonsterM = costForUpgradeMonsterM + 64;
  }
  if (upgradeNumberMonsterM > 100 && upgradeNumberMonsterM <= 1000 && currentCoins >= costForUpgradeMonsterM) {
    baseExpGivenByMonsterM = baseExpGivenByMonsterM + 1;
    currentCoins = currentCoins - costForUpgradeMonsterM;
    upgradeNumberMonsterM++;
    costForUpgradeMonsterM = costForUpgradeMonsterM + 128;
  }
}

function btnFightMonsterM() {
  if (killNumberMonsterM <= 10) {
    /* initial kill value before doubling... */
    currentExperience = currentExperience + baseExpGivenByMonsterM;
    killNumberMonsterM++;
    document.getElementById("monsterMExp").innerHTML = baseExpGivenByMonsterM;
    currentCoins = currentCoins + coinsGivenByAllMonster;
  }
  if (killNumberMonsterM > 10 && killNumberMonsterM <= 100) {
    /* power of 10 one time */
    let expGivenByMonsterDoubled = baseExpGivenByMonsterM * 2;
    currentExperience = currentExperience + expGivenByMonsterDoubled;
    document.getElementById("monsterMExp").innerHTML = expGivenByMonsterDoubled;
    killNumberMonsterM++;
    currentCoins = currentCoins + coinsGivenByAllMonster;
  }
  if (killNumberMonsterM > 100 && killNumberMonsterM <= 1000) {
    /* power of 10 two times */
    let expGivenByMonsterQuadrupled = baseExpGivenByMonsterM * 4;
    currentExperience = currentExperience + expGivenByMonsterQuadrupled;
    document.getElementById("monsterMExp").innerHTML = expGivenByMonsterQuadrupled;
    killNumberMonsterM++;
    currentCoins = currentCoins + coinsGivenByAllMonster;
  }
  if (killNumberMonsterM > 1000 && killNumberMonsterM <= 10000) {
    /* power of 10 three times */
    let expGivenByMonsterTimesEight = baseExpGivenByMonsterM * 8;
    currentExperience = currentExperience + expGivenByMonsterTimesEight;
    document.getElementById("monsterMExp").innerHTML = expGivenByMonsterTimesEight;
    killNumberMonsterM++;
    currentCoins = currentCoins + coinsGivenByAllMonster;
  }
  if (killNumberMonsterM > 100000) {
    /* power of 10 four times */
    let expGivenByMonsterTimesThirtyTwo = baseExpGivenByMonsterM * 32;
    currentExperience = currentExperience + expGivenByMonsterTimesThirtyTwo;
    document.getElementById("monsterMExp").innerHTML = expGivenByMonsterTimesThirtyTwo;
    killNumberMonsterM++;
    currentCoins = currentCoins + coinsGivenByAllMonster;
  }
}

/* Monster N */
var killNumberMonsterN = 0;
var baseExpGivenByMonsterN = 32;
var upgradeNumberMonsterN = 0;
var costForUpgradeMonsterN = 32;

function saveForMonsterN() {
  let saveForMonsterN = {
    KeyKillNumberMonsterN: killNumberMonsterN,
    KeyBaseExpGivenByMonsterN: baseExpGivenByMonsterN,
    KeyCostForUpgradeMonsterN: costForUpgradeMonsterN,
    KeyUpgradeNumberMonsterN: upgradeNumberMonsterN,
  };
  let saveForMonsterNSerialized = JSON.stringify(saveForMonsterN);
  localStorage.setItem("saveForMonsterN", saveForMonsterNSerialized);
}

setInterval(saveForMonsterN, 15000);

let saveExistsForMonsterN = localStorage.getItem("saveForMonsterN");

function loadForMonsterN() {
  if (saveExistsForMonsterN) {
    let saveForMonsterNDeserialized = JSON.parse(localStorage.getItem("saveForMonsterN"));

    killNumberMonsterN = saveForMonsterNDeserialized.KeyKillNumberMonsterN;
    baseExpGivenByMonsterN = saveForMonsterNDeserialized.KeyBaseExpGivenByMonsterN;
    costForUpgradeMonsterN = saveForMonsterNDeserialized.KeyCostForUpgradeMonsterN;
    upgradeNumberMonsterN = saveForMonsterNDeserialized.KeyUpgradeNumberMonsterN;
  }
  if (!saveExistsForMonsterN) {
    saveForMonsterN();
  }
}

setTimeout(loadForMonsterN, 250);

let btnUpgradeMonsterNInHTML = document.getElementById("btnUpgradeMonsterN");
btnUpgradeMonsterNInHTML.addEventListener("click", () => {
  upgradesForMonsterN();
});

function displayForStatsMonsterN() {
  document.getElementById("btnUpgradeMonsterN").innerHTML = costForUpgradeMonsterN;
  document.getElementById("monsterNUpgrade").innerHTML = upgradeNumberMonsterN;
  document.getElementById("monsterNKill").innerHTML = killNumberMonsterN;
}

setInterval(displayForStatsMonsterN, 325);

function upgradesForMonsterN() {
  if (upgradeNumberMonsterN <= 10 && currentCoins >= costForUpgradeMonsterN) {
    //add one to the base experience given by this monster
    baseExpGivenByMonsterN = baseExpGivenByMonsterN + 1;
    //subtract the cost from gold pile
    currentCoins = currentCoins - costForUpgradeMonsterN;
    //add one to the upgrade number and the cost of an upgrade
    upgradeNumberMonsterN = upgradeNumberMonsterN + 1;
    costForUpgradeMonsterN = costForUpgradeMonsterN + 32;
    //update the displays of the cost and the number of upgrades (refers to base experience boost)
  }
  if (upgradeNumberMonsterN > 10 && upgradeNumberMonsterN <= 100 && currentCoins >= costForUpgradeMonsterN) {
    baseExpGivenByMonsterN = baseExpGivenByMonsterN + 1;
    currentCoins = currentCoins - costForUpgradeMonsterN;
    upgradeNumberMonsterN++;
    costForUpgradeMonsterN = costForUpgradeMonsterN + 64;
  }
  if (upgradeNumberMonsterN > 100 && upgradeNumberMonsterN <= 1000 && currentCoins >= costForUpgradeMonsterN) {
    baseExpGivenByMonsterN = baseExpGivenByMonsterN + 1;
    currentCoins = currentCoins - costForUpgradeMonsterN;
    upgradeNumberMonsterN++;
    costForUpgradeMonsterN = costForUpgradeMonsterN + 128;
  }
}

function btnFightMonsterN() {
  if (killNumberMonsterN <= 10) {
    /* initial kill value before doubling... */
    currentExperience = currentExperience + baseExpGivenByMonsterN;
    killNumberMonsterN++;
    document.getElementById("monsterNExp").innerHTML = baseExpGivenByMonsterN;
    currentCoins = currentCoins + coinsGivenByAllMonster;
  }
  if (killNumberMonsterN > 10 && killNumberMonsterN <= 100) {
    /* power of 10 one time */
    let expGivenByMonsterDoubled = baseExpGivenByMonsterN * 2;
    currentExperience = currentExperience + expGivenByMonsterDoubled;
    document.getElementById("monsterNExp").innerHTML = expGivenByMonsterDoubled;
    killNumberMonsterN++;
    currentCoins = currentCoins + coinsGivenByAllMonster;
  }
  if (killNumberMonsterN > 100 && killNumberMonsterN <= 1000) {
    /* power of 10 two times */
    let expGivenByMonsterQuadrupled = baseExpGivenByMonsterN * 4;
    currentExperience = currentExperience + expGivenByMonsterQuadrupled;
    document.getElementById("monsterNExp").innerHTML = expGivenByMonsterQuadrupled;
    killNumberMonsterN++;
    currentCoins = currentCoins + coinsGivenByAllMonster;
  }
  if (killNumberMonsterN > 1000 && killNumberMonsterN <= 10000) {
    /* power of 10 three times */
    let expGivenByMonsterTimesEight = baseExpGivenByMonsterN * 8;
    currentExperience = currentExperience + expGivenByMonsterTimesEight;
    document.getElementById("monsterNExp").innerHTML = expGivenByMonsterTimesEight;
    killNumberMonsterN++;
    currentCoins = currentCoins + coinsGivenByAllMonster;
  }
  if (killNumberMonsterN > 100000) {
    /* power of 10 four times */
    let expGivenByMonsterTimesThirtyTwo = baseExpGivenByMonsterN * 32;
    currentExperience = currentExperience + expGivenByMonsterTimesThirtyTwo;
    document.getElementById("monsterNExp").innerHTML = expGivenByMonsterTimesThirtyTwo;
    killNumberMonsterN++;
    currentCoins = currentCoins + coinsGivenByAllMonster;
  }
}

/* Monster O */
var killNumberMonsterO = 0;
var baseExpGivenByMonsterO = 32;
var upgradeNumberMonsterO = 0;
var costForUpgradeMonsterO = 32;

function saveForMonsterO() {
  let saveForMonsterO = {
    KeyKillNumberMonsterO: killNumberMonsterO,
    KeyBaseExpGivenByMonsterO: baseExpGivenByMonsterO,
    KeyCostForUpgradeMonsterO: costForUpgradeMonsterO,
    KeyUpgradeNumberMonsterO: upgradeNumberMonsterO,
  };
  let saveForMonsterOSerialized = JSON.stringify(saveForMonsterO);
  localStorage.setItem("saveForMonsterO", saveForMonsterOSerialized);
}

setInterval(saveForMonsterO, 15000);

let saveExistsForMonsterO = localStorage.getItem("saveForMonsterO");

function loadForMonsterO() {
  if (saveExistsForMonsterO) {
    let saveForMonsterODeserialized = JSON.parse(localStorage.getItem("saveForMonsterO"));

    killNumberMonsterO = saveForMonsterODeserialized.KeyKillNumberMonsterO;
    baseExpGivenByMonsterO = saveForMonsterODeserialized.KeyBaseExpGivenByMonsterO;
    costForUpgradeMonsterO = saveForMonsterODeserialized.KeyCostForUpgradeMonsterO;
    upgradeNumberMonsterO = saveForMonsterODeserialized.KeyUpgradeNumberMonsterO;
  }
  if (!saveExistsForMonsterO) {
    saveForMonsterO();
  }
}

setTimeout(loadForMonsterO, 250);

let btnUpgradeMonsterOInHTML = document.getElementById("btnUpgradeMonsterO");
btnUpgradeMonsterOInHTML.addEventListener("click", () => {
  upgradesForMonsterO();
});

function displayForStatsMonsterO() {
  document.getElementById("btnUpgradeMonsterO").innerHTML = costForUpgradeMonsterO;
  document.getElementById("monsterOUpgrade").innerHTML = upgradeNumberMonsterO;
  document.getElementById("monsterOKill").innerHTML = killNumberMonsterO;
}

setInterval(displayForStatsMonsterO, 325);

function upgradesForMonsterO() {
  if (upgradeNumberMonsterO <= 10 && currentCoins >= costForUpgradeMonsterO) {
    //add one to the base experience given by this monster
    baseExpGivenByMonsterO = baseExpGivenByMonsterO + 1;
    //subtract the cost from gold pile
    currentCoins = currentCoins - costForUpgradeMonsterO;
    //add one to the upgrade number and the cost of an upgrade
    upgradeNumberMonsterO = upgradeNumberMonsterO + 1;
    costForUpgradeMonsterO = costForUpgradeMonsterO + 32;
    //update the displays of the cost and the number of upgrades (refers to base experience boost)
  }
  if (upgradeNumberMonsterO > 10 && upgradeNumberMonsterO <= 100 && currentCoins >= costForUpgradeMonsterO) {
    baseExpGivenByMonsterO = baseExpGivenByMonsterO + 1;
    currentCoins = currentCoins - costForUpgradeMonsterO;
    upgradeNumberMonsterO++;
    costForUpgradeMonsterO = costForUpgradeMonsterO + 64;
  }
  if (upgradeNumberMonsterO > 100 && upgradeNumberMonsterO <= 1000 && currentCoins >= costForUpgradeMonsterO) {
    baseExpGivenByMonsterO = baseExpGivenByMonsterO + 1;
    currentCoins = currentCoins - costForUpgradeMonsterO;
    upgradeNumberMonsterO++;
    costForUpgradeMonsterO = costForUpgradeMonsterO + 128;
  }
}

function btnFightMonsterO() {
  if (killNumberMonsterO <= 10) {
    /* initial kill value before doubling... */
    currentExperience = currentExperience + baseExpGivenByMonsterO;
    killNumberMonsterO++;
    document.getElementById("monsterOExp").innerHTML = baseExpGivenByMonsterO;
    currentCoins = currentCoins + coinsGivenByAllMonster;
  }
  if (killNumberMonsterO > 10 && killNumberMonsterO <= 100) {
    /* power of 10 one time */
    let expGivenByMonsterDoubled = baseExpGivenByMonsterO * 2;
    currentExperience = currentExperience + expGivenByMonsterDoubled;
    document.getElementById("monsterOExp").innerHTML = expGivenByMonsterDoubled;
    killNumberMonsterO++;
    currentCoins = currentCoins + coinsGivenByAllMonster;
  }
  if (killNumberMonsterO > 100 && killNumberMonsterO <= 1000) {
    /* power of 10 two times */
    let expGivenByMonsterQuadrupled = baseExpGivenByMonsterO * 4;
    currentExperience = currentExperience + expGivenByMonsterQuadrupled;
    document.getElementById("monsterOExp").innerHTML = expGivenByMonsterQuadrupled;
    killNumberMonsterO++;
    currentCoins = currentCoins + coinsGivenByAllMonster;
  }
  if (killNumberMonsterO > 1000 && killNumberMonsterO <= 10000) {
    /* power of 10 three times */
    let expGivenByMonsterTimesEight = baseExpGivenByMonsterO * 8;
    currentExperience = currentExperience + expGivenByMonsterTimesEight;
    document.getElementById("monsterOExp").innerHTML = expGivenByMonsterTimesEight;
    killNumberMonsterO++;
    currentCoins = currentCoins + coinsGivenByAllMonster;
  }
  if (killNumberMonsterO > 100000) {
    /* power of 10 four times */
    let expGivenByMonsterTimesThirtyTwo = baseExpGivenByMonsterO * 32;
    currentExperience = currentExperience + expGivenByMonsterTimesThirtyTwo;
    document.getElementById("monsterOExp").innerHTML = expGivenByMonsterTimesThirtyTwo;
    killNumberMonsterO++;
    currentCoins = currentCoins + coinsGivenByAllMonster;
  }
}

/* Monster P */
var killNumberMonsterP = 0;
var baseExpGivenByMonsterP = 32;
var upgradeNumberMonsterP = 0;
var costForUpgradeMonsterP = 32;

function saveForMonsterP() {
  let saveForMonsterP = {
    KeyKillNumberMonsterP: killNumberMonsterP,
    KeyBaseExpGivenByMonsterP: baseExpGivenByMonsterP,
    KeyCostForUpgradeMonsterP: costForUpgradeMonsterP,
    KeyUpgradeNumberMonsterP: upgradeNumberMonsterP,
  };
  let saveForMonsterPSerialized = JSON.stringify(saveForMonsterP);
  localStorage.setItem("saveForMonsterP", saveForMonsterPSerialized);
}

setInterval(saveForMonsterP, 15000);

let saveExistsForMonsterP = localStorage.getItem("saveForMonsterP");

function loadForMonsterP() {
  if (saveExistsForMonsterP) {
    let saveForMonsterPDeserialized = JSON.parse(localStorage.getItem("saveForMonsterP"));

    killNumberMonsterP = saveForMonsterPDeserialized.KeyKillNumberMonsterP;
    baseExpGivenByMonsterP = saveForMonsterPDeserialized.KeyBaseExpGivenByMonsterP;
    costForUpgradeMonsterP = saveForMonsterPDeserialized.KeyCostForUpgradeMonsterP;
    upgradeNumberMonsterP = saveForMonsterPDeserialized.KeyUpgradeNumberMonsterP;
  }
  if (!saveExistsForMonsterP) {
    saveForMonsterP();
  }
}

setTimeout(loadForMonsterP, 250);

let btnUpgradeMonsterPInHTML = document.getElementById("btnUpgradeMonsterP");
btnUpgradeMonsterPInHTML.addEventListener("click", () => {
  upgradesForMonsterP();
});

function displayForStatsMonsterP() {
  document.getElementById("btnUpgradeMonsterP").innerHTML = costForUpgradeMonsterP;
  document.getElementById("monsterPUpgrade").innerHTML = upgradeNumberMonsterP;
  document.getElementById("monsterPKill").innerHTML = killNumberMonsterP;
}

setInterval(displayForStatsMonsterP, 325);

function upgradesForMonsterP() {
  if (upgradeNumberMonsterP <= 10 && currentCoins >= costForUpgradeMonsterP) {
    //add one to the base experience given by this monster
    baseExpGivenByMonsterP = baseExpGivenByMonsterP + 1;
    //subtract the cost from gold pile
    currentCoins = currentCoins - costForUpgradeMonsterP;
    //add one to the upgrade number and the cost of an upgrade
    upgradeNumberMonsterP = upgradeNumberMonsterP + 1;
    costForUpgradeMonsterP = costForUpgradeMonsterP + 32;
    //update the displays of the cost and the number of upgrades (refers to base experience boost)
  }
  if (upgradeNumberMonsterP > 10 && upgradeNumberMonsterP <= 100 && currentCoins >= costForUpgradeMonsterP) {
    baseExpGivenByMonsterP = baseExpGivenByMonsterP + 1;
    currentCoins = currentCoins - costForUpgradeMonsterP;
    upgradeNumberMonsterP++;
    costForUpgradeMonsterP = costForUpgradeMonsterP + 64;
  }
  if (upgradeNumberMonsterP > 100 && upgradeNumberMonsterP <= 1000 && currentCoins >= costForUpgradeMonsterP) {
    baseExpGivenByMonsterP = baseExpGivenByMonsterP + 1;
    currentCoins = currentCoins - costForUpgradeMonsterP;
    upgradeNumberMonsterP++;
    costForUpgradeMonsterP = costForUpgradeMonsterP + 128;
  }
}

function btnFightMonsterP() {
  if (killNumberMonsterP <= 10) {
    /* initial kill value before doubling... */
    currentExperience = currentExperience + baseExpGivenByMonsterP;
    killNumberMonsterP++;
    document.getElementById("monsterPExp").innerHTML = baseExpGivenByMonsterP;
    currentCoins = currentCoins + coinsGivenByAllMonster;
  }
  if (killNumberMonsterP > 10 && killNumberMonsterP <= 100) {
    /* power of 10 one time */
    let expGivenByMonsterDoubled = baseExpGivenByMonsterP * 2;
    currentExperience = currentExperience + expGivenByMonsterDoubled;
    document.getElementById("monsterPExp").innerHTML = expGivenByMonsterDoubled;
    killNumberMonsterP++;
    currentCoins = currentCoins + coinsGivenByAllMonster;
  }
  if (killNumberMonsterP > 100 && killNumberMonsterP <= 1000) {
    /* power of 10 two times */
    let expGivenByMonsterQuadrupled = baseExpGivenByMonsterP * 4;
    currentExperience = currentExperience + expGivenByMonsterQuadrupled;
    document.getElementById("monsterPExp").innerHTML = expGivenByMonsterQuadrupled;
    killNumberMonsterP++;
    currentCoins = currentCoins + coinsGivenByAllMonster;
  }
  if (killNumberMonsterP > 1000 && killNumberMonsterP <= 10000) {
    /* power of 10 three times */
    let expGivenByMonsterTimesEight = baseExpGivenByMonsterP * 8;
    currentExperience = currentExperience + expGivenByMonsterTimesEight;
    document.getElementById("monsterPExp").innerHTML = expGivenByMonsterTimesEight;
    killNumberMonsterP++;
    currentCoins = currentCoins + coinsGivenByAllMonster;
  }
  if (killNumberMonsterP > 100000) {
    /* power of 10 four times */
    let expGivenByMonsterTimesThirtyTwo = baseExpGivenByMonsterP * 32;
    currentExperience = currentExperience + expGivenByMonsterTimesThirtyTwo;
    document.getElementById("monsterPExp").innerHTML = expGivenByMonsterTimesThirtyTwo;
    killNumberMonsterP++;
    currentCoins = currentCoins + coinsGivenByAllMonster;
  }
}

/* Monster Q */
var killNumberMonsterQ = 0;
var baseExpGivenByMonsterQ = 32;
var upgradeNumberMonsterQ = 0;
var costForUpgradeMonsterQ = 32;

function saveForMonsterQ() {
  let saveForMonsterQ = {
    KeyKillNumberMonsterQ: killNumberMonsterQ,
    KeyBaseExpGivenByMonsterQ: baseExpGivenByMonsterQ,
    KeyCostForUpgradeMonsterQ: costForUpgradeMonsterQ,
    KeyUpgradeNumberMonsterQ: upgradeNumberMonsterQ,
  };
  let saveForMonsterQSerialized = JSON.stringify(saveForMonsterQ);
  localStorage.setItem("saveForMonsterQ", saveForMonsterQSerialized);
}

setInterval(saveForMonsterQ, 15000);

let saveExistsForMonsterQ = localStorage.getItem("saveForMonsterQ");

function loadForMonsterQ() {
  if (saveExistsForMonsterQ) {
    let saveForMonsterQDeserialized = JSON.parse(localStorage.getItem("saveForMonsterQ"));

    killNumberMonsterQ = saveForMonsterQDeserialized.KeyKillNumberMonsterQ;
    baseExpGivenByMonsterQ = saveForMonsterQDeserialized.KeyBaseExpGivenByMonsterQ;
    costForUpgradeMonsterQ = saveForMonsterQDeserialized.KeyCostForUpgradeMonsterQ;
    upgradeNumberMonsterQ = saveForMonsterQDeserialized.KeyUpgradeNumberMonsterQ;
  }
  if (!saveExistsForMonsterQ) {
    saveForMonsterQ();
  }
}

setTimeout(loadForMonsterQ, 250);

let btnUpgradeMonsterQInHTML = document.getElementById("btnUpgradeMonsterQ");
btnUpgradeMonsterQInHTML.addEventListener("click", () => {
  upgradesForMonsterQ();
});

function displayForStatsMonsterQ() {
  document.getElementById("btnUpgradeMonsterQ").innerHTML = costForUpgradeMonsterQ;
  document.getElementById("monsterQUpgrade").innerHTML = upgradeNumberMonsterQ;
  document.getElementById("monsterQKill").innerHTML = killNumberMonsterQ;
}

setInterval(displayForStatsMonsterQ, 325);

function upgradesForMonsterQ() {
  if (upgradeNumberMonsterQ <= 10 && currentCoins >= costForUpgradeMonsterQ) {
    //add one to the base experience given by this monster
    baseExpGivenByMonsterQ = baseExpGivenByMonsterQ + 1;
    //subtract the cost from gold pile
    currentCoins = currentCoins - costForUpgradeMonsterQ;
    //add one to the upgrade number and the cost of an upgrade
    upgradeNumberMonsterQ = upgradeNumberMonsterQ + 1;
    costForUpgradeMonsterQ = costForUpgradeMonsterQ + 32;
    //update the displays of the cost and the number of upgrades (refers to base experience boost)
  }
  if (upgradeNumberMonsterQ > 10 && upgradeNumberMonsterQ <= 100 && currentCoins >= costForUpgradeMonsterQ) {
    baseExpGivenByMonsterQ = baseExpGivenByMonsterQ + 1;
    currentCoins = currentCoins - costForUpgradeMonsterQ;
    upgradeNumberMonsterQ++;
    costForUpgradeMonsterQ = costForUpgradeMonsterQ + 64;
  }
  if (upgradeNumberMonsterQ > 100 && upgradeNumberMonsterQ <= 1000 && currentCoins >= costForUpgradeMonsterQ) {
    baseExpGivenByMonsterQ = baseExpGivenByMonsterQ + 1;
    currentCoins = currentCoins - costForUpgradeMonsterQ;
    upgradeNumberMonsterQ++;
    costForUpgradeMonsterQ = costForUpgradeMonsterQ + 128;
  }
}

function btnFightMonsterQ() {
  if (killNumberMonsterQ <= 10) {
    /* initial kill value before doubling... */
    currentExperience = currentExperience + baseExpGivenByMonsterQ;
    killNumberMonsterQ++;
    document.getElementById("monsterQExp").innerHTML = baseExpGivenByMonsterQ;
    currentCoins = currentCoins + coinsGivenByAllMonster;
  }
  if (killNumberMonsterQ > 10 && killNumberMonsterQ <= 100) {
    /* power of 10 one time */
    let expGivenByMonsterDoubled = baseExpGivenByMonsterQ * 2;
    currentExperience = currentExperience + expGivenByMonsterDoubled;
    document.getElementById("monsterQExp").innerHTML = expGivenByMonsterDoubled;
    killNumberMonsterQ++;
    currentCoins = currentCoins + coinsGivenByAllMonster;
  }
  if (killNumberMonsterQ > 100 && killNumberMonsterQ <= 1000) {
    /* power of 10 two times */
    let expGivenByMonsterQuadrupled = baseExpGivenByMonsterQ * 4;
    currentExperience = currentExperience + expGivenByMonsterQuadrupled;
    document.getElementById("monsterQExp").innerHTML = expGivenByMonsterQuadrupled;
    killNumberMonsterQ++;
    currentCoins = currentCoins + coinsGivenByAllMonster;
  }
  if (killNumberMonsterQ > 1000 && killNumberMonsterQ <= 10000) {
    /* power of 10 three times */
    let expGivenByMonsterTimesEight = baseExpGivenByMonsterQ * 8;
    currentExperience = currentExperience + expGivenByMonsterTimesEight;
    document.getElementById("monsterQExp").innerHTML = expGivenByMonsterTimesEight;
    killNumberMonsterQ++;
    currentCoins = currentCoins + coinsGivenByAllMonster;
  }
  if (killNumberMonsterQ > 100000) {
    /* power of 10 four times */
    let expGivenByMonsterTimesThirtyTwo = baseExpGivenByMonsterQ * 32;
    currentExperience = currentExperience + expGivenByMonsterTimesThirtyTwo;
    document.getElementById("monsterQExp").innerHTML = expGivenByMonsterTimesThirtyTwo;
    killNumberMonsterQ++;
    currentCoins = currentCoins + coinsGivenByAllMonster;
  }
}

/* Monster R */
var killNumberMonsterR = 0;
var baseExpGivenByMonsterR = 32;
var upgradeNumberMonsterR = 0;
var costForUpgradeMonsterR = 32;

function saveForMonsterR() {
  let saveForMonsterR = {
    KeyKillNumberMonsterR: killNumberMonsterR,
    KeyBaseExpGivenByMonsterR: baseExpGivenByMonsterR,
    KeyCostForUpgradeMonsterR: costForUpgradeMonsterR,
    KeyUpgradeNumberMonsterR: upgradeNumberMonsterR,
  };
  let saveForMonsterRSerialized = JSON.stringify(saveForMonsterR);
  localStorage.setItem("saveForMonsterR", saveForMonsterRSerialized);
}

setInterval(saveForMonsterR, 15000);

let saveExistsForMonsterR = localStorage.getItem("saveForMonsterR");

function loadForMonsterR() {
  if (saveExistsForMonsterR) {
    let saveForMonsterRDeserialized = JSON.parse(localStorage.getItem("saveForMonsterR"));

    killNumberMonsterR = saveForMonsterRDeserialized.KeyKillNumberMonsterR;
    baseExpGivenByMonsterR = saveForMonsterRDeserialized.KeyBaseExpGivenByMonsterR;
    costForUpgradeMonsterR = saveForMonsterRDeserialized.KeyCostForUpgradeMonsterR;
    upgradeNumberMonsterR = saveForMonsterRDeserialized.KeyUpgradeNumberMonsterR;
  }
  if (!saveExistsForMonsterR) {
    saveForMonsterR();
  }
}

setTimeout(loadForMonsterR, 250);

let btnUpgradeMonsterRInHTML = document.getElementById("btnUpgradeMonsterR");
btnUpgradeMonsterRInHTML.addEventListener("click", () => {
  upgradesForMonsterR();
});

function displayForStatsMonsterR() {
  document.getElementById("btnUpgradeMonsterR").innerHTML = costForUpgradeMonsterR;
  document.getElementById("monsterRUpgrade").innerHTML = upgradeNumberMonsterR;
  document.getElementById("monsterRKill").innerHTML = killNumberMonsterR;
}

setInterval(displayForStatsMonsterR, 325);

function upgradesForMonsterR() {
  if (upgradeNumberMonsterR <= 10 && currentCoins >= costForUpgradeMonsterR) {
    //add one to the base experience given by this monster
    baseExpGivenByMonsterR = baseExpGivenByMonsterR + 1;
    //subtract the cost from gold pile
    currentCoins = currentCoins - costForUpgradeMonsterR;
    //add one to the upgrade number and the cost of an upgrade
    upgradeNumberMonsterR = upgradeNumberMonsterR + 1;
    costForUpgradeMonsterR = costForUpgradeMonsterR + 32;
    //update the displays of the cost and the number of upgrades (refers to base experience boost)
  }
  if (upgradeNumberMonsterR > 10 && upgradeNumberMonsterR <= 100 && currentCoins >= costForUpgradeMonsterR) {
    baseExpGivenByMonsterR = baseExpGivenByMonsterR + 1;
    currentCoins = currentCoins - costForUpgradeMonsterR;
    upgradeNumberMonsterR++;
    costForUpgradeMonsterR = costForUpgradeMonsterR + 64;
  }
  if (upgradeNumberMonsterR > 100 && upgradeNumberMonsterR <= 1000 && currentCoins >= costForUpgradeMonsterR) {
    baseExpGivenByMonsterR = baseExpGivenByMonsterR + 1;
    currentCoins = currentCoins - costForUpgradeMonsterR;
    upgradeNumberMonsterR++;
    costForUpgradeMonsterR = costForUpgradeMonsterR + 128;
  }
}

function btnFightMonsterR() {
  if (killNumberMonsterR <= 10) {
    /* initial kill value before doubling... */
    currentExperience = currentExperience + baseExpGivenByMonsterR;
    killNumberMonsterR++;
    document.getElementById("monsterRExp").innerHTML = baseExpGivenByMonsterR;
    currentCoins = currentCoins + coinsGivenByAllMonster;
  }
  if (killNumberMonsterR > 10 && killNumberMonsterR <= 100) {
    /* power of 10 one time */
    let expGivenByMonsterDoubled = baseExpGivenByMonsterR * 2;
    currentExperience = currentExperience + expGivenByMonsterDoubled;
    document.getElementById("monsterRExp").innerHTML = expGivenByMonsterDoubled;
    killNumberMonsterR++;
    currentCoins = currentCoins + coinsGivenByAllMonster;
  }
  if (killNumberMonsterR > 100 && killNumberMonsterR <= 1000) {
    /* power of 10 two times */
    let expGivenByMonsterQuadrupled = baseExpGivenByMonsterR * 4;
    currentExperience = currentExperience + expGivenByMonsterQuadrupled;
    document.getElementById("monsterRExp").innerHTML = expGivenByMonsterQuadrupled;
    killNumberMonsterR++;
    currentCoins = currentCoins + coinsGivenByAllMonster;
  }
  if (killNumberMonsterR > 1000 && killNumberMonsterR <= 10000) {
    /* power of 10 three times */
    let expGivenByMonsterTimesEight = baseExpGivenByMonsterR * 8;
    currentExperience = currentExperience + expGivenByMonsterTimesEight;
    document.getElementById("monsterRExp").innerHTML = expGivenByMonsterTimesEight;
    killNumberMonsterR++;
    currentCoins = currentCoins + coinsGivenByAllMonster;
  }
  if (killNumberMonsterR > 100000) {
    /* power of 10 four times */
    let expGivenByMonsterTimesThirtyTwo = baseExpGivenByMonsterR * 32;
    currentExperience = currentExperience + expGivenByMonsterTimesThirtyTwo;
    document.getElementById("monsterRExp").innerHTML = expGivenByMonsterTimesThirtyTwo;
    killNumberMonsterR++;
    currentCoins = currentCoins + coinsGivenByAllMonster;
  }
}

/* Monster S */
var killNumberMonsterS = 0;
var baseExpGivenByMonsterS = 32;
var upgradeNumberMonsterS = 0;
var costForUpgradeMonsterS = 32;

function saveForMonsterS() {
  let saveForMonsterS = {
    KeyKillNumberMonsterS: killNumberMonsterS,
    KeyBaseExpGivenByMonsterS: baseExpGivenByMonsterS,
    KeyCostForUpgradeMonsterS: costForUpgradeMonsterS,
    KeyUpgradeNumberMonsterS: upgradeNumberMonsterS,
  };
  let saveForMonsterSSerialized = JSON.stringify(saveForMonsterS);
  localStorage.setItem("saveForMonsterS", saveForMonsterSSerialized);
}

setInterval(saveForMonsterS, 15000);

let saveExistsForMonsterS = localStorage.getItem("saveForMonsterS");

function loadForMonsterS() {
  if (saveExistsForMonsterS) {
    let saveForMonsterSDeserialized = JSON.parse(localStorage.getItem("saveForMonsterS"));

    killNumberMonsterS = saveForMonsterSDeserialized.KeyKillNumberMonsterS;
    baseExpGivenByMonsterS = saveForMonsterSDeserialized.KeyBaseExpGivenByMonsterS;
    costForUpgradeMonsterS = saveForMonsterSDeserialized.KeyCostForUpgradeMonsterS;
    upgradeNumberMonsterS = saveForMonsterSDeserialized.KeyUpgradeNumberMonsterS;
  }
  if (!saveExistsForMonsterS) {
    saveForMonsterS();
  }
}

setTimeout(loadForMonsterS, 250);

let btnUpgradeMonsterSInHTML = document.getElementById("btnUpgradeMonsterS");
btnUpgradeMonsterSInHTML.addEventListener("click", () => {
  upgradesForMonsterS();
});

function displayForStatsMonsterS() {
  document.getElementById("btnUpgradeMonsterS").innerHTML = costForUpgradeMonsterS;
  document.getElementById("monsterSUpgrade").innerHTML = upgradeNumberMonsterS;
  document.getElementById("monsterSKill").innerHTML = killNumberMonsterS;
}

setInterval(displayForStatsMonsterS, 325);

function upgradesForMonsterS() {
  if (upgradeNumberMonsterS <= 10 && currentCoins >= costForUpgradeMonsterS) {
    //add one to the base experience given by this monster
    baseExpGivenByMonsterS = baseExpGivenByMonsterS + 1;
    //subtract the cost from gold pile
    currentCoins = currentCoins - costForUpgradeMonsterS;
    //add one to the upgrade number and the cost of an upgrade
    upgradeNumberMonsterS = upgradeNumberMonsterS + 1;
    costForUpgradeMonsterS = costForUpgradeMonsterS + 32;
    //update the displays of the cost and the number of upgrades (refers to base experience boost)
  }
  if (upgradeNumberMonsterS > 10 && upgradeNumberMonsterS <= 100 && currentCoins >= costForUpgradeMonsterS) {
    baseExpGivenByMonsterS = baseExpGivenByMonsterS + 1;
    currentCoins = currentCoins - costForUpgradeMonsterS;
    upgradeNumberMonsterS++;
    costForUpgradeMonsterS = costForUpgradeMonsterS + 64;
  }
  if (upgradeNumberMonsterS > 100 && upgradeNumberMonsterS <= 1000 && currentCoins >= costForUpgradeMonsterS) {
    baseExpGivenByMonsterS = baseExpGivenByMonsterS + 1;
    currentCoins = currentCoins - costForUpgradeMonsterS;
    upgradeNumberMonsterS++;
    costForUpgradeMonsterS = costForUpgradeMonsterS + 128;
  }
}

function btnFightMonsterS() {
  if (killNumberMonsterS <= 10) {
    /* initial kill value before doubling... */
    currentExperience = currentExperience + baseExpGivenByMonsterS;
    killNumberMonsterS++;
    document.getElementById("monsterSExp").innerHTML = baseExpGivenByMonsterS;
    currentCoins = currentCoins + coinsGivenByAllMonster;
  }
  if (killNumberMonsterS > 10 && killNumberMonsterS <= 100) {
    /* power of 10 one time */
    let expGivenByMonsterDoubled = baseExpGivenByMonsterS * 2;
    currentExperience = currentExperience + expGivenByMonsterDoubled;
    document.getElementById("monsterSExp").innerHTML = expGivenByMonsterDoubled;
    killNumberMonsterS++;
    currentCoins = currentCoins + coinsGivenByAllMonster;
  }
  if (killNumberMonsterS > 100 && killNumberMonsterS <= 1000) {
    /* power of 10 two times */
    let expGivenByMonsterQuadrupled = baseExpGivenByMonsterS * 4;
    currentExperience = currentExperience + expGivenByMonsterQuadrupled;
    document.getElementById("monsterSExp").innerHTML = expGivenByMonsterQuadrupled;
    killNumberMonsterS++;
    currentCoins = currentCoins + coinsGivenByAllMonster;
  }
  if (killNumberMonsterS > 1000 && killNumberMonsterS <= 10000) {
    /* power of 10 three times */
    let expGivenByMonsterTimesEight = baseExpGivenByMonsterS * 8;
    currentExperience = currentExperience + expGivenByMonsterTimesEight;
    document.getElementById("monsterSExp").innerHTML = expGivenByMonsterTimesEight;
    killNumberMonsterS++;
    currentCoins = currentCoins + coinsGivenByAllMonster;
  }
  if (killNumberMonsterS > 100000) {
    /* power of 10 four times */
    let expGivenByMonsterTimesThirtyTwo = baseExpGivenByMonsterS * 32;
    currentExperience = currentExperience + expGivenByMonsterTimesThirtyTwo;
    document.getElementById("monsterSExp").innerHTML = expGivenByMonsterTimesThirtyTwo;
    killNumberMonsterS++;
    currentCoins = currentCoins + coinsGivenByAllMonster;
  }
}

/* Monster T */
var killNumberMonsterT = 0;
var baseExpGivenByMonsterT = 32;
var upgradeNumberMonsterT = 0;
var costForUpgradeMonsterT = 32;

function saveForMonsterT() {
  let saveForMonsterT = {
    KeyKillNumberMonsterT: killNumberMonsterT,
    KeyBaseExpGivenByMonsterT: baseExpGivenByMonsterT,
    KeyCostForUpgradeMonsterT: costForUpgradeMonsterT,
    KeyUpgradeNumberMonsterT: upgradeNumberMonsterT,
  };
  let saveForMonsterTSerialized = JSON.stringify(saveForMonsterT);
  localStorage.setItem("saveForMonsterT", saveForMonsterTSerialized);
}

setInterval(saveForMonsterT, 15000);

let saveExistsForMonsterT = localStorage.getItem("saveForMonsterT");

function loadForMonsterT() {
  if (saveExistsForMonsterT) {
    let saveForMonsterTDeserialized = JSON.parse(localStorage.getItem("saveForMonsterT"));

    killNumberMonsterT = saveForMonsterTDeserialized.KeyKillNumberMonsterT;
    baseExpGivenByMonsterT = saveForMonsterTDeserialized.KeyBaseExpGivenByMonsterT;
    costForUpgradeMonsterT = saveForMonsterTDeserialized.KeyCostForUpgradeMonsterT;
    upgradeNumberMonsterT = saveForMonsterTDeserialized.KeyUpgradeNumberMonsterT;
  }
  if (!saveExistsForMonsterT) {
    saveForMonsterT();
  }
}

setTimeout(loadForMonsterT, 250);

let btnUpgradeMonsterTInHTML = document.getElementById("btnUpgradeMonsterT");
btnUpgradeMonsterTInHTML.addEventListener("click", () => {
  upgradesForMonsterT();
});

function displayForStatsMonsterT() {
  document.getElementById("btnUpgradeMonsterT").innerHTML = costForUpgradeMonsterT;
  document.getElementById("monsterTUpgrade").innerHTML = upgradeNumberMonsterT;
  document.getElementById("monsterTKill").innerHTML = killNumberMonsterT;
}

setInterval(displayForStatsMonsterT, 325);

function upgradesForMonsterT() {
  if (upgradeNumberMonsterT <= 10 && currentCoins >= costForUpgradeMonsterT) {
    //add one to the base experience given by this monster
    baseExpGivenByMonsterT = baseExpGivenByMonsterT + 1;
    //subtract the cost from gold pile
    currentCoins = currentCoins - costForUpgradeMonsterT;
    //add one to the upgrade number and the cost of an upgrade
    upgradeNumberMonsterT = upgradeNumberMonsterT + 1;
    costForUpgradeMonsterT = costForUpgradeMonsterT + 32;
    //update the displays of the cost and the number of upgrades (refers to base experience boost)
  }
  if (upgradeNumberMonsterT > 10 && upgradeNumberMonsterT <= 100 && currentCoins >= costForUpgradeMonsterT) {
    baseExpGivenByMonsterT = baseExpGivenByMonsterT + 1;
    currentCoins = currentCoins - costForUpgradeMonsterT;
    upgradeNumberMonsterT++;
    costForUpgradeMonsterT = costForUpgradeMonsterT + 64;
  }
  if (upgradeNumberMonsterT > 100 && upgradeNumberMonsterT <= 1000 && currentCoins >= costForUpgradeMonsterT) {
    baseExpGivenByMonsterT = baseExpGivenByMonsterT + 1;
    currentCoins = currentCoins - costForUpgradeMonsterT;
    upgradeNumberMonsterT++;
    costForUpgradeMonsterT = costForUpgradeMonsterT + 128;
  }
}

function btnFightMonsterT() {
  if (killNumberMonsterT <= 10) {
    /* initial kill value before doubling... */
    currentExperience = currentExperience + baseExpGivenByMonsterT;
    killNumberMonsterT++;
    document.getElementById("monsterTExp").innerHTML = baseExpGivenByMonsterT;
    currentCoins = currentCoins + coinsGivenByAllMonster;
  }
  if (killNumberMonsterT > 10 && killNumberMonsterT <= 100) {
    /* power of 10 one time */
    let expGivenByMonsterDoubled = baseExpGivenByMonsterT * 2;
    currentExperience = currentExperience + expGivenByMonsterDoubled;
    document.getElementById("monsterTExp").innerHTML = expGivenByMonsterDoubled;
    killNumberMonsterT++;
    currentCoins = currentCoins + coinsGivenByAllMonster;
  }
  if (killNumberMonsterT > 100 && killNumberMonsterT <= 1000) {
    /* power of 10 two times */
    let expGivenByMonsterQuadrupled = baseExpGivenByMonsterT * 4;
    currentExperience = currentExperience + expGivenByMonsterQuadrupled;
    document.getElementById("monsterTExp").innerHTML = expGivenByMonsterQuadrupled;
    killNumberMonsterT++;
    currentCoins = currentCoins + coinsGivenByAllMonster;
  }
  if (killNumberMonsterT > 1000 && killNumberMonsterT <= 10000) {
    /* power of 10 three times */
    let expGivenByMonsterTimesEight = baseExpGivenByMonsterT * 8;
    currentExperience = currentExperience + expGivenByMonsterTimesEight;
    document.getElementById("monsterTExp").innerHTML = expGivenByMonsterTimesEight;
    killNumberMonsterT++;
    currentCoins = currentCoins + coinsGivenByAllMonster;
  }
  if (killNumberMonsterT > 100000) {
    /* power of 10 four times */
    let expGivenByMonsterTimesThirtyTwo = baseExpGivenByMonsterT * 32;
    currentExperience = currentExperience + expGivenByMonsterTimesThirtyTwo;
    document.getElementById("monsterTExp").innerHTML = expGivenByMonsterTimesThirtyTwo;
    killNumberMonsterT++;
    currentCoins = currentCoins + coinsGivenByAllMonster;
  }
}

/* Monster U */
var killNumberMonsterU = 0;
var baseExpGivenByMonsterU = 32;
var upgradeNumberMonsterU = 0;
var costForUpgradeMonsterU = 32;

function saveForMonsterU() {
  let saveForMonsterU = {
    KeyKillNumberMonsterU: killNumberMonsterU,
    KeyBaseExpGivenByMonsterU: baseExpGivenByMonsterU,
    KeyCostForUpgradeMonsterU: costForUpgradeMonsterU,
    KeyUpgradeNumberMonsterU: upgradeNumberMonsterU,
  };
  let saveForMonsterUSerialized = JSON.stringify(saveForMonsterU);
  localStorage.setItem("saveForMonsterU", saveForMonsterUSerialized);
}

setInterval(saveForMonsterU, 15000);

let saveExistsForMonsterU = localStorage.getItem("saveForMonsterU");

function loadForMonsterU() {
  if (saveExistsForMonsterU) {
    let saveForMonsterUDeserialized = JSON.parse(localStorage.getItem("saveForMonsterU"));

    killNumberMonsterU = saveForMonsterUDeserialized.KeyKillNumberMonsterU;
    baseExpGivenByMonsterU = saveForMonsterUDeserialized.KeyBaseExpGivenByMonsterU;
    costForUpgradeMonsterU = saveForMonsterUDeserialized.KeyCostForUpgradeMonsterU;
    upgradeNumberMonsterU = saveForMonsterUDeserialized.KeyUpgradeNumberMonsterU;
  }
  if (!saveExistsForMonsterU) {
    saveForMonsterU();
  }
}

setTimeout(loadForMonsterU, 250);

let btnUpgradeMonsterUInHTML = document.getElementById("btnUpgradeMonsterU");
btnUpgradeMonsterUInHTML.addEventListener("click", () => {
  upgradesForMonsterU();
});

function displayForStatsMonsterU() {
  document.getElementById("btnUpgradeMonsterU").innerHTML = costForUpgradeMonsterU;
  document.getElementById("monsterUUpgrade").innerHTML = upgradeNumberMonsterU;
  document.getElementById("monsterUKill").innerHTML = killNumberMonsterU;
}

setInterval(displayForStatsMonsterU, 325);

function upgradesForMonsterU() {
  if (upgradeNumberMonsterU <= 10 && currentCoins >= costForUpgradeMonsterU) {
    //add one to the base experience given by this monster
    baseExpGivenByMonsterU = baseExpGivenByMonsterU + 1;
    //subtract the cost from gold pile
    currentCoins = currentCoins - costForUpgradeMonsterU;
    //add one to the upgrade number and the cost of an upgrade
    upgradeNumberMonsterU = upgradeNumberMonsterU + 1;
    costForUpgradeMonsterU = costForUpgradeMonsterU + 32;
    //update the displays of the cost and the number of upgrades (refers to base experience boost)
  }
  if (upgradeNumberMonsterU > 10 && upgradeNumberMonsterU <= 100 && currentCoins >= costForUpgradeMonsterU) {
    baseExpGivenByMonsterU = baseExpGivenByMonsterU + 1;
    currentCoins = currentCoins - costForUpgradeMonsterU;
    upgradeNumberMonsterU++;
    costForUpgradeMonsterU = costForUpgradeMonsterU + 64;
  }
  if (upgradeNumberMonsterU > 100 && upgradeNumberMonsterU <= 1000 && currentCoins >= costForUpgradeMonsterU) {
    baseExpGivenByMonsterU = baseExpGivenByMonsterU + 1;
    currentCoins = currentCoins - costForUpgradeMonsterU;
    upgradeNumberMonsterU++;
    costForUpgradeMonsterU = costForUpgradeMonsterU + 128;
  }
}

function btnFightMonsterU() {
  if (killNumberMonsterU <= 10) {
    /* initial kill value before doubling... */
    currentExperience = currentExperience + baseExpGivenByMonsterU;
    killNumberMonsterU++;
    document.getElementById("monsterUExp").innerHTML = baseExpGivenByMonsterU;
    currentCoins = currentCoins + coinsGivenByAllMonster;
  }
  if (killNumberMonsterU > 10 && killNumberMonsterU <= 100) {
    /* power of 10 one time */
    let expGivenByMonsterDoubled = baseExpGivenByMonsterU * 2;
    currentExperience = currentExperience + expGivenByMonsterDoubled;
    document.getElementById("monsterUExp").innerHTML = expGivenByMonsterDoubled;
    killNumberMonsterU++;
    currentCoins = currentCoins + coinsGivenByAllMonster;
  }
  if (killNumberMonsterU > 100 && killNumberMonsterU <= 1000) {
    /* power of 10 two times */
    let expGivenByMonsterQuadrupled = baseExpGivenByMonsterU * 4;
    currentExperience = currentExperience + expGivenByMonsterQuadrupled;
    document.getElementById("monsterUExp").innerHTML = expGivenByMonsterQuadrupled;
    killNumberMonsterU++;
    currentCoins = currentCoins + coinsGivenByAllMonster;
  }
  if (killNumberMonsterU > 1000 && killNumberMonsterU <= 10000) {
    /* power of 10 three times */
    let expGivenByMonsterTimesEight = baseExpGivenByMonsterU * 8;
    currentExperience = currentExperience + expGivenByMonsterTimesEight;
    document.getElementById("monsterUExp").innerHTML = expGivenByMonsterTimesEight;
    killNumberMonsterU++;
    currentCoins = currentCoins + coinsGivenByAllMonster;
  }
  if (killNumberMonsterU > 100000) {
    /* power of 10 four times */
    let expGivenByMonsterTimesThirtyTwo = baseExpGivenByMonsterU * 32;
    currentExperience = currentExperience + expGivenByMonsterTimesThirtyTwo;
    document.getElementById("monsterUExp").innerHTML = expGivenByMonsterTimesThirtyTwo;
    killNumberMonsterU++;
    currentCoins = currentCoins + coinsGivenByAllMonster;
  }
}

/* Monster V */
var killNumberMonsterV = 0;
var baseExpGivenByMonsterV = 32;
var upgradeNumberMonsterV = 0;
var costForUpgradeMonsterV = 32;

function saveForMonsterV() {
  let saveForMonsterV = {
    KeyKillNumberMonsterV: killNumberMonsterV,
    KeyBaseExpGivenByMonsterV: baseExpGivenByMonsterV,
    KeyCostForUpgradeMonsterV: costForUpgradeMonsterV,
    KeyUpgradeNumberMonsterV: upgradeNumberMonsterV,
  };
  let saveForMonsterVSerialized = JSON.stringify(saveForMonsterV);
  localStorage.setItem("saveForMonsterV", saveForMonsterVSerialized);
}

setInterval(saveForMonsterV, 15000);

let saveExistsForMonsterV = localStorage.getItem("saveForMonsterV");

function loadForMonsterV() {
  if (saveExistsForMonsterV) {
    let saveForMonsterVDeserialized = JSON.parse(localStorage.getItem("saveForMonsterV"));

    killNumberMonsterV = saveForMonsterVDeserialized.KeyKillNumberMonsterV;
    baseExpGivenByMonsterV = saveForMonsterVDeserialized.KeyBaseExpGivenByMonsterV;
    costForUpgradeMonsterV = saveForMonsterVDeserialized.KeyCostForUpgradeMonsterV;
    upgradeNumberMonsterV = saveForMonsterVDeserialized.KeyUpgradeNumberMonsterV;
  }
  if (!saveExistsForMonsterV) {
    saveForMonsterV();
  }
}

setTimeout(loadForMonsterV, 250);

let btnUpgradeMonsterVInHTML = document.getElementById("btnUpgradeMonsterV");
btnUpgradeMonsterVInHTML.addEventListener("click", () => {
  upgradesForMonsterV();
});

function displayForStatsMonsterV() {
  document.getElementById("btnUpgradeMonsterV").innerHTML = costForUpgradeMonsterV;
  document.getElementById("monsterVUpgrade").innerHTML = upgradeNumberMonsterV;
  document.getElementById("monsterVKill").innerHTML = killNumberMonsterV;
}

setInterval(displayForStatsMonsterV, 325);

function upgradesForMonsterV() {
  if (upgradeNumberMonsterV <= 10 && currentCoins >= costForUpgradeMonsterV) {
    //add one to the base experience given by this monster
    baseExpGivenByMonsterV = baseExpGivenByMonsterV + 1;
    //subtract the cost from gold pile
    currentCoins = currentCoins - costForUpgradeMonsterV;
    //add one to the upgrade number and the cost of an upgrade
    upgradeNumberMonsterV = upgradeNumberMonsterV + 1;
    costForUpgradeMonsterV = costForUpgradeMonsterV + 32;
    //update the displays of the cost and the number of upgrades (refers to base experience boost)
  }
  if (upgradeNumberMonsterV > 10 && upgradeNumberMonsterV <= 100 && currentCoins >= costForUpgradeMonsterV) {
    baseExpGivenByMonsterV = baseExpGivenByMonsterV + 1;
    currentCoins = currentCoins - costForUpgradeMonsterV;
    upgradeNumberMonsterV++;
    costForUpgradeMonsterV = costForUpgradeMonsterV + 64;
  }
  if (upgradeNumberMonsterV > 100 && upgradeNumberMonsterV <= 1000 && currentCoins >= costForUpgradeMonsterV) {
    baseExpGivenByMonsterV = baseExpGivenByMonsterV + 1;
    currentCoins = currentCoins - costForUpgradeMonsterV;
    upgradeNumberMonsterV++;
    costForUpgradeMonsterV = costForUpgradeMonsterV + 128;
  }
}

function btnFightMonsterV() {
  if (killNumberMonsterV <= 10) {
    /* initial kill value before doubling... */
    currentExperience = currentExperience + baseExpGivenByMonsterV;
    killNumberMonsterV++;
    document.getElementById("monsterVExp").innerHTML = baseExpGivenByMonsterV;
    currentCoins = currentCoins + coinsGivenByAllMonster;
  }
  if (killNumberMonsterV > 10 && killNumberMonsterV <= 100) {
    /* power of 10 one time */
    let expGivenByMonsterDoubled = baseExpGivenByMonsterV * 2;
    currentExperience = currentExperience + expGivenByMonsterDoubled;
    document.getElementById("monsterVExp").innerHTML = expGivenByMonsterDoubled;
    killNumberMonsterV++;
    currentCoins = currentCoins + coinsGivenByAllMonster;
  }
  if (killNumberMonsterV > 100 && killNumberMonsterV <= 1000) {
    /* power of 10 two times */
    let expGivenByMonsterQuadrupled = baseExpGivenByMonsterV * 4;
    currentExperience = currentExperience + expGivenByMonsterQuadrupled;
    document.getElementById("monsterVExp").innerHTML = expGivenByMonsterQuadrupled;
    killNumberMonsterV++;
    currentCoins = currentCoins + coinsGivenByAllMonster;
  }
  if (killNumberMonsterV > 1000 && killNumberMonsterV <= 10000) {
    /* power of 10 three times */
    let expGivenByMonsterTimesEight = baseExpGivenByMonsterV * 8;
    currentExperience = currentExperience + expGivenByMonsterTimesEight;
    document.getElementById("monsterVExp").innerHTML = expGivenByMonsterTimesEight;
    killNumberMonsterV++;
    currentCoins = currentCoins + coinsGivenByAllMonster;
  }
  if (killNumberMonsterV > 100000) {
    /* power of 10 four times */
    let expGivenByMonsterTimesThirtyTwo = baseExpGivenByMonsterV * 32;
    currentExperience = currentExperience + expGivenByMonsterTimesThirtyTwo;
    document.getElementById("monsterVExp").innerHTML = expGivenByMonsterTimesThirtyTwo;
    killNumberMonsterV++;
    currentCoins = currentCoins + coinsGivenByAllMonster;
  }
}

/* Monster W */
var killNumberMonsterW = 0;
var baseExpGivenByMonsterW = 32;
var upgradeNumberMonsterW = 0;
var costForUpgradeMonsterW = 32;

function saveForMonsterW() {
  let saveForMonsterW = {
    KeyKillNumberMonsterW: killNumberMonsterW,
    KeyBaseExpGivenByMonsterW: baseExpGivenByMonsterW,
    KeyCostForUpgradeMonsterW: costForUpgradeMonsterW,
    KeyUpgradeNumberMonsterW: upgradeNumberMonsterW,
  };
  let saveForMonsterWSerialized = JSON.stringify(saveForMonsterW);
  localStorage.setItem("saveForMonsterW", saveForMonsterWSerialized);
}

setInterval(saveForMonsterW, 15000);

let saveExistsForMonsterW = localStorage.getItem("saveForMonsterW");

function loadForMonsterW() {
  if (saveExistsForMonsterW) {
    let saveForMonsterWDeserialized = JSON.parse(localStorage.getItem("saveForMonsterW"));

    killNumberMonsterW = saveForMonsterWDeserialized.KeyKillNumberMonsterW;
    baseExpGivenByMonsterW = saveForMonsterWDeserialized.KeyBaseExpGivenByMonsterW;
    costForUpgradeMonsterW = saveForMonsterWDeserialized.KeyCostForUpgradeMonsterW;
    upgradeNumberMonsterW = saveForMonsterWDeserialized.KeyUpgradeNumberMonsterW;
  }
  if (!saveExistsForMonsterW) {
    saveForMonsterW();
  }
}

setTimeout(loadForMonsterW, 250);

let btnUpgradeMonsterWInHTML = document.getElementById("btnUpgradeMonsterW");
btnUpgradeMonsterWInHTML.addEventListener("click", () => {
  upgradesForMonsterW();
});

function displayForStatsMonsterW() {
  document.getElementById("btnUpgradeMonsterW").innerHTML = costForUpgradeMonsterW;
  document.getElementById("monsterWUpgrade").innerHTML = upgradeNumberMonsterW;
  document.getElementById("monsterWKill").innerHTML = killNumberMonsterW;
}

setInterval(displayForStatsMonsterW, 325);

function upgradesForMonsterW() {
  if (upgradeNumberMonsterW <= 10 && currentCoins >= costForUpgradeMonsterW) {
    //add one to the base experience given by this monster
    baseExpGivenByMonsterW = baseExpGivenByMonsterW + 1;
    //subtract the cost from gold pile
    currentCoins = currentCoins - costForUpgradeMonsterW;
    //add one to the upgrade number and the cost of an upgrade
    upgradeNumberMonsterW = upgradeNumberMonsterW + 1;
    costForUpgradeMonsterW = costForUpgradeMonsterW + 32;
    //update the displays of the cost and the number of upgrades (refers to base experience boost)
  }
  if (upgradeNumberMonsterW > 10 && upgradeNumberMonsterW <= 100 && currentCoins >= costForUpgradeMonsterW) {
    baseExpGivenByMonsterW = baseExpGivenByMonsterW + 1;
    currentCoins = currentCoins - costForUpgradeMonsterW;
    upgradeNumberMonsterW++;
    costForUpgradeMonsterW = costForUpgradeMonsterW + 64;
  }
  if (upgradeNumberMonsterW > 100 && upgradeNumberMonsterW <= 1000 && currentCoins >= costForUpgradeMonsterW) {
    baseExpGivenByMonsterW = baseExpGivenByMonsterW + 1;
    currentCoins = currentCoins - costForUpgradeMonsterW;
    upgradeNumberMonsterW++;
    costForUpgradeMonsterW = costForUpgradeMonsterW + 128;
  }
}

function btnFightMonsterW() {
  if (killNumberMonsterW <= 10) {
    /* initial kill value before doubling... */
    currentExperience = currentExperience + baseExpGivenByMonsterW;
    killNumberMonsterW++;
    document.getElementById("monsterWExp").innerHTML = baseExpGivenByMonsterW;
    currentCoins = currentCoins + coinsGivenByAllMonster;
  }
  if (killNumberMonsterW > 10 && killNumberMonsterW <= 100) {
    /* power of 10 one time */
    let expGivenByMonsterDoubled = baseExpGivenByMonsterW * 2;
    currentExperience = currentExperience + expGivenByMonsterDoubled;
    document.getElementById("monsterWExp").innerHTML = expGivenByMonsterDoubled;
    killNumberMonsterW++;
    currentCoins = currentCoins + coinsGivenByAllMonster;
  }
  if (killNumberMonsterW > 100 && killNumberMonsterW <= 1000) {
    /* power of 10 two times */
    let expGivenByMonsterQuadrupled = baseExpGivenByMonsterW * 4;
    currentExperience = currentExperience + expGivenByMonsterQuadrupled;
    document.getElementById("monsterWExp").innerHTML = expGivenByMonsterQuadrupled;
    killNumberMonsterW++;
    currentCoins = currentCoins + coinsGivenByAllMonster;
  }
  if (killNumberMonsterW > 1000 && killNumberMonsterW <= 10000) {
    /* power of 10 three times */
    let expGivenByMonsterTimesEight = baseExpGivenByMonsterW * 8;
    currentExperience = currentExperience + expGivenByMonsterTimesEight;
    document.getElementById("monsterWExp").innerHTML = expGivenByMonsterTimesEight;
    killNumberMonsterW++;
    currentCoins = currentCoins + coinsGivenByAllMonster;
  }
  if (killNumberMonsterW > 100000) {
    /* power of 10 four times */
    let expGivenByMonsterTimesThirtyTwo = baseExpGivenByMonsterW * 32;
    currentExperience = currentExperience + expGivenByMonsterTimesThirtyTwo;
    document.getElementById("monsterWExp").innerHTML = expGivenByMonsterTimesThirtyTwo;
    killNumberMonsterW++;
    currentCoins = currentCoins + coinsGivenByAllMonster;
  }
}

/* Monster X */
var killNumberMonsterX = 0;
var baseExpGivenByMonsterX = 32;
var upgradeNumberMonsterX = 0;
var costForUpgradeMonsterX = 32;

function saveForMonsterX() {
  let saveForMonsterX = {
    KeyKillNumberMonsterX: killNumberMonsterX,
    KeyBaseExpGivenByMonsterX: baseExpGivenByMonsterX,
    KeyCostForUpgradeMonsterX: costForUpgradeMonsterX,
    KeyUpgradeNumberMonsterX: upgradeNumberMonsterX,
  };
  let saveForMonsterXSerialized = JSON.stringify(saveForMonsterX);
  localStorage.setItem("saveForMonsterX", saveForMonsterXSerialized);
}

setInterval(saveForMonsterX, 15000);

let saveExistsForMonsterX = localStorage.getItem("saveForMonsterX");

function loadForMonsterX() {
  if (saveExistsForMonsterX) {
    let saveForMonsterXDeserialized = JSON.parse(localStorage.getItem("saveForMonsterX"));

    killNumberMonsterX = saveForMonsterXDeserialized.KeyKillNumberMonsterX;
    baseExpGivenByMonsterX = saveForMonsterXDeserialized.KeyBaseExpGivenByMonsterX;
    costForUpgradeMonsterX = saveForMonsterXDeserialized.KeyCostForUpgradeMonsterX;
    upgradeNumberMonsterX = saveForMonsterXDeserialized.KeyUpgradeNumberMonsterX;
  }
  if (!saveExistsForMonsterX) {
    saveForMonsterX();
  }
}

setTimeout(loadForMonsterX, 250);

let btnUpgradeMonsterXInHTML = document.getElementById("btnUpgradeMonsterX");
btnUpgradeMonsterXInHTML.addEventListener("click", () => {
  upgradesForMonsterX();
});

function displayForStatsMonsterX() {
  document.getElementById("btnUpgradeMonsterX").innerHTML = costForUpgradeMonsterX;
  document.getElementById("monsterXUpgrade").innerHTML = upgradeNumberMonsterX;
  document.getElementById("monsterXKill").innerHTML = killNumberMonsterX;
}

setInterval(displayForStatsMonsterX, 325);

function upgradesForMonsterX() {
  if (upgradeNumberMonsterX <= 10 && currentCoins >= costForUpgradeMonsterX) {
    //add one to the base experience given by this monster
    baseExpGivenByMonsterX = baseExpGivenByMonsterX + 1;
    //subtract the cost from gold pile
    currentCoins = currentCoins - costForUpgradeMonsterX;
    //add one to the upgrade number and the cost of an upgrade
    upgradeNumberMonsterX = upgradeNumberMonsterX + 1;
    costForUpgradeMonsterX = costForUpgradeMonsterX + 32;
    //update the displays of the cost and the number of upgrades (refers to base experience boost)
  }
  if (upgradeNumberMonsterX > 10 && upgradeNumberMonsterX <= 100 && currentCoins >= costForUpgradeMonsterX) {
    baseExpGivenByMonsterX = baseExpGivenByMonsterX + 1;
    currentCoins = currentCoins - costForUpgradeMonsterX;
    upgradeNumberMonsterX++;
    costForUpgradeMonsterX = costForUpgradeMonsterX + 64;
  }
  if (upgradeNumberMonsterX > 100 && upgradeNumberMonsterX <= 1000 && currentCoins >= costForUpgradeMonsterX) {
    baseExpGivenByMonsterX = baseExpGivenByMonsterX + 1;
    currentCoins = currentCoins - costForUpgradeMonsterX;
    upgradeNumberMonsterX++;
    costForUpgradeMonsterX = costForUpgradeMonsterX + 128;
  }
}

function btnFightMonsterX() {
  if (killNumberMonsterX <= 10) {
    /* initial kill value before doubling... */
    currentExperience = currentExperience + baseExpGivenByMonsterX;
    killNumberMonsterX++;
    document.getElementById("monsterXExp").innerHTML = baseExpGivenByMonsterX;
    currentCoins = currentCoins + coinsGivenByAllMonster;
  }
  if (killNumberMonsterX > 10 && killNumberMonsterX <= 100) {
    /* power of 10 one time */
    let expGivenByMonsterDoubled = baseExpGivenByMonsterX * 2;
    currentExperience = currentExperience + expGivenByMonsterDoubled;
    document.getElementById("monsterXExp").innerHTML = expGivenByMonsterDoubled;
    killNumberMonsterX++;
    currentCoins = currentCoins + coinsGivenByAllMonster;
  }
  if (killNumberMonsterX > 100 && killNumberMonsterX <= 1000) {
    /* power of 10 two times */
    let expGivenByMonsterQuadrupled = baseExpGivenByMonsterX * 4;
    currentExperience = currentExperience + expGivenByMonsterQuadrupled;
    document.getElementById("monsterXExp").innerHTML = expGivenByMonsterQuadrupled;
    killNumberMonsterX++;
    currentCoins = currentCoins + coinsGivenByAllMonster;
  }
  if (killNumberMonsterX > 1000 && killNumberMonsterX <= 10000) {
    /* power of 10 three times */
    let expGivenByMonsterTimesEight = baseExpGivenByMonsterX * 8;
    currentExperience = currentExperience + expGivenByMonsterTimesEight;
    document.getElementById("monsterXExp").innerHTML = expGivenByMonsterTimesEight;
    killNumberMonsterX++;
    currentCoins = currentCoins + coinsGivenByAllMonster;
  }
  if (killNumberMonsterX > 100000) {
    /* power of 10 four times */
    let expGivenByMonsterTimesThirtyTwo = baseExpGivenByMonsterX * 32;
    currentExperience = currentExperience + expGivenByMonsterTimesThirtyTwo;
    document.getElementById("monsterXExp").innerHTML = expGivenByMonsterTimesThirtyTwo;
    killNumberMonsterX++;
    currentCoins = currentCoins + coinsGivenByAllMonster;
  }
}

/* Monster Y */
var killNumberMonsterY = 0;
var baseExpGivenByMonsterY = 32;
var upgradeNumberMonsterY = 0;
var costForUpgradeMonsterY = 32;

function saveForMonsterY() {
  let saveForMonsterY = {
    KeyKillNumberMonsterY: killNumberMonsterY,
    KeyBaseExpGivenByMonsterY: baseExpGivenByMonsterY,
    KeyCostForUpgradeMonsterY: costForUpgradeMonsterY,
    KeyUpgradeNumberMonsterY: upgradeNumberMonsterY,
  };
  let saveForMonsterYSerialized = JSON.stringify(saveForMonsterY);
  localStorage.setItem("saveForMonsterY", saveForMonsterYSerialized);
}

setInterval(saveForMonsterY, 15000);

let saveExistsForMonsterY = localStorage.getItem("saveForMonsterY");

function loadForMonsterY() {
  if (saveExistsForMonsterY) {
    let saveForMonsterYDeserialized = JSON.parse(localStorage.getItem("saveForMonsterY"));

    killNumberMonsterY = saveForMonsterYDeserialized.KeyKillNumberMonsterY;
    baseExpGivenByMonsterY = saveForMonsterYDeserialized.KeyBaseExpGivenByMonsterY;
    costForUpgradeMonsterY = saveForMonsterYDeserialized.KeyCostForUpgradeMonsterY;
    upgradeNumberMonsterY = saveForMonsterYDeserialized.KeyUpgradeNumberMonsterY;
  }
  if (!saveExistsForMonsterY) {
    saveForMonsterY();
  }
}

setTimeout(loadForMonsterY, 250);

let btnUpgradeMonsterYInHTML = document.getElementById("btnUpgradeMonsterY");
btnUpgradeMonsterYInHTML.addEventListener("click", () => {
  upgradesForMonsterY();
});

function displayForStatsMonsterY() {
  document.getElementById("btnUpgradeMonsterY").innerHTML = costForUpgradeMonsterY;
  document.getElementById("monsterYUpgrade").innerHTML = upgradeNumberMonsterY;
  document.getElementById("monsterYKill").innerHTML = killNumberMonsterY;
}

setInterval(displayForStatsMonsterY, 325);

function upgradesForMonsterY() {
  if (upgradeNumberMonsterY <= 10 && currentCoins >= costForUpgradeMonsterY) {
    //add one to the base experience given by this monster
    baseExpGivenByMonsterY = baseExpGivenByMonsterY + 1;
    //subtract the cost from gold pile
    currentCoins = currentCoins - costForUpgradeMonsterY;
    //add one to the upgrade number and the cost of an upgrade
    upgradeNumberMonsterY = upgradeNumberMonsterY + 1;
    costForUpgradeMonsterY = costForUpgradeMonsterY + 32;
    //update the displays of the cost and the number of upgrades (refers to base experience boost)
  }
  if (upgradeNumberMonsterY > 10 && upgradeNumberMonsterY <= 100 && currentCoins >= costForUpgradeMonsterY) {
    baseExpGivenByMonsterY = baseExpGivenByMonsterY + 1;
    currentCoins = currentCoins - costForUpgradeMonsterY;
    upgradeNumberMonsterY++;
    costForUpgradeMonsterY = costForUpgradeMonsterY + 64;
  }
  if (upgradeNumberMonsterY > 100 && upgradeNumberMonsterY <= 1000 && currentCoins >= costForUpgradeMonsterY) {
    baseExpGivenByMonsterY = baseExpGivenByMonsterY + 1;
    currentCoins = currentCoins - costForUpgradeMonsterY;
    upgradeNumberMonsterY++;
    costForUpgradeMonsterY = costForUpgradeMonsterY + 128;
  }
}

function btnFightMonsterY() {
  if (killNumberMonsterY <= 10) {
    /* initial kill value before doubling... */
    currentExperience = currentExperience + baseExpGivenByMonsterY;
    killNumberMonsterY++;
    document.getElementById("monsterYExp").innerHTML = baseExpGivenByMonsterY;
    currentCoins = currentCoins + coinsGivenByAllMonster;
  }
  if (killNumberMonsterY > 10 && killNumberMonsterY <= 100) {
    /* power of 10 one time */
    let expGivenByMonsterDoubled = baseExpGivenByMonsterY * 2;
    currentExperience = currentExperience + expGivenByMonsterDoubled;
    document.getElementById("monsterYExp").innerHTML = expGivenByMonsterDoubled;
    killNumberMonsterY++;
    currentCoins = currentCoins + coinsGivenByAllMonster;
  }
  if (killNumberMonsterY > 100 && killNumberMonsterY <= 1000) {
    /* power of 10 two times */
    let expGivenByMonsterQuadrupled = baseExpGivenByMonsterY * 4;
    currentExperience = currentExperience + expGivenByMonsterQuadrupled;
    document.getElementById("monsterYExp").innerHTML = expGivenByMonsterQuadrupled;
    killNumberMonsterY++;
    currentCoins = currentCoins + coinsGivenByAllMonster;
  }
  if (killNumberMonsterY > 1000 && killNumberMonsterY <= 10000) {
    /* power of 10 three times */
    let expGivenByMonsterTimesEight = baseExpGivenByMonsterY * 8;
    currentExperience = currentExperience + expGivenByMonsterTimesEight;
    document.getElementById("monsterYExp").innerHTML = expGivenByMonsterTimesEight;
    killNumberMonsterY++;
    currentCoins = currentCoins + coinsGivenByAllMonster;
  }
  if (killNumberMonsterY > 100000) {
    /* power of 10 four times */
    let expGivenByMonsterTimesThirtyTwo = baseExpGivenByMonsterY * 32;
    currentExperience = currentExperience + expGivenByMonsterTimesThirtyTwo;
    document.getElementById("monsterYExp").innerHTML = expGivenByMonsterTimesThirtyTwo;
    killNumberMonsterY++;
    currentCoins = currentCoins + coinsGivenByAllMonster;
  }
}

/* Monster Z */
var killNumberMonsterZ = 0;
var baseExpGivenByMonsterZ = 32;
var upgradeNumberMonsterZ = 0;
var costForUpgradeMonsterZ = 32;

function saveForMonsterZ() {
  let saveForMonsterZ = {
    KeyKillNumberMonsterZ: killNumberMonsterZ,
    KeyBaseExpGivenByMonsterZ: baseExpGivenByMonsterZ,
    KeyCostForUpgradeMonsterZ: costForUpgradeMonsterZ,
    KeyUpgradeNumberMonsterZ: upgradeNumberMonsterZ,
  };
  let saveForMonsterZSerialized = JSON.stringify(saveForMonsterZ);
  localStorage.setItem("saveForMonsterZ", saveForMonsterZSerialized);
}

setInterval(saveForMonsterZ, 15000);

let saveExistsForMonsterZ = localStorage.getItem("saveForMonsterZ");

function loadForMonsterZ() {
  if (saveExistsForMonsterZ) {
    let saveForMonsterZDeserialized = JSON.parse(localStorage.getItem("saveForMonsterZ"));

    killNumberMonsterZ = saveForMonsterZDeserialized.KeyKillNumberMonsterZ;
    baseExpGivenByMonsterZ = saveForMonsterZDeserialized.KeyBaseExpGivenByMonsterZ;
    costForUpgradeMonsterZ = saveForMonsterZDeserialized.KeyCostForUpgradeMonsterZ;
    upgradeNumberMonsterZ = saveForMonsterZDeserialized.KeyUpgradeNumberMonsterZ;
  }
  if (!saveExistsForMonsterZ) {
    saveForMonsterZ();
  }
}

setTimeout(loadForMonsterZ, 250);

let btnUpgradeMonsterZInHTML = document.getElementById("btnUpgradeMonsterZ");
btnUpgradeMonsterZInHTML.addEventListener("click", () => {
  upgradesForMonsterZ();
});

function displayForStatsMonsterZ() {
  document.getElementById("btnUpgradeMonsterZ").innerHTML = costForUpgradeMonsterZ;
  document.getElementById("monsterZUpgrade").innerHTML = upgradeNumberMonsterZ;
  document.getElementById("monsterZKill").innerHTML = killNumberMonsterZ;
}

setInterval(displayForStatsMonsterZ, 325);

function upgradesForMonsterZ() {
  if (upgradeNumberMonsterZ <= 10 && currentCoins >= costForUpgradeMonsterZ) {
    //add one to the base experience given by this monster
    baseExpGivenByMonsterZ = baseExpGivenByMonsterZ + 1;
    //subtract the cost from gold pile
    currentCoins = currentCoins - costForUpgradeMonsterZ;
    //add one to the upgrade number and the cost of an upgrade
    upgradeNumberMonsterZ = upgradeNumberMonsterZ + 1;
    costForUpgradeMonsterZ = costForUpgradeMonsterZ + 32;
    //update the displays of the cost and the number of upgrades (refers to base experience boost)
  }
  if (upgradeNumberMonsterZ > 10 && upgradeNumberMonsterZ <= 100 && currentCoins >= costForUpgradeMonsterZ) {
    baseExpGivenByMonsterZ = baseExpGivenByMonsterZ + 1;
    currentCoins = currentCoins - costForUpgradeMonsterZ;
    upgradeNumberMonsterZ++;
    costForUpgradeMonsterZ = costForUpgradeMonsterZ + 64;
  }
  if (upgradeNumberMonsterZ > 100 && upgradeNumberMonsterZ <= 1000 && currentCoins >= costForUpgradeMonsterZ) {
    baseExpGivenByMonsterZ = baseExpGivenByMonsterZ + 1;
    currentCoins = currentCoins - costForUpgradeMonsterZ;
    upgradeNumberMonsterZ++;
    costForUpgradeMonsterZ = costForUpgradeMonsterZ + 128;
  }
}

function btnFightMonsterZ() {
  if (killNumberMonsterZ <= 10) {
    /* initial kill value before doubling... */
    currentExperience = currentExperience + baseExpGivenByMonsterZ;
    killNumberMonsterZ++;
    document.getElementById("monsterZExp").innerHTML = baseExpGivenByMonsterZ;
    currentCoins = currentCoins + coinsGivenByAllMonster;
  }
  if (killNumberMonsterZ > 10 && killNumberMonsterZ <= 100) {
    /* power of 10 one time */
    let expGivenByMonsterDoubled = baseExpGivenByMonsterZ * 2;
    currentExperience = currentExperience + expGivenByMonsterDoubled;
    document.getElementById("monsterZExp").innerHTML = expGivenByMonsterDoubled;
    killNumberMonsterZ++;
    currentCoins = currentCoins + coinsGivenByAllMonster;
  }
  if (killNumberMonsterZ > 100 && killNumberMonsterZ <= 1000) {
    /* power of 10 two times */
    let expGivenByMonsterQuadrupled = baseExpGivenByMonsterZ * 4;
    currentExperience = currentExperience + expGivenByMonsterQuadrupled;
    document.getElementById("monsterZExp").innerHTML = expGivenByMonsterQuadrupled;
    killNumberMonsterZ++;
    currentCoins = currentCoins + coinsGivenByAllMonster;
  }
  if (killNumberMonsterZ > 1000 && killNumberMonsterZ <= 10000) {
    /* power of 10 three times */
    let expGivenByMonsterTimesEight = baseExpGivenByMonsterZ * 8;
    currentExperience = currentExperience + expGivenByMonsterTimesEight;
    document.getElementById("monsterZExp").innerHTML = expGivenByMonsterTimesEight;
    killNumberMonsterZ++;
    currentCoins = currentCoins + coinsGivenByAllMonster;
  }
  if (killNumberMonsterZ > 100000) {
    /* power of 10 four times */
    let expGivenByMonsterTimesThirtyTwo = baseExpGivenByMonsterZ * 32;
    currentExperience = currentExperience + expGivenByMonsterTimesThirtyTwo;
    document.getElementById("monsterZExp").innerHTML = expGivenByMonsterTimesThirtyTwo;
    killNumberMonsterZ++;
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
  saveForMonsterG();
  saveForMonsterH();
  saveForMonsterI();
  saveForMonsterJ();
  saveForMonsterK();
  saveForMonsterL();
  saveForMonsterM();
  saveForMonsterN();
  saveForMonsterO();
  saveForMonsterP();
  saveForMonsterQ();
  saveForMonsterR();
  saveForMonsterS();
  saveForMonsterT();
  saveForMonsterU();
  saveForMonsterV();
  saveForMonsterW();
  saveForMonsterX();
  saveForMonsterY();
  saveForMonsterZ();
}
