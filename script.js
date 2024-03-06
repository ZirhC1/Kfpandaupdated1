//KF PANDA SEARCH

//BUTTON EVENT LISTENER
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  //INPUT
  let name = document.getElementById("char-in").value;
  console.log(name);
  name = name.toLowerCase();

  //IF STATEMENT - TEST THE INPUT
  //Po
  if (
    name == "po" ||
    name == "dragon warrior" ||
    name == "the dragon warrior"
  ) {
    document.getElementById("char-name").innerHTML = "Po";
    document.getElementById("char-quote").innerHTML =
      "Buddy, I am the Dragon Warrior!";
    document.getElementById("char-img").src = "img/po.png";
    //tigress
  } else if (name == "tigress") {
    document.getElementById("char-name").innerHTML = "Tigress";
    document.getElementById("char-quote").innerHTML =
      "The hardcore do understand... but I can't watch my friend be killed.";
    document.getElementById("char-img").src = "img/tigress.png";
    //mantis
  } else if (name == "mantis") {
    document.getElementById("char-name").innerHTML = "Mantis";
    document.getElementById("char-quote").innerHTML = "Fear the bug!";
    document.getElementById("char-img").src = "img/mantis.png";
  } else if (name == "oogway") {
    document.getElementById("char-name").innerHTML = "Oogway";
    document.getElementById("char-quote").innerHTML =
      "Your mind is like the water, my friend; when it is agitated it becomes difficult to see. But if you allow it to settle, the answer becomes clear";
    document.getElementById("char-img").src = "img/oogway.png";
  } else if (name == "shifu") {
    document.getElementById("char-name").innerHTML = "Shifu";
    document.getElementById("char-quote").innerHTML =
      "Teaching kung fu is an art that takes years to master. Do not be disappointed if you have failed.";
    document.getElementById("char-img").src = "img/shifu.png";
  } else if (name == "tai-lung") {
    document.getElementById("char-name").innerHTML = "Tai-lung";
    document.getElementById("char-quote").innerHTML =
      "You... can't defeat me. You... you're just a big... fat... panda!";
    document.getElementById("char-img").src = "img/tai-lung.png";
  } else if (name == "mr. Ping") {
    document.getElementById("char-name").innerHTML = "Mr. Ping";
    document.getElementById("char-quote").innerHTML =
      " Po was so cute when he was little. He couldn't say the word tomato. He said, 'Amamamomo'.";
    document.getElementById("char-img").src = "img/mr-ping.png";
  } else if (name == "shen") {
    document.getElementById("char-name").innerHTML = "Shen";
    document.getElementById("char-quote").innerHTML =
      "And you actually believe this is the warrior destined to defeat me?!";
    document.getElementById("char-img").src = "img/shen.png";
  }
  //question mark
  else {
    document.getElementById("char-name").innerHTML = "????";
    document.getElementById("char-quote").innerHTML = "Who???";
    document.getElementById("char-img").src = "img/question-mark.png";
  }
}

//LIGHT AND DARK THEME BUTTON
document.getElementById("btn1").addEventListener("click", themeClicked);

function themeClicked() {
  let theme = document.getElementById("theme-in").value;
  theme = theme.toLowerCase();
  console.log(theme);

  if (theme == "dark") {
    const dStyle = document.querySelector("style");
    dStyle.innerHTML =
      "html{background: url(img/body{background-color: rgba(0, 0, 0, 0.7);} h1,h2,p{color: white;}";
  }
}
