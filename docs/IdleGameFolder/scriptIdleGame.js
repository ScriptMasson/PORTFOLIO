//Coins script
let currentCoins = 0;
let coinsGivenByAllMonster = 1;

//Exp scripts
let currentLevel = 1;
let currentExp = 0;
let requiredExp = 2;

function displayCurrentLevel() {
  document.getElementById("currentLevel").innerHTML = currentLevel;
  document.getElementById("currentCoins").innerHTML = currentCoins;
}
displayCurrentLevel();
function displayForExpBar() {
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
}
displayForExpBar();

function displayCurrentExperience() {
  document.getElementById("levelUpCurrentExperience").innerHTML = currentExp;
}
displayCurrentExperience();

function displayRequiredExperience() {
  let ratio = requiredExp - currentExp;
  if (ratio >= 0) {
    document.getElementById("levelUpRequiredExperience").innerHTML = ratio;
  } else {
    document.getElementById("levelUpRequiredExperience").innerHTML = 0;
  }
}
displayRequiredExperience();

function LevelUp() {
  if (currentExp >= requiredExp) {
    currentLevel++;
    currentExp = currentExp - requiredExp;
    requiredExp = requiredExp * 2;
  }
  /* interval starter when level is reached via LevelUp(); */
  if (currentLevel >= 3 && currentLevel < 5) {
    let B = document.getElementById("monsterContainerB");
    B.classList.remove("notUnlocked");
    B.classList.add("nowUnlocked");
    document.getElementById("currentLevel").style.color = "blue";
    document.getElementById(
      "levelUpExperienceBarFillingUp"
    ).style.backgroundColor = "blue";
    if (killNumberMonsterB === 0) {
      /* starts the 1sec interval loop when you have never pressed the button before; then add a kill */
      setInterval(btnFightMonsterB, 1000);
      killNumberMonsterB++;
    }
  }
  if (currentLevel >= 5 && currentExp < 7) {
    let C = document.getElementById("monsterContainerC");
    C.classList.remove("notUnlocked");
    C.classList.add("nowUnlocked");
    document.getElementById("currentLevel").style.color = "rgb(0, 110, 255)";
    document.getElementById(
      "levelUpExperienceBarFillingUp"
    ).style.backgroundColor = "rgb(0, 110, 255)";
    if (killNumberMonsterC === 0) {
      setInterval(btnFightMonsterC, 1000);
      killNumberMonsterC++;
    }
  }
  if (currentLevel >= 7 && currentLevel < 10) {
    let D = document.getElementById("monsterContainerD");
    D.classList.remove("notUnlocked");
    D.classList.add("nowUnlocked");
    document.getElementById("currentLevel").style.color = "rgb(0, 223, 204)";
    document.getElementById(
      "levelUpExperienceBarFillingUp"
    ).style.backgroundColor = "rgb(0, 223, 204)";
    if (killNumberMonsterD === 0) {
      setInterval(btnFightMonsterD, 1000);
      killNumberMonsterD++;
    }
  }
  if (currentLevel >= 10 && currentLevel < 13) {
    let E = document.getElementById("monsterContainerE");
    E.classList.remove("notUnlocked");
    E.classList.add("nowUnlocked");
    document.getElementById("currentLevel").style.color = "rgb(0, 255, 170)";
    document.getElementById(
      "levelUpExperienceBarFillingUp"
    ).style.backgroundColor = "rgb(0, 255, 170)";
    if (killNumberMonsterE === 0) {
      setInterval(btnFightMonsterE, 1000);
      killNumberMonsterE++;
    }
  }
}

/* Monsters Script */
/* Monster A */
let killNumberMonsterA = 0;
let baseExpGivenByMonsterA = 1;
let upgradeNumberMonsterA = 0;
let costForUpgradeMonsterA = 1;
let monsterAUpgrade = document.getElementById("monsterAUpgrade");
let btnUpgradeMonsterA = document.getElementById("btnUpgradeMonsterA");
btnUpgradeMonsterA.addEventListener("click", () => {
  upgradesForMonsterA();
});
function upgradesForMonsterA() {
  if (upgradeNumberMonsterA <= 10 && currentCoins >= costForUpgradeMonsterA) {
    //add one to the base experience given by this monster
    baseExpGivenByMonsterA = baseExpGivenByMonsterA + 1;
    //substract the cost from gold pile
    currentCoins = currentCoins - costForUpgradeMonsterA;
    //add one to the upgrade number and the cost of an upgrade
    upgradeNumberMonsterA++;
    costForUpgradeMonsterA++;
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
    btnUpgradeMonsterA.innerHTML = costForUpgradeMonsterA;
    monsterAUpgrade.innerHTML = upgradeNumberMonsterA;
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
    btnUpgradeMonsterA.innerHTML = costForUpgradeMonsterA;
    monsterAUpgrade.innerHTML = upgradeNumberMonsterA;
  }
}
function saveForMonsterA() {
  let saveForMonsterA = {
    KeyKillNumberMonsterA: killNumberMonsterA,
    KeyBaseExpGivenByMonsterA: baseExpGivenByMonsterA,
    KeyCostForUpgradeNumberA: costForUpgradeMonsterA,
    KeyUpgradeNumberMonsterA: upgradeNumberMonsterA,
  };
  let saveForMonsterASerialized = JSON.stringify(saveForMonsterA);
  localStorage.setItem("saveForMonsterA", saveForMonsterASerialized);
}
function loadForMonsterA() {
  let saveForMonsterADeserialized = JSON.parse(
    localStorage.getItem("saveForMonsterA")
  );
  saveForMonsterA = saveForMonsterADeserialized;

  killNumberMonsterA = saveForMonsterA.KeyKillNumberMonsterA;
  baseExpGivenByMonsterA = saveForMonsterA.KeyBaseExpGivenByMonsterA;
  costForUpgradeMonsterA = saveForMonsterA.KeyCostForUpgradeMonsterA;
  upgradeNumberMonsterA = saveForMonsterA.KeyUpgradeNumberMonsterA;
}
function btnFightMonsterA() {
  if (killNumberMonsterA <= 10) {
    /* initial kill value before doubling... */
    currentExp = currentExp + baseExpGivenByMonsterA;
    document.getElementById("monsterAExp").innerHTML = baseExpGivenByMonsterA;
    document.getElementById("monsterAKill").innerHTML = killNumberMonsterA;
    killNumberMonsterA++;
    currentCoins = currentCoins + coinsGivenByAllMonster;
  }
  if (killNumberMonsterA > 10 && killNumberMonsterA <= 100) {
    /* power of 10 one time */
    let expGivenByMonsterDoubled = baseExpGivenByMonsterA * 2;
    currentExp = currentExp + expGivenByMonsterDoubled;
    document.getElementById("monsterAExp").innerHTML = expGivenByMonsterDoubled;
    document.getElementById("monsterAKill").innerHTML = killNumberMonsterA;
    killNumberMonsterA++;
    currentCoins = currentCoins + coinsGivenByAllMonster;
  }
  if (killNumberMonsterA > 100 && killNumberMonsterA <= 1000) {
    /* power of 10 two times */
    let expGivenByMonsterQuadrupled = baseExpGivenByMonsterA * 4;
    currentExp = currentExp + expGivenByMonsterQuadrupled;
    document.getElementById("monsterAExp").innerHTML =
      expGivenByMonsterQuadrupled;
    document.getElementById("monsterAKill").innerHTML = killNumberMonsterA;
    killNumberMonsterA++;
    currentCoins = currentCoins + coinsGivenByAllMonster;
  }
  if (killNumberMonsterA > 1000 && killNumberMonsterA <= 10000) {
    /* power of 10 three times */
    let expGivenByMonsterTimesEight = baseExpGivenByMonsterA * 8;
    currentExp = currentExp + expGivenByMonsterTimesEight;
    document.getElementById("monsterAExp").innerHTML =
      expGivenByMonsterTimesEight;
    document.getElementById("monsterAKill").innerHTML = killNumberMonsterA;
    killNumberMonsterA++;
    currentCoins = currentCoins + coinsGivenByAllMonster;
  }
  if (killNumberMonsterA > 10000 && killNumberMonsterA <= 100000) {
    /* power of 10 four times */
    let expGivenByMonsterTimesSixteen = baseExpGivenByMonsterA * 16;
    currentExp = currentExp + expGivenByMonsterTimesSixteen;
    document.getElementById("monsterAExp").innerHTML =
      expGivenByMonsterTimesSixteen;
    document.getElementById("monsterAKill").innerHTML = killNumberMonsterA;
    killNumberMonsterA++;
    currentCoins = currentCoins + coinsGivenByAllMonster;
  }
  if (killNumberMonsterA > 100000) {
    /* power of 10 four times */
    let expGivenByMonsterTimesThirtyTwo = baseExpGivenByMonsterA * 32;
    currentExp = currentExp + expGivenByMonsterTimesThirtyTwo;
    document.getElementById("monsterAExp").innerHTML =
      expGivenByMonsterTimesThirtyTwo;
    document.getElementById("monsterAKill").innerHTML = killNumberMonsterA;
    killNumberMonsterA++;
    currentCoins = currentCoins + coinsGivenByAllMonster;
  }
}
if (currentLevel >= 1) {
  setInterval(btnFightMonsterA, 1000);
  setInterval(saveForMonsterA, 1000);
  
}

/* Save system */
function saveProgressFunction() {
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
  localStorage.setItem("saveSerialized", saveSerialized);
}

/* Boolean "saveExists" to verify if it is present inside localStorage... */
let saveExists = localStorage.getItem("saveSerialized");
try {
  loadProgressFunction();
} catch (error) {
  saveProgressFunction();
}
function loadProgressFunction() {
  if (saveExists) {
    /* Create the "saveDeserialized" variable of which the value will be the method to get an item from storage using its "nameOfKey" */
    /* JSON.parse(localStorage.getItem("nameOfKey")); */
    let saveDeserialized = JSON.parse(localStorage.getItem("saveSerialized"));
    /* Reinitialise "saveProgress" as our new "saveDeserialized" to close the loop! */
    /* loop is: Values -> saveProgress -> saveSerialized -> localStorage -> saveDeserialized -> saveProgress -> Values */
    saveProgress = saveDeserialized;
    /* Reinitialised the value of the saved object using our saveDeserialized object which is equal to our beginning "saveProgress" */
    /* Recall Global Values */
    currentExp = saveProgress.KeyCurrentExp;
    currentLevel = saveProgress.KeyCurrentLevel;
    requiredExp = saveProgress.KeyCurrentRequiredExp;
    currentCoins = saveProgress.KeyCurrentCoins;
    coinsGivenByAllMonster = saveProgress.KeyCoinsGivenByAllMonster;
  } else {
    return saveProgressFunction();
  }
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

function displayUpgradesStats() {
  /* MonsterA */
  document.getElementById("btnUpgradeMonsterA").innerHTML =
    costForUpgradeMonsterA;
  document.getElementById("monsterAUpgrade").innerHTML = upgradeNumberMonsterA;
}

/*  
    (Immediately Invoked Function Expression)(); 
    "(WrapTheFunctionHere)" in parentheses and "();"" immediately invoke it! 
    Making it an Immediately Invoked Function Expression (*Anonymous and dont take place in the global Scope...) 
*/
(function iifeIntervalSetForDisplays() {
  /* load progress after 10ms of entering website */
  setTimeout(loadProgressFunction, 10);

  setInterval(displayUpgradesStats, 500);
  /* set the interval of auto-saving progress to 30seconds */
  setInterval(saveProgressFunction, 15000);
  /* set the interval of the various display function for character stats in the html doc */
  setInterval(displayCurrentExperience, 500);
  setInterval(displayRequiredExperience, 500);
  setInterval(displayForExpBar, 500);
  setInterval(displayCurrentLevel, 500);
  setInterval(LevelUp, 500);
})();
