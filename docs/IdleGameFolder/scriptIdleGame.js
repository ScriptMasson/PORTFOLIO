//(wrap)the function in parentheses and (); immediately invoke it: making it an Immediately Invoked Function Expression
(function iifeIntervalSetForDisplays() {
  setInterval(displayCurrentExperience, 125);
  setInterval(displayRequiredExperience, 125);
  setInterval(displayForExpBar, 125);
  setInterval(displayCurrentLevel, 125);
  setInterval(lookForUnlocks, 125);
})();

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
  }else if (killNumberMonsterB >= 100) {
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
