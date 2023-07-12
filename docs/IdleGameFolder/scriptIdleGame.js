


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
}
function displayCurrentLevel() {
  document.getElementById("currentLevel").innerHTML = CurrentLevel;
}
function lookForUnlocks() {
  if (CurrentLevel >= 3) {
    let B = document.getElementById("monsterContainerB");
    B.classList.remove("notUnlocked");
    B.classList.add("nowUnlocked");
    document.getElementById("currentLevel").style.color = "blue";
  }
  if (CurrentLevel >= 5) {
    let C = document.getElementById("monsterContainerC");
    C.classList.remove("notUnlocked");
    C.classList.add("nowUnlocked");
    document.getElementById("currentLevel").style.color = "rgb(0, 110, 255)";
  }
  if (CurrentLevel >= 7) {
    let D = document.getElementById("monsterContainerD");
    D.classList.remove("notUnlocked");
    D.classList.add("nowUnlocked");
    document.getElementById("currentLevel").style.color = "rgb(0, 223, 204)";
  }
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

}

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
function btnFightMonsterA() {
  if (killNumberMonsterA === 0) {
    setInterval(btnFightMonsterA, 1000);
    killNumberMonsterA++;
  } else if (killNumberMonsterA >= 100) {
    CurrentExp = CurrentExp + 2;
    document.getElementById("monsterAExp").innerHTML = 2;
    document.getElementById("monsterAKill").innerHTML = killNumberMonsterA;
    killNumberMonsterA++;
  } else if (killNumberMonsterA >= 1000) {
    CurrentExp = CurrentExp + 4;
    document.getElementById("monsterAExp").innerHTML = 4;
    document.getElementById("monsterAKill").innerHTML = killNumberMonsterA;
    killNumberMonsterA++;
  } else {
    ++CurrentExp;
    document.getElementById("monsterAExp").innerHTML = 1;
    document.getElementById("monsterAKill").innerHTML = killNumberMonsterA;
    killNumberMonsterA++;
  }
}

let killNumberMonsterB = 0;
function btnFightMonsterB() {
  if (killNumberMonsterB === 0) {
    setInterval(btnFightMonsterB, 1000);
    killNumberMonsterB++;
  } else if (killNumberMonsterB >= 100) {
    document.getElementById("monsterBExp").innerHTML = 4;
    document.getElementById("monsterBKill").innerHTML = killNumberMonsterB;
    killNumberMonsterB++;
    return (CurrentExp = CurrentExp + 4);
  } else if (killNumberMonsterB >= 1000) {
    document.getElementById("monsterBExp").innerHTML = 8;
    document.getElementById("monsterBKill").innerHTML = killNumberMonsterB;
    killNumberMonsterB++;
    return (CurrentExp = CurrentExp + 8);
  } else {
    document.getElementById("monsterBExp").innerHTML = 2;
    document.getElementById("monsterBKill").innerHTML = killNumberMonsterB;
    killNumberMonsterB++;
    return (CurrentExp = CurrentExp + 2);
  }
}

let killNumberMonsterC = 0;
function btnFightMonsterC() {
  if (killNumberMonsterC === 0) {
    setInterval(btnFightMonsterC, 1000);
    killNumberMonsterC++;
  } else if (killNumberMonsterC >= 100) {
    document.getElementById("monsterCExp").innerHTML = 8;
    document.getElementById("monsterCKill").innerHTML = killNumberMonsterC;
    killNumberMonsterC++;
    return (CurrentExp = CurrentExp + 8);
  } else if (killNumberMonsterC >= 1000) {
    document.getElementById("monsterCExp").innerHTML = 16;
    document.getElementById("monsterCKill").innerHTML = killNumberMonsterC;
    killNumberMonsterC++;
    return (CurrentExp = CurrentExp + 16);
  } else {
    document.getElementById("monsterCExp").innerHTML = 4;
    document.getElementById("monsterCKill").innerHTML = killNumberMonsterC;
    killNumberMonsterC++;
    return (CurrentExp = CurrentExp + 4);
  }
}

let killNumberMonsterD = 0;
function btnFightMonsterD() {
  if (killNumberMonsterD === 0) {
    setInterval(btnFightMonsterD, 1000);
    killNumberMonsterD++;
  } else if (killNumberMonsterD >= 100) {
    document.getElementById("monsterDExp").innerHTML = 16;
    document.getElementById("monsterDKill").innerHTML = killNumberMonsterD;
    killNumberMonsterD++;
    return (CurrentExp = CurrentExp + 16);
  } else if (killNumberMonsterD >= 1000) {
    document.getElementById("monsterDExp").innerHTML = 32;
    document.getElementById("monsterDKill").innerHTML = killNumberMonsterD;
    killNumberMonsterD++;
    return (CurrentExp = CurrentExp + 32);
  } else {
    document.getElementById("monsterDExp").innerHTML = 8;
    document.getElementById("monsterDKill").innerHTML = killNumberMonsterD;
    killNumberMonsterD++;
    return (CurrentExp = CurrentExp + 8);
  }
}

let killNumberMonsterE = 0;
function btnFightMonsterE() {
  if (killNumberMonsterE === 0) {
    setInterval(btnFightMonsterE, 1000);
    killNumberMonsterE++;
  } else if (killNumberMonsterE >= 100) {
    document.getElementById("monsterEExp").innerHTML = 32;
    document.getElementById("monsterEKill").innerHTML = killNumberMonsterE;
    killNumberMonsterE++;
    return (CurrentExp = CurrentExp + 32);
  } else if (killNumberMonsterE >= 1000) {
    document.getElementById("monsterEExp").innerHTML = 64;
    document.getElementById("monsterEKill").innerHTML = killNumberMonsterE;
    killNumberMonsterE++;
    return (CurrentExp = CurrentExp + 64);
  } else {
    document.getElementById("monsterEExp").innerHTML = 16;
    document.getElementById("monsterEKill").innerHTML = killNumberMonsterE;
    killNumberMonsterE++;
    return (CurrentExp = CurrentExp + 16);
  }
}

let killNumberMonsterF = 0;
function btnFightMonsterF() {
  if (killNumberMonsterF === 0) {
    setInterval(btnFightMonsterF, 1000);
    killNumberMonsterF++;
  } else if (killNumberMonsterF >= 100) {
    document.getElementById("monsterFExp").innerHTML = 64;
    document.getElementById("monsterFKill").innerHTML = killNumberMonsterF;
    killNumberMonsterF++;
    return (CurrentExp = CurrentExp + 64);
  } else if (killNumberMonsterF >= 1000) {
    document.getElementById("monsterFExp").innerHTML = 128;
    document.getElementById("monsterFKill").innerHTML = killNumberMonsterF;
    killNumberMonsterF++;
    return (CurrentExp = CurrentExp + 128);
  } else {
    document.getElementById("monsterFExp").innerHTML = 32;
    document.getElementById("monsterFKill").innerHTML = killNumberMonsterF;
    killNumberMonsterF++;
    return (CurrentExp = CurrentExp + 32);
  }
}

let killNumberMonsterG = 0;
function btnFightMonsterG() {
  if (killNumberMonsterG === 0) {
    setInterval(btnFightMonsterG, 1000);
    killNumberMonsterG++;
  } else if (killNumberMonsterG >= 100) {
    document.getElementById("monsterGExp").innerHTML = 64;
    document.getElementById("monsterGKill").innerHTML = killNumberMonsterG;
    killNumberMonsterG++;
    return (CurrentExp = CurrentExp + 128);
  } else if (killNumberMonsterG >= 1000) {
    document.getElementById("monsterGExp").innerHTML = 128;
    document.getElementById("monsterGKill").innerHTML = killNumberMonsterG;
    killNumberMonsterG++;
    return (CurrentExp = CurrentExp + 256);
  } else {
    document.getElementById("monsterGExp").innerHTML = 32;
    document.getElementById("monsterGKill").innerHTML = killNumberMonsterG;
    killNumberMonsterG++;
    return (CurrentExp = CurrentExp + 64);
  }
}

/* Save system */
let save;

function saveProgressFunction() {
  let saveProgress = {
    currentexp: CurrentExp,
    currentlevel: CurrentLevel,
  };
  let saveSerialized = JSON.stringify(saveProgress);
  localStorage.setItem("savedProgress", saveSerialized);
  let saveDeserialized = JSON.parse(localStorage.getItem("savedProgress"));
  return saveProgress = saveDeserialized;

}

function loadProgressFunction() {
  CurrentExp = saveProgress.currentexp;
  CurrentLevel = saveProgress.currentlevel;
}

/* IIFE */
//(wrap)the function in parentheses and (); immediately invoke it: making it an Immediately Invoked Function Expression
(function iifeIntervalSetForDisplays() {
  setInterval(displayCurrentExperience, 125);
  setInterval(displayRequiredExperience, 125);
  setInterval(displayForExpBar, 125);
  setInterval(displayCurrentLevel, 125);
  setInterval(lookForUnlocks, 125);
})();