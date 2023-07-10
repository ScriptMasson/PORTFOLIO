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
  document.getElementById("levelUpCurrentExperience").innerHTML =
    ": " + CurrentExp;
}
displayCurrentExperience();

let RequiredExp = 2;
function displayRequiredExperience() {
  document.getElementById("levelUpRequiredExperience").innerHTML =
    ": " + RequiredExp;
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

let buttonMonsterAInHTMLdoc = document.getElementById("btnFightMonsterA");
buttonMonsterAInHTMLdoc.disabled = false;
let killNumberMonsterA = 0;
function btnFightMonsterA() {
  if (killNumberMonsterA === 0) {
    setInterval(btnFightMonsterA, 1000);
    killNumberMonsterA++;
  } else ++CurrentExp;
  document.getElementById("btnFightMonsterA").disabled = true;
  killNumberMonsterA++;
}
