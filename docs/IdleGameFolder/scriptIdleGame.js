//Exp scripts

let CurrentExp = 0;
function displayCurrentExperience() {
  document.getElementById("levelUpCurrentExperience").innerHTML = CurrentExp;
}
displayCurrentExperience();

let RequiredExp = 2;
function displayRequiredExperience() {
  let ratio = RequiredExp - CurrentExp;
  if (ratio >= 0) {
    document.getElementById("levelUpRequiredExperience").innerHTML = ratio;
  } else {
    document.getElementById("levelUpRequiredExperience").innerHTML = 0;
  }
}
displayRequiredExperience();

let CurrentLevel = 1;
function LevelUp() {
  if (CurrentExp >= RequiredExp) {
    CurrentLevel++;
    CurrentExp = CurrentExp - RequiredExp;
    RequiredExp = RequiredExp * 2;
  }
  /* interval starter when level is reached via LevelUp(); */
  if (CurrentLevel >= 3 && CurrentLevel < 5) {
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
  if (CurrentLevel >= 5 && CurrentExp < 7) {
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
  if (CurrentLevel >= 7 && CurrentLevel < 10) {
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
  if (CurrentLevel >= 10 && CurrentLevel < 13) {
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
  document.getElementById("currentLevel").innerHTML = CurrentLevel;
}

/*

if (CurrentLevel >= 10) {
  let E = document.getElementById("monsterContainerE");
  E.classList.remove("notUnlocked");
  E.classList.add("nowUnlocked");
  document.getElementById("currentLevel").style.color = "rgb(0, 255, 170)";
}
if (CurrentLevel >= 13) {
  let F = document.getElementById("monsterContainerF");
  F.classList.remove("notUnlocked");
  F.classList.add("nowUnlocked");
  document.getElementById("currentLevel").style.color = "rgb(0, 194, 48)";
}
if (CurrentLevel >= 16) {
  let G = document.getElementById("monsterContainerG");
  G.classList.remove("notUnlocked");
  G.classList.add("nowUnlocked");
  document.getElementById("currentLevel").style.color = "rgb(144, 233, 0)";
}
*/

function displayForExpBar() {
  let currentRatio = CurrentExp / RequiredExp;
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
function btnFightMonsterA() {
  if (killNumberMonsterA <= 10) {
    /* initial kill value before doubling... */
    ++CurrentExp;
    document.getElementById("monsterAExp").innerHTML = 1;
    document.getElementById("monsterAKill").innerHTML = killNumberMonsterA;
    killNumberMonsterA++;
  }
  if (killNumberMonsterA > 10 && killNumberMonsterA <= 100) {
    /* power of 10 one time */
    CurrentExp = CurrentExp + 2;
    document.getElementById("monsterAExp").innerHTML = 2;
    document.getElementById("monsterAKill").innerHTML = killNumberMonsterA;
    killNumberMonsterA++;
  }
  if (killNumberMonsterA > 100 && killNumberMonsterA <= 1000) {
    /* power of 10 two times */
    CurrentExp = CurrentExp + 4;
    document.getElementById("monsterAExp").innerHTML = 4;
    document.getElementById("monsterAKill").innerHTML = killNumberMonsterA;
    killNumberMonsterA++;
  }
  if (killNumberMonsterA > 1000 && killNumberMonsterA <= 10000) {
    /* power of 10 three times */
    CurrentExp = CurrentExp + 8;
    document.getElementById("monsterAExp").innerHTML = 8;
    document.getElementById("monsterAKill").innerHTML = killNumberMonsterA;
    killNumberMonsterA++;
  }
  if (killNumberMonsterA > 10000 && killNumberMonsterA <= 100000) {
    /* power of 10 four times */
    CurrentExp = CurrentExp + 16;
    document.getElementById("monsterAExp").innerHTML = 16;
    document.getElementById("monsterAKill").innerHTML = killNumberMonsterA;
    killNumberMonsterA++;
  }
  if (killNumberMonsterA > 100000) {
    /* power of 10 four times */
    CurrentExp = CurrentExp + 32;
    document.getElementById("monsterAExp").innerHTML = 32;
    document.getElementById("monsterAKill").innerHTML = killNumberMonsterA;
    killNumberMonsterA++;
  }
}

let killNumberMonsterB = 0;
function btnFightMonsterB() {
  if (killNumberMonsterB <= 10) {
    /* initial kill value before doubling... */
    CurrentExp = CurrentExp + 2;
    document.getElementById("monsterBExp").innerHTML = 2;
    document.getElementById("monsterBKill").innerHTML = killNumberMonsterB;
    killNumberMonsterB++;
  }
  if (killNumberMonsterB > 10 && killNumberMonsterB <= 100) {
    /* power of 10 one time */
    CurrentExp = CurrentExp + 4;
    document.getElementById("monsterBExp").innerHTML = 4;
    document.getElementById("monsterBKill").innerHTML = killNumberMonsterB;
    killNumberMonsterB++;
  }
  if (killNumberMonsterB > 100 && killNumberMonsterB <= 1000) {
    /* power of 10 two times */
    CurrentExp = CurrentExp + 8;
    document.getElementById("monsterBExp").innerHTML = 8;
    document.getElementById("monsterBKill").innerHTML = killNumberMonsterB;
    killNumberMonsterB++;
  }
  if (killNumberMonsterB > 1000 && killNumberMonsterB <= 10000) {
    /* power of 10 three times */
    CurrentExp = CurrentExp + 16;
    document.getElementById("monsterBExp").innerHTML = 16;
    document.getElementById("monsterBKill").innerHTML = killNumberMonsterB;
    killNumberMonsterB++;
  }
  if (killNumberMonsterB > 10000 && killNumberMonsterB <= 100000) {
    /* power of 10 four times */
    CurrentExp = CurrentExp + 32;
    document.getElementById("monsterBExp").innerHTML = 32;
    document.getElementById("monsterBKill").innerHTML = killNumberMonsterB;
    killNumberMonsterB++;
  }
  if (killNumberMonsterB > 100000) {
    /* power of 10 four times */
    CurrentExp = CurrentExp + 64;
    document.getElementById("monsterBExp").innerHTML = 64;
    document.getElementById("monsterBKill").innerHTML = killNumberMonsterB;
    killNumberMonsterB++;
  }
}

let killNumberMonsterC = 0;
function btnFightMonsterC() {
  if (killNumberMonsterC <= 10) {
    /* initial kill value before doubling... */
    CurrentExp = CurrentExp + 4;
    document.getElementById("monsterCExp").innerHTML = 4;
    document.getElementById("monsterCKill").innerHTML = killNumberMonsterC;
    killNumberMonsterC++;
  }
  if (killNumberMonsterC > 10 && killNumberMonsterC <= 100) {
    /* power of 10 one time */
    CurrentExp = CurrentExp + 8;
    document.getElementById("monsterCExp").innerHTML = 8;
    document.getElementById("monsterCKill").innerHTML = killNumberMonsterC;
    killNumberMonsterC++;
  }
  if (killNumberMonsterC > 100 && killNumberMonsterC <= 1000) {
    /* power of 10 two times */
    CurrentExp = CurrentExp + 16;
    document.getElementById("monsterCExp").innerHTML = 16;
    document.getElementById("monsterCKill").innerHTML = killNumberMonsterC;
    killNumberMonsterC++;
  }
  if (killNumberMonsterC > 1000 && killNumberMonsterC <= 10000) {
    /* power of 10 three times */
    CurrentExp = CurrentExp + 32;
    document.getElementById("monsterCExp").innerHTML = 32;
    document.getElementById("monsterCKill").innerHTML = killNumberMonsterC;
    killNumberMonsterC++;
  }
  if (killNumberMonsterC > 10000 && killNumberMonsterC <= 100000) {
    /* power of 10 four times */
    CurrentExp = CurrentExp + 64;
    document.getElementById("monsterCExp").innerHTML = 64;
    document.getElementById("monsterCKill").innerHTML = killNumberMonsterC;
    killNumberMonsterC++;
  }
  if (killNumberMonsterC > 100000) {
    /* power of 10 four times */
    CurrentExp = CurrentExp + 128;
    document.getElementById("monsterCExp").innerHTML = 128;
    document.getElementById("monsterCKill").innerHTML = killNumberMonsterC;
    killNumberMonsterC++;
  }
}

let killNumberMonsterD = 0;
function btnFightMonsterD() {
  if (killNumberMonsterD <= 10) {
    /* initial kill value before doubling... */
    CurrentExp = CurrentExp + 8;
    document.getElementById("monsterDExp").innerHTML = 8;
    document.getElementById("monsterDKill").innerHTML = killNumberMonsterD;
    killNumberMonsterD++;
  }
  if (killNumberMonsterD > 10 && killNumberMonsterD <= 100) {
    /* power of 10 one time */
    CurrentExp = CurrentExp + 16;
    document.getElementById("monsterDExp").innerHTML = 16;
    document.getElementById("monsterDKill").innerHTML = killNumberMonsterD;
    killNumberMonsterD++;
  }
  if (killNumberMonsterD > 100 && killNumberMonsterD <= 1000) {
    /* power of 10 two times */
    CurrentExp = CurrentExp + 32;
    document.getElementById("monsterDExp").innerHTML = 32;
    document.getElementById("monsterDKill").innerHTML = killNumberMonsterD;
    killNumberMonsterD++;
  }
  if (killNumberMonsterD > 1000 && killNumberMonsterD <= 10000) {
    /* power of 10 three times */
    CurrentExp = CurrentExp + 64;
    document.getElementById("monsterDExp").innerHTML = 64;
    document.getElementById("monsterDKill").innerHTML = killNumberMonsterD;
    killNumberMonsterD++;
  }
  if (killNumberMonsterD > 10000 && killNumberMonsterD <= 100000) {
    /* power of 10 four times */
    CurrentExp = CurrentExp + 128;
    document.getElementById("monsterDExp").innerHTML = 128;
    document.getElementById("monsterDKill").innerHTML = killNumberMonsterD;
    killNumberMonsterD++;
  }
  if (killNumberMonsterD > 100000) {
    /* power of 10 four times */
    CurrentExp = CurrentExp + 256;
    document.getElementById("monsterDExp").innerHTML = 256;
    document.getElementById("monsterDKill").innerHTML = killNumberMonsterD;
    killNumberMonsterD++;
  }
}

let killNumberMonsterE = 0;
function btnFightMonsterE() {
  if (killNumberMonsterE <= 10) {
    /* initial kill value before doubling... */
    CurrentExp = CurrentExp + 16;
    document.getElementById("monsterEExp").innerHTML = 16;
    document.getElementById("monsterEKill").innerHTML = killNumberMonsterE;
    killNumberMonsterE++;
  }
  if (killNumberMonsterE > 10 && killNumberMonsterE <= 100) {
    /* power of 10 one time */
    CurrentExp = CurrentExp + 32;
    document.getElementById("monsterEExp").innerHTML = 32;
    document.getElementById("monsterEKill").innerHTML = killNumberMonsterE;
    killNumberMonsterE++;
  }
  if (killNumberMonsterE > 100 && killNumberMonsterE <= 1000) {
    /* power of 10 two times */
    CurrentExp = CurrentExp + 64;
    document.getElementById("monsterEExp").innerHTML = 64;
    document.getElementById("monsterEKill").innerHTML = killNumberMonsterE;
    killNumberMonsterE++;
  }
  if (killNumberMonsterE > 1000 && killNumberMonsterE <= 10000) {
    /* power of 10 three times */
    CurrentExp = CurrentExp + 128;
    document.getElementById("monsterEExp").innerHTML = 128;
    document.getElementById("monsterEKill").innerHTML = killNumberMonsterE;
    killNumberMonsterE++;
  }
  if (killNumberMonsterE > 10000 && killNumberMonsterE <= 100000) {
    /* power of 10 four times */
    CurrentExp = CurrentExp + 256;
    document.getElementById("monsterEExp").innerHTML = 256;
    document.getElementById("monsterEKill").innerHTML = killNumberMonsterE;
    killNumberMonsterE++;
  }
  if (killNumberMonsterE > 100000) {
    /* power of 10 four times */
    CurrentExp = CurrentExp + 512;
    document.getElementById("monsterEExp").innerHTML = 512;
    document.getElementById("monsterEKill").innerHTML = killNumberMonsterE;
    killNumberMonsterE++;
  }
}

/* Save system */
function saveProgressFunction() {
  /* Create the "saveProgress" object and create "key: value," pair with something as a key and a variable as a value */
  let saveProgress = {
    KeyCurrentExp: CurrentExp,
    KeyCurrentLevel: CurrentLevel,
    KeyCurrentRequiredExp: RequiredExp,
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
  CurrentExp = saveProgress.KeyCurrentExp;
  CurrentLevel = saveProgress.KeyCurrentLevel;
  RequiredExp = saveProgress.KeyCurrentRequiredExp;
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
  if (CurrentLevel >= 3) {
    let B = document.getElementById("monsterContainerB");
    B.classList.remove("notUnlocked");
    B.classList.add("nowUnlocked");
    document.getElementById("currentLevel").style.color = "blue";
    setInterval(btnFightMonsterB, 1000);
  }
  if (CurrentLevel >= 5) {
    let C = document.getElementById("monsterContainerC");
    C.classList.remove("notUnlocked");
    C.classList.add("nowUnlocked");
    document.getElementById("currentLevel").style.color = "rgb(0, 110, 255)";
    setInterval(btnFightMonsterC, 1000);
  }
  if (CurrentLevel >= 7) {
    let D = document.getElementById("monsterContainerD");
    D.classList.remove("notUnlocked");
    D.classList.add("nowUnlocked");
    document.getElementById("currentLevel").style.color = "rgb(0, 223, 204)";
    setInterval(btnFightMonsterD, 1000);
  }
  if (CurrentLevel >= 10) {
    let E = document.getElementById("monsterContainerE");
    E.classList.remove("notUnlocked");
    E.classList.add("nowUnlocked");
    document.getElementById("currentLevel").style.color = "rgb(0, 255, 170)";
    setInterval(btnFightMonsterE, 1000);
  }
}

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
