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
    return (document.getElementById(
      "experienceBarFillingUp"
    ).style.width = currentRatioPercent + "%");
  } else if (currentRatioPercent >= 100) {
    return (document.getElementById(
      "experienceBarFillingUp"
    ).style.width = 100 + "%");
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
let boolForMonsterAUnlock = false;
let boolForMonsterBUnlock = false;
function intervalUnlockForMonsters() {
  if (currentLevel >= 1 && !boolForMonsterAUnlock) {
    setInterval(btnFightMonsterA, 1000);
    setInterval(saveForMonsterA, 12000);
    boolForMonsterAUnlock = true;
  }
  if (currentLevel >= 3 && !boolForMonsterBUnlock) {
    setInterval(btnFightMonsterB, 1000);
    setInterval(saveForMonsterB, 12000);
    
    document.getElementById("monsterContainerB").classList.remove("visibilityHidden");
    document.getElementById("monsterContainerB").classList.add("visibilityVisible");
    
    document.getElementById("containerForMonsterBUpgrade").classList.remove("visibilityHidden");
    document.getElementById("containerForMonsterBUpgrade").classList.add("visibilityVisible");
    
    document.getElementById("currentLevel").style.color = "rgb(32, 0, 92)";
    document.getElementById("experienceBarFillingUp").style.backgroundColor = "rgb(32, 0, 92)";

    boolForMonsterBUnlock = true;
  }
}
setInterval(intervalUnlockForMonsters, 325);



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
    let saveDeserialized = JSON.parse(
      localStorage.getItem("saveForCommonStats")
    );
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

let btnUpgradeMonsterAInHTML = document.getElementById("btnUpgradeMonsterA");
btnUpgradeMonsterAInHTML.addEventListener("click", () => {
  upgradesForMonsterA();
});

function displayForStatsMonsterA() {
  document.getElementById("btnUpgradeMonsterA").innerHTML =
    costForUpgradeMonsterA;
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
    document.getElementById("monsterAExp").innerHTML =
      expGivenByMonsterQuadrupled;
    killNumberMonsterA++;
    currentCoins = currentCoins + coinsGivenByAllMonster;
  }
  if (killNumberMonsterA > 1000 && killNumberMonsterA <= 10000) {
    /* power of 10 three times */
    let expGivenByMonsterTimesEight = baseExpGivenByMonsterA * 8;
    currentExperience = currentExperience + expGivenByMonsterTimesEight;
    document.getElementById("monsterAExp").innerHTML =
      expGivenByMonsterTimesEight;
    killNumberMonsterA++;
    currentCoins = currentCoins + coinsGivenByAllMonster;
  }
  if (killNumberMonsterA > 10000 && killNumberMonsterA <= 100000) {
    /* power of 10 four times */
    let expGivenByMonsterTimesSixteen = baseExpGivenByMonsterA * 16;
    currentExperience = currentExperience + expGivenByMonsterTimesSixteen;
    document.getElementById("monsterAExp").innerHTML =
      expGivenByMonsterTimesSixteen;
    killNumberMonsterA++;
    currentCoins = currentCoins + coinsGivenByAllMonster;
  }
  if (killNumberMonsterA > 100000) {
    /* power of 10 four times */
    let expGivenByMonsterTimesThirtyTwo = baseExpGivenByMonsterA * 32;
    currentExperience = currentExperience + expGivenByMonsterTimesThirtyTwo;
    document.getElementById("monsterAExp").innerHTML =
      expGivenByMonsterTimesThirtyTwo;
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
  document.getElementById("btnUpgradeMonsterB").innerHTML =
    costForUpgradeMonsterB;
  document.getElementById("monsterBUpgrade").innerHTML = upgradeNumberMonsterB;
  document.getElementById("monsterBKill").innerHTML = killNumberMonsterB;
}

setInterval(displayForStatsMonsterB,  325);

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
    document.getElementById("monsterBExp").innerHTML =
      expGivenByMonsterQuadrupled;
    killNumberMonsterB++;
    currentCoins = currentCoins + coinsGivenByAllMonster;
  }
  if (killNumberMonsterB > 1000 && killNumberMonsterB <= 10000) {
    /* power of 10 three times */
    let expGivenByMonsterTimesEight = baseExpGivenByMonsterB * 8;
    currentExperience = currentExperience + expGivenByMonsterTimesEight;
    document.getElementById("monsterBExp").innerHTML =
      expGivenByMonsterTimesEight;
    killNumberMonsterB++;
    currentCoins = currentCoins + coinsGivenByAllMonster;
  }
  if (killNumberMonsterB > 10000 && killNumberMonsterB <= 100000) {
    /* power of 10 four times */
    let expGivenByMonsterTimesSixteen = baseExpGivenByMonsterB * 16;
    currentExperience = currentExperience + expGivenByMonsterTimesSixteen;
    document.getElementById("monsterBExp").innerHTML =
      expGivenByMonsterTimesSixteen;
    killNumberMonsterB++;
    currentCoins = currentCoins + coinsGivenByAllMonster;
  }
  if (killNumberMonsterB > 100000) {
    /* power of 10 four times */
    let expGivenByMonsterTimesThirtyTwo = baseExpGivenByMonsterB * 32;
    currentExperience = currentExperience + expGivenByMonsterTimesThirtyTwo;
    document.getElementById("monsterBExp").innerHTML =
      expGivenByMonsterTimesThirtyTwo;
    killNumberMonsterB++;
    currentCoins = currentCoins + coinsGivenByAllMonster;
  }
}


/*  
    (Immediately Invoked Function Expression)(); 
    "(WrapTheFunctionHere)" in parentheses and "();"" immediately invoke it! 
    Making it an Immediately Invoked Function Expression (*Anonymous and dont take place in the global Scope...) 
*/
