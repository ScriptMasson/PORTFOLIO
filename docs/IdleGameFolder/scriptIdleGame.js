//Coins script
let currentCoins = 0;
let coinsGivenByAllMonster = 1;



//Exp scripts

let currentExp = 0;
function displayCurrentExperience() {
  document.getElementById("levelUpCurrentExperience").innerHTML = currentExp;
}
displayCurrentExperience();

let requiredExp = 2;
function displayRequiredExperience() {
  let ratio = requiredExp - currentExp;
  if (ratio >= 0) {
    document.getElementById("levelUpRequiredExperience").innerHTML = ratio;
  } else {
    document.getElementById("levelUpRequiredExperience").innerHTML = 0;
  }
}
displayRequiredExperience();

let currentLevel = 1;
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
    document.getElementById("levelUpExperienceBarFillingUp").style.backgroundColor = "blue";
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
    document.getElementById("levelUpExperienceBarFillingUp").style.backgroundColor = "rgb(0, 110, 255)";
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
      document.getElementById("levelUpExperienceBarFillingUp").style.backgroundColor = "rgb(0, 223, 204)";
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
    document.getElementById("levelUpExperienceBarFillingUp").style.backgroundColor = "rgb(0, 255, 170)";
    if (killNumberMonsterE === 0) {
      setInterval(btnFightMonsterE, 1000);
      killNumberMonsterE++;
    }
}
}

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

let killNumberMonsterA = 0;
killNumberMonsterA++;
let expGivenByMonsterA = 1;
function btnFightMonsterA() {
  if (killNumberMonsterA <= 10) {
    /* initial kill value before doubling... */
    currentExp = currentExp + expGivenByMonsterA;
    document.getElementById("monsterAExp").innerHTML = expGivenByMonsterA;
    document.getElementById("monsterAKill").innerHTML = killNumberMonsterA;
    killNumberMonsterA++;
    currentCoins = currentCoins + coinsGivenByAllMonster;
  }
  if (killNumberMonsterA > 10 && killNumberMonsterA <= 100) {
    /* power of 10 one time */
    let expGivenByMonsterDoubled = expGivenByMonsterA * 2;
    currentExp = currentExp + expGivenByMonsterDoubled;
    document.getElementById("monsterAExp").innerHTML = expGivenByMonsterDoubled;
    document.getElementById("monsterAKill").innerHTML = killNumberMonsterA;
    killNumberMonsterA++;
    currentCoins = currentCoins + coinsGivenByAllMonster;
  }
  if (killNumberMonsterA > 100 && killNumberMonsterA <= 1000) {
    /* power of 10 two times */
    let expGivenByMonsterQuadrupled = expGivenByMonsterA * 4;
    currentExp = currentExp + expGivenByMonsterQuadrupled;
    document.getElementById("monsterAExp").innerHTML = expGivenByMonsterQuadrupled;
    document.getElementById("monsterAKill").innerHTML = killNumberMonsterA;
    killNumberMonsterA++;
    currentCoins = currentCoins + coinsGivenByAllMonster;
  }
  if (killNumberMonsterA > 1000 && killNumberMonsterA <= 10000) {
    /* power of 10 three times */
    let expGivenByMonsterTimesEight = expGivenByMonsterA * 8;
    currentExp = currentExp + expGivenByMonsterTimesEight;
    document.getElementById("monsterAExp").innerHTML = expGivenByMonsterTimesEight;
    document.getElementById("monsterAKill").innerHTML = killNumberMonsterA;
    killNumberMonsterA++;
    currentCoins = currentCoins + coinsGivenByAllMonster;
  }
  if (killNumberMonsterA > 10000 && killNumberMonsterA <= 100000) {
    /* power of 10 four times */
    let expGivenByMonsterTimesSixteen = expGivenByMonsterA * 16;
    currentExp = currentExp + expGivenByMonsterTimesSixteen;
    document.getElementById("monsterAExp").innerHTML = expGivenByMonsterTimesSixteen;
    document.getElementById("monsterAKill").innerHTML = killNumberMonsterA;
    killNumberMonsterA++;
    currentCoins = currentCoins + coinsGivenByAllMonster;
  }
  if (killNumberMonsterA > 100000) {
    /* power of 10 four times */
    let expGivenByMonsterTimesThirtyTwo = expGivenByMonsterA * 32;
    currentExp = currentExp + expGivenByMonsterTimesThirtyTwo;
    document.getElementById("monsterAExp").innerHTML = expGivenByMonsterTimesThirtyTwo;
    document.getElementById("monsterAKill").innerHTML = killNumberMonsterA;
    killNumberMonsterA++;
    currentCoins = currentCoins + coinsGivenByAllMonster;
  }
}

let killNumberMonsterB = 0;
let expGivenByMonsterB = 2;
function btnFightMonsterB() {
  if (killNumberMonsterB <= 10) {
    /* initial kill value before doubling... */
    currentExp = currentExp + 2;
    document.getElementById("monsterBExp").innerHTML = 2;
    document.getElementById("monsterBKill").innerHTML = killNumberMonsterB;
    killNumberMonsterB++;
  }
  if (killNumberMonsterB > 10 && killNumberMonsterB <= 100) {
    /* power of 10 one time */
    currentExp = currentExp + 4;
    document.getElementById("monsterBExp").innerHTML = 4;
    document.getElementById("monsterBKill").innerHTML = killNumberMonsterB;
    killNumberMonsterB++;
  }
  if (killNumberMonsterB > 100 && killNumberMonsterB <= 1000) {
    /* power of 10 two times */
    currentExp = currentExp + 8;
    document.getElementById("monsterBExp").innerHTML = 8;
    document.getElementById("monsterBKill").innerHTML = killNumberMonsterB;
    killNumberMonsterB++;
  }
  if (killNumberMonsterB > 1000 && killNumberMonsterB <= 10000) {
    /* power of 10 three times */
    currentExp = currentExp + 16;
    document.getElementById("monsterBExp").innerHTML = 16;
    document.getElementById("monsterBKill").innerHTML = killNumberMonsterB;
    killNumberMonsterB++;
  }
  if (killNumberMonsterB > 10000 && killNumberMonsterB <= 100000) {
    /* power of 10 four times */
    currentExp = currentExp + 32;
    document.getElementById("monsterBExp").innerHTML = 32;
    document.getElementById("monsterBKill").innerHTML = killNumberMonsterB;
    killNumberMonsterB++;
  }
  if (killNumberMonsterB > 100000) {
    /* power of 10 four times */
    currentExp = currentExp + 64;
    document.getElementById("monsterBExp").innerHTML = 64;
    document.getElementById("monsterBKill").innerHTML = killNumberMonsterB;
    killNumberMonsterB++;
  }
}

let expGivenByMonsterC = 4;
let killNumberMonsterC = 0;
function btnFightMonsterC() {
  if (killNumberMonsterC <= 10) {
    /* initial kill value before doubling... */
    currentExp = currentExp + 4;
    document.getElementById("monsterCExp").innerHTML = 4;
    document.getElementById("monsterCKill").innerHTML = killNumberMonsterC;
    killNumberMonsterC++;
  }
  if (killNumberMonsterC > 10 && killNumberMonsterC <= 100) {
    /* power of 10 one time */
    currentExp = currentExp + 8;
    document.getElementById("monsterCExp").innerHTML = 8;
    document.getElementById("monsterCKill").innerHTML = killNumberMonsterC;
    killNumberMonsterC++;
  }
  if (killNumberMonsterC > 100 && killNumberMonsterC <= 1000) {
    /* power of 10 two times */
    currentExp = currentExp + 16;
    document.getElementById("monsterCExp").innerHTML = 16;
    document.getElementById("monsterCKill").innerHTML = killNumberMonsterC;
    killNumberMonsterC++;
  }
  if (killNumberMonsterC > 1000 && killNumberMonsterC <= 10000) {
    /* power of 10 three times */
    currentExp = currentExp + 32;
    document.getElementById("monsterCExp").innerHTML = 32;
    document.getElementById("monsterCKill").innerHTML = killNumberMonsterC;
    killNumberMonsterC++;
  }
  if (killNumberMonsterC > 10000 && killNumberMonsterC <= 100000) {
    /* power of 10 four times */
    currentExp = currentExp + 64;
    document.getElementById("monsterCExp").innerHTML = 64;
    document.getElementById("monsterCKill").innerHTML = killNumberMonsterC;
    killNumberMonsterC++;
  }
  if (killNumberMonsterC > 100000) {
    /* power of 10 four times */
    currentExp = currentExp + 128;
    document.getElementById("monsterCExp").innerHTML = 128;
    document.getElementById("monsterCKill").innerHTML = killNumberMonsterC;
    killNumberMonsterC++;
  }
}

let expGivenByMonsterD = 8;
let killNumberMonsterD = 0;
function btnFightMonsterD() {
  if (killNumberMonsterD <= 10) {
    /* initial kill value before doubling... */
    currentExp = currentExp + 8;
    document.getElementById("monsterDExp").innerHTML = 8;
    document.getElementById("monsterDKill").innerHTML = killNumberMonsterD;
    killNumberMonsterD++;
  }
  if (killNumberMonsterD > 10 && killNumberMonsterD <= 100) {
    /* power of 10 one time */
    currentExp = currentExp + 16;
    document.getElementById("monsterDExp").innerHTML = 16;
    document.getElementById("monsterDKill").innerHTML = killNumberMonsterD;
    killNumberMonsterD++;
  }
  if (killNumberMonsterD > 100 && killNumberMonsterD <= 1000) {
    /* power of 10 two times */
    currentExp = currentExp + 32;
    document.getElementById("monsterDExp").innerHTML = 32;
    document.getElementById("monsterDKill").innerHTML = killNumberMonsterD;
    killNumberMonsterD++;
  }
  if (killNumberMonsterD > 1000 && killNumberMonsterD <= 10000) {
    /* power of 10 three times */
    currentExp = currentExp + 64;
    document.getElementById("monsterDExp").innerHTML = 64;
    document.getElementById("monsterDKill").innerHTML = killNumberMonsterD;
    killNumberMonsterD++;
  }
  if (killNumberMonsterD > 10000 && killNumberMonsterD <= 100000) {
    /* power of 10 four times */
    currentExp = currentExp + 128;
    document.getElementById("monsterDExp").innerHTML = 128;
    document.getElementById("monsterDKill").innerHTML = killNumberMonsterD;
    killNumberMonsterD++;
  }
  if (killNumberMonsterD > 100000) {
    /* power of 10 four times */
    currentExp = currentExp + 256;
    document.getElementById("monsterDExp").innerHTML = 256;
    document.getElementById("monsterDKill").innerHTML = killNumberMonsterD;
    killNumberMonsterD++;
  }
}

let expGivenByMonsterE = 16;
let killNumberMonsterE = 0;
function btnFightMonsterE() {
  if (killNumberMonsterE <= 10) {
    /* initial kill value before doubling... */
    currentExp = currentExp + 16;
    document.getElementById("monsterEExp").innerHTML = 16;
    document.getElementById("monsterEKill").innerHTML = killNumberMonsterE;
    killNumberMonsterE++;
  }
  if (killNumberMonsterE > 10 && killNumberMonsterE <= 100) {
    /* power of 10 one time */
    currentExp = currentExp + 32;
    document.getElementById("monsterEExp").innerHTML = 32;
    document.getElementById("monsterEKill").innerHTML = killNumberMonsterE;
    killNumberMonsterE++;
  }
  if (killNumberMonsterE > 100 && killNumberMonsterE <= 1000) {
    /* power of 10 two times */
    currentExp = currentExp + 64;
    document.getElementById("monsterEExp").innerHTML = 64;
    document.getElementById("monsterEKill").innerHTML = killNumberMonsterE;
    killNumberMonsterE++;
  }
  if (killNumberMonsterE > 1000 && killNumberMonsterE <= 10000) {
    /* power of 10 three times */
    currentExp = currentExp + 128;
    document.getElementById("monsterEExp").innerHTML = 128;
    document.getElementById("monsterEKill").innerHTML = killNumberMonsterE;
    killNumberMonsterE++;
  }
  if (killNumberMonsterE > 10000 && killNumberMonsterE <= 100000) {
    /* power of 10 four times */
    currentExp = currentExp + 256;
    document.getElementById("monsterEExp").innerHTML = 256;
    document.getElementById("monsterEKill").innerHTML = killNumberMonsterE;
    killNumberMonsterE++;
  }
  if (killNumberMonsterE > 100000) {
    /* power of 10 four times */
    currentExp = currentExp + 512;
    document.getElementById("monsterEExp").innerHTML = 512;
    document.getElementById("monsterEKill").innerHTML = killNumberMonsterE;
    killNumberMonsterE++;
  }
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
    KeyKillNumberMonsterA: killNumberMonsterA,
    KeyKillNumberMonsterB: killNumberMonsterB,
    KeyKillNumberMonsterC: killNumberMonsterC,
    KeyKillNumberMonsterD: killNumberMonsterD,
    KeyKillNumberMonsterE: killNumberMonsterE,
    
  };
  /* Create a variable "saveSerialized" with the value of "JSON.stringify(objectNameHere)" which will serialize to JSON a given object.*/
  let saveSerialized = JSON.stringify(saveProgress);
  /* Now we can send the serialized version of our object to the storage! Using the method: "localStorage.setItem("nameOfKey", serializedVarHere)" */
  localStorage.setItem("saveSerialized", saveSerialized);
}
let saveExists = localStorage.getItem("saveSerialized");
function loadProgressFunction() {
  if (saveExists) {
  /* Create the "saveDeserialized" variable of which the value will be the method to get an item from storage using its "nameOfKey" */
  /* JSON.parse(localStorage.getItem("nameOfKey")); */
  let saveDeserialized = JSON.parse(localStorage.getItem("saveSerialized"));
  /* Reinitialise "saveProgress" as our new "saveDeserialized" to close the loop! */
  /* loop is: Values -> saveProgress -> saveSerialized -> localStorage -> saveDeserialized -> saveProgress -> Values */
  saveProgress = saveDeserialized;
  /* Reinitialised the value of the saved object using our saveDeserialized object which is equal to our beginning "saveProgress" */
  currentExp = saveProgress.KeyCurrentExp;
  currentLevel = saveProgress.KeyCurrentLevel;
  requiredExp = saveProgress.KeyCurrentRequiredExp;
  currentCoins = saveProgress.KeyCurrentCoins;
  coinsGivenByAllMonster = saveProgress.KeyCoinsGivenByAllMonster;
  killNumberMonsterA = saveProgress.KeyKillNumberMonsterA;
  killNumberMonsterB = saveProgress.KeyKillNumberMonsterB;
  killNumberMonsterC = saveProgress.KeyKillNumberMonsterC;
  killNumberMonsterD = saveProgress.KeyKillNumberMonsterD;
  killNumberMonsterE = saveProgress.KeyKillNumberMonsterE;
  }else {return saveProgressFunction();}
}
function attackAllAvailableMonsters() {
  /* Interval starter when the level is reached via loadProgressFunction(); */
  setInterval(btnFightMonsterA, 1000);
  if (currentLevel >= 3) {
    let B = document.getElementById("monsterContainerB");
    B.classList.remove("notUnlocked");
    B.classList.add("nowUnlocked");
    document.getElementById("currentLevel").style.color = "blue";
    setInterval(btnFightMonsterB, 1000);
  }
  if (currentLevel >= 5) {
    let C = document.getElementById("monsterContainerC");
    C.classList.remove("notUnlocked");
    C.classList.add("nowUnlocked");
    document.getElementById("currentLevel").style.color = "rgb(0, 110, 255)";
    setInterval(btnFightMonsterC, 1000);
  }
  if (currentLevel >= 7) {
    let D = document.getElementById("monsterContainerD");
    D.classList.remove("notUnlocked");
    D.classList.add("nowUnlocked");
    document.getElementById("currentLevel").style.color = "rgb(0, 223, 204)";
    setInterval(btnFightMonsterD, 1000);
  }
  if (currentLevel >= 10) {
    let E = document.getElementById("monsterContainerE");
    E.classList.remove("notUnlocked");
    E.classList.add("nowUnlocked");
    document.getElementById("currentLevel").style.color = "rgb(0, 255, 170)";
    setInterval(btnFightMonsterE, 1000);
  }
}

/* Area for boutique */
let coinsBonusBoutique = document.getElementById("coinsBonusBoutique");
let monsterCombatArea = document.getElementById("monsterCombatArea");
let toggleButton = document.getElementById("toggleButton");
let btnBonusBoutique = document.getElementById("btnBonusBoutique");
toggleButton.addEventListener('click', function () {
  // Toggle 1
  monsterCombatArea.classList.add('active');
  monsterCombatArea.classList.remove('hidden');
  coinsBonusBoutique.classList.remove('active');
  coinsBonusBoutique.classList.add('hidden');
});
btnBonusBoutique.addEventListener('click', function () {
  // Toggle 2
  monsterCombatArea.classList.remove('active');
  monsterCombatArea.classList.add('hidden');
  coinsBonusBoutique.classList.remove('hidden');
  coinsBonusBoutique.classList.add('active');
});

/*  
    (Immediately Invoked Function Expression)(); 
    "(WrapTheFunctionHere)" in parentheses and "();"" immediately invoke it! 
    Making it an Immediately Invoked Function Expression (*Anonymous and dont take place in the global Scope...) 
*/
(function iifeIntervalSetForDisplays() {
  /* load progress after 10ms of entering website */
  setTimeout(loadProgressFunction, 10);
  setTimeout(attackAllAvailableMonsters, 20);
  /* set the interval of auto-saving progress to 30seconds */
  setInterval(saveProgressFunction, 15000);
  /* set the interval of the various display function for character stats in the html doc */
  setInterval(displayCurrentExperience, 125);
  setInterval(displayRequiredExperience, 125);
  setInterval(displayForExpBar, 125);
  setInterval(displayCurrentLevel, 125);
  setInterval(LevelUp, 125);
})();
