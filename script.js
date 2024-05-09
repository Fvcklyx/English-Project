// hide level (grid)
document.getElementById("slideButton").addEventListener("click", showLvl);
function showLvl() {
  document.getElementById("level").classList.toggle("showLevel");
  document.getElementById("switch").classList.toggle("fa-chevron-right");
}

// hide submission-about (flex)
document.getElementById("slideReverse").addEventListener("click", showSubAbout);
function showSubAbout() {
  document.getElementById("aboutEnd").classList.toggle("showAboutSub");
  document.getElementById("switchReverse").classList.toggle("fa-chevron-left");
}

// code for each level
let sum;
sum = 0;
// Question 1
// hide text (question)
document.getElementById("showOne").addEventListener("click", showQ1);
function showQ1() {
  let questionTextOne;
  questionTextOne = "The chef prepares the meal.";
  document.getElementById("hideQuestionOne").innerHTML = questionTextOne;
}
// validation value (answer and correct) + looping value (score)
document.getElementById("subOne").addEventListener("click", correctionOne);
function correctionOne() {
  let answerOne = document.getElementById("ansOne").value;
  let correctOne = "The meal is prepared by the chef.";
  let text;
  if (answerOne == correctOne) {
    text = "True";
    document.getElementById("accOne").style.color = "blue";
    sum += 10;
  } else {
    text = "False";
    document.getElementById("accOne").style.color = "red";
    sum += 0;
  }
  document.getElementById("accOne").innerHTML = text;
  document.getElementById("scoreValue").innerHTML = sum;
}

// Question 2
// hide text (question)
document.getElementById("showTwo").addEventListener("click", showQ2);
function showQ2() {
  let questionTextTwo;
  questionTextTwo = "The teacher teaches the students.";
  document.getElementById("hideQuestionTwo").innerHTML = questionTextTwo;
}
// validation value (answer and correct) + looping value (score)
document.getElementById("subTwo").addEventListener("click", correctionTwo);
function correctionTwo() {
  let answerTwo = document.getElementById("ansTwo").value;
  let correctTwo = "The students are taught by the teacher.";
  let text;
  if (answerTwo == correctTwo) {
    text = "True";
    document.getElementById("accTwo").style.color = "blue";
    sum += 10;
  } else {
    text = "False";
    document.getElementById("accTwo").style.color = "red";
    sum += 0;
  }
  document.getElementById("accTwo").innerHTML = text;
  document.getElementById("scoreValue").innerHTML = sum;
}

// Question 3
// hide text (question)
document.getElementById("showThree").addEventListener("click", showQ3);
function showQ3() {
  let questionTextThree;
  questionTextThree = "The company launched the new product yesterday.";
  document.getElementById("hideQuestionThree").innerHTML = questionTextThree;
}
// validation value (answer and correct) + looping value (score)
document.getElementById("subThree").addEventListener("click", correctionThree);
function correctionThree() {
  let answerThree = document.getElementById("ansThree").value;
  let correctThree = "The new product was launched by the company yesterday.";
  let text;
  if (answerThree == correctThree) {
    text = "True";
    document.getElementById("accThree").style.color = "blue";
    sum += 10;
  } else {
    text = "False";
    document.getElementById("accThree").style.color = "red";
    sum += 0;
  }
  document.getElementById("accThree").innerHTML = text;
  document.getElementById("scoreValue").innerHTML = sum;
}

// Question 4
// hide text (question)
document.getElementById("showFour").addEventListener("click", showQ4);
function showQ4() {
  let questionTextFour;
  questionTextFour = "The police caught the thief last night.";
  document.getElementById("hideQuestionFour").innerHTML = questionTextFour;
}
// validation value (answer and correct) + looping value (score)
document.getElementById("subFour").addEventListener("click", correctionFour);
function correctionFour() {
  let answerFour = document.getElementById("ansFour").value;
  let correctFour = "The thief was caught by the police last night.";
  let text;
  if (answerFour == correctFour) {
    text = "True";
    document.getElementById("accFour").style.color = "blue";
    sum += 10;
  } else {
    text = "False";
    document.getElementById("accFour").style.color = "red";
    sum += 0;
  }
  document.getElementById("accFour").innerHTML = text;
  document.getElementById("scoreValue").innerHTML = sum;
}

// Question 5
// hide text (question)
document.getElementById("showFive").addEventListener("click", showQ5);
function showQ5() {
  let questionTextFive;
  questionTextFive = "They are building a new bridge in the city.";
  document.getElementById("hideQuestionFive").innerHTML = questionTextFive;
}
// validation value (answer and correct) + looping value (score)
document.getElementById("subFive").addEventListener("click", correctionFive);
function correctionFive() {
  let answerFive = document.getElementById("ansFive").value;
  let correctFive = "A new bridge is being built in the city by them.";
  let text;
  if (answerFive == correctFive) {
    text = "True";
    document.getElementById("accFive").style.color = "blue";
    sum += 10;
  } else {
    text = "False";
    document.getElementById("accFive").style.color = "red";
    sum += 0;
  }
  document.getElementById("accFive").innerHTML = text;
  document.getElementById("scoreValue").innerHTML = sum;
}

// Question 6
// hide text (question)
document.getElementById("showSix").addEventListener("click", showQ6);
function showQ6() {
  let questionTextSix;
  questionTextSix = "The doctor will perform the surgery tomorrow.";
  document.getElementById("hideQuestionSix").innerHTML = questionTextSix;
}
// validation value (answer and correct) + looping value (score)
document.getElementById("subSix").addEventListener("click", correctionSix);
function correctionSix() {
  let answerSix = document.getElementById("ansSix").value;
  let correctSix = "The surgery will be performed by the doctor tomorrow.";
  let text;
  if (answerSix == correctSix) {
    text = "True";
    document.getElementById("accSix").style.color = "blue";
    sum += 10;
  } else {
    text = "False";
    document.getElementById("accSix").style.color = "red";
    sum += 0;
  }
  document.getElementById("accSix").innerHTML = text;
  document.getElementById("scoreValue").innerHTML = sum;
}

// Question 7
// hide text (question)
document.getElementById("showSeven").addEventListener("click", showQ7);
function showQ7() {
  let questionTextSeven;
  questionTextSeven = "The singer sings the national anthem at every game.";
  document.getElementById("hideQuestionSeven").innerHTML = questionTextSeven;
}
// validation value (answer and correct) + looping value (score)
document.getElementById("subSeven").addEventListener("click", correctionSeven);
function correctionSeven() {
  let answerSeven = document.getElementById("ansSeven").value;
  let correctSeven = "The national anthem is sung by the singer at every game.";
  let text;
  if (answerSeven == correctSeven) {
    text = "True";
    document.getElementById("accSeven").style.color = "blue";
    sum += 10;
  } else {
    text = "False";
    document.getElementById("accSeven").style.color = "red";
    sum += 0;
  }
  document.getElementById("accSeven").innerHTML = text;
  document.getElementById("scoreValue").innerHTML = sum;
}

// Question 8
// hide text (question)
document.getElementById("showEight").addEventListener("click", showQ8);
function showQ8() {
  let questionTextEight;
  questionTextEight = "The committee made the decision yesterday.";
  document.getElementById("hideQuestionEight").innerHTML = questionTextEight;
}
// validation value (answer and correct) + looping value (score)
document.getElementById("subEight").addEventListener("click", correctionEight);
function correctionEight() {
  let answerEight = document.getElementById("ansEight").value;
  let correctEight = "The decision was made by the committee yesterday.";
  let text;
  if (answerEight == correctEight) {
    text = "True";
    document.getElementById("accEight").style.color = "blue";
    sum += 10;
  } else {
    text = "False";
    document.getElementById("accEight").style.color = "red";
    sum += 0;
  }
  document.getElementById("accEight").innerHTML = text;
  document.getElementById("scoreValue").innerHTML = sum;
}

// Question 9
// hide text (question)
document.getElementById("showNine").addEventListener("click", showQ9);
function showQ9() {
  let questionTextNine;
  questionTextNine = "The company is developing a new software application.";
  document.getElementById("hideQuestionNine").innerHTML = questionTextNine;
}
// validation value (answer and correct) + looping value (score)
document.getElementById("subNine").addEventListener("click", correctionNine);
function correctionNine() {
  let answerNine = document.getElementById("ansNine").value;
  let correctNine =
    "A new software application is being developed by the company.";
  let text;
  if (answerNine == correctNine) {
    text = "True";
    document.getElementById("accNine").style.color = "blue";
    sum += 10;
  } else {
    text = "False";
    document.getElementById("accNine").style.color = "red";
    sum += 0;
  }
  document.getElementById("accNine").innerHTML = text;
  document.getElementById("scoreValue").innerHTML = sum;
}

// Question 10
// hide text (question)
document.getElementById("showTen").addEventListener("click", showQ10);
function showQ10() {
  let questionTextTen;
  questionTextTen = "The gardener is planting flowers in the garden.";
  document.getElementById("hideQuestionTen").innerHTML = questionTextTen;
}
// validation value (answer and correct) + looping value (score)
document.getElementById("subTen").addEventListener("click", correctionTen);
function correctionTen() {
  let answerTen = document.getElementById("ansTen").value;
  let correctTen = "Flowers are being planted in the garden by the gardener.";
  let text;
  if (answerTen == correctTen) {
    text = "True";
    document.getElementById("accTen").style.color = "blue";
    sum += 10;
  } else {
    text = "False";
    document.getElementById("accTen").style.color = "red";
    sum += 0;
  }
  document.getElementById("accTen").innerHTML = text;
  document.getElementById("scoreValue").innerHTML = sum;
}

// get username input
document.getElementById("identify").addEventListener("click", addIdentifier);
function addIdentifier() {
  let userName = document.getElementById("userName").value;
  document.getElementById("myName").innerHTML = userName;
  document.getElementById("winner").innerHTML = userName;
}

// get score input
document.getElementById("endScore").addEventListener("click", addScore);
function addScore() {
  // add value criteria
  if (sum >= 0 && sum < 80) {
    document.getElementById("finalScore").style.color = "white";
    document.getElementById("greater").innerHTML = "Better Luck Next Time!";
    document.getElementById("rewardPunish").innerHTML = "Your Punishment...";
    // link punish page
    document.getElementById("rewardPunish").href = "#punishPage";
  } else {
    document.getElementById("finalScore").style.color = "gold";
    document.getElementById("greater").innerHTML = "Congratulations!";
    document.getElementById("rewardPunish").innerHTML = "Your Reward...";
    // link reward page
    document.getElementById("rewardPunish").href = "Rewarding Page/index.html";
  }
  // add final score value
  document.getElementById("finalScore").innerHTML = sum;
}

// punishment One
// play audio player
document.getElementById("playSongOne").addEventListener("click", playMusicOne);
function playMusicOne() {
  document.getElementById("punishAudioOne").play();
}
// pause audio player
document
  .getElementById("pauseSongOne")
  .addEventListener("click", pauseMusicOne);
function pauseMusicOne() {
  document.getElementById("punishAudioOne").pause();
}
// stop audio player
document.getElementById("quitSongOne").addEventListener("click", stopMusicOne);
function stopMusicOne() {
  document.getElementById("punishAudioOne").pause();
  document.getElementById("punishAudioOne").currentTime = 0;
}

// punishment Two
// play audio player
document.getElementById("playSongTwo").addEventListener("click", playMusicTwo);
function playMusicTwo() {
  document.getElementById("punishAudioTwo").play();
}
// pause audio player
document
  .getElementById("pauseSongTwo")
  .addEventListener("click", pauseMusicTwo);
function pauseMusicTwo() {
  document.getElementById("punishAudioTwo").pause();
}
// stop audio player
document.getElementById("quitSongTwo").addEventListener("click", stopMusicTwo);
function stopMusicTwo() {
  document.getElementById("punishAudioTwo").pause();
  document.getElementById("punishAudioTwo").currentTime = 0;
}

// punishment Three
// play audio player
document
  .getElementById("playSongThree")
  .addEventListener("click", playMusicThree);
function playMusicThree() {
  document.getElementById("punishAudioThree").play();
}
// pause audio player
document
  .getElementById("pauseSongThree")
  .addEventListener("click", pauseMusicThree);
function pauseMusicThree() {
  document.getElementById("punishAudioThree").pause();
}
// stop audio player
document
  .getElementById("quitSongThree")
  .addEventListener("click", stopMusicThree);
function stopMusicThree() {
  document.getElementById("punishAudioThree").pause();
  document.getElementById("punishAudioThree").currentTime = 0;
}

// punishment Four
// play audio player
document
  .getElementById("playSongFour")
  .addEventListener("click", playMusicFour);
function playMusicFour() {
  document.getElementById("punishAudioFour").play();
}
// pause audio player
document
  .getElementById("pauseSongFour")
  .addEventListener("click", pauseMusicFour);
function pauseMusicFour() {
  document.getElementById("punishAudioFour").pause();
}
// stop audio player
document
  .getElementById("quitSongFour")
  .addEventListener("click", stopMusicFour);
function stopMusicFour() {
  document.getElementById("punishAudioFour").pause();
  document.getElementById("punishAudioFour").currentTime = 0;
}

/*
 * 		Active: The chef prepares the meal.
 * 		Passive: The meal is prepared by the chef.
 * 		Active: The teacher teaches the students.
 * 		Passive: The students are taught by the teacher.
 * 		Active: The company launched the new product yesterday.
 * 		Passive: The new product was launched by the company yesterday.
 * 		Active: The police caught the thief last night.
 * 		Passive: The thief was caught by the police last night.
 * 		Active: They are building a new bridge in the city.
 * 		Passive: A new bridge is being built in the city by them.
 * 		Active: The doctor will perform the surgery tomorrow.
 * 		Passive: The surgery will be performed by the doctor tomorrow.
 * 		Active: The singer sings the national anthem at every game.
 * 		Passive: The national anthem is sung by the singer at every game.
 * 		Active: The committee made the decision yesterday.
 * 		Passive: The decision was made by the committee yesterday.
 * 		Active: The company is developing a new software application.
 * 		Passive: A new software application is being developed by the company.
 * 		Active: The gardener is planting flowers in the garden.
 * 		Passive: Flowers are being planted in the garden by the gardener.
 */
