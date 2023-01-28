console.log("Tamagotchi!");

// Set the date we're counting down to
const countDownDate = new Date("Jan 5, 2024 15:37:25").getTime();

// Update the count down every 1 second
let x = setInterval(function() {

  // Get today's date and time
let now = new Date().getTime();

  // Find the distance between now and the count down date
   distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
//   const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (100 * 60)) / 1000);

  // Display the result in the element with id=""
  document.getElementById("sleep-tama").innerHTML = ' 1' + seconds;
  document.getElementById("hunger-tama").innerHTML = ' 1' + seconds;
  document.getElementById("play-tama").innerHTML = ' 1' + seconds;

  // If the count down is finished, write some text
  if (distance <= 0) {
    clearInterval(x);
    document.getElementById("sleep-tama").innerHTML = "GAME OVER";
  }
}, 500);

const sleepBtn = document.querySelector("#action-sleep");
const feedBtn = document.querySelector("#action-feed");
const playBtn = document.querySelector("#action-play");
const startBtn = document.querySelector("#action-start-game");

  //Constants for main bar
const sleepTama = document.querySelector("#sleep-tama");
const hungerTama = document.querySelector("#hunger-tama");
const playTama = document.querySelector("#play-tama");
const scoreBar = document.querySelector("#age-tama");
//

//Game settings
const maxSleep = 300;
const maxHunger = 300;
const maxPlay = 300;
//Game speed
let day = 20;

//New object
function Tamagotchi() {
  this.Sleep = maxSleep;
  this.Hunger = maxHunger;
  this.Play = maxPlay;
}

//Abilities
Tamagotchi.prototype.actionSleep = function() {
    this.sleep+=40 / (day * 2)
};

Tamagotchi.prototype.actionFeed = function() {
	this.hunger+=120 / (day * 2)
};

Tamagotchi.prototype.actionPlay = function() {
	this.play+=80 / (day * 2)
};

Tamagotchi.prototype.tick = function() {
    this.sleep--;
    this.hunger-=3;
    this.play-=2;
};

let tmgch = new Tamagotchi();
let sleepTamaCount;
let hungerTamaCount;
let playTamaCount;
let age = 0;

//Controllers
sleepBtn.addEventListener("click", function() {
	tmgch.actionSleep();
});

feedBtn.addEventListener("click", function() {
	tmgch.actionEat();
});

playBtn.addEventListener("click", function() {
	tmgch.actionPlay();
});

startBtn.addEventListener("click", function() {
	startGame();
});

//Togglers for buttons
document.querySelector(".buttons").classList.toggle("hide");
document.querySelector(".tama").classList.toggle("hide");

function startGame() {
	document.querySelector(".buttons").classList.toggle("hide");
	document.querySelector(".tama").classList.toggle("hide");
}


//Tamagotchi's name

// var name = prompt("Enter your name", "Enter name");
// if (name != null) {
//   alert("Hello! "+ name)
// }

// const btn= document.getElementById("btn");

// btn.addEventListener('click', function(){
//   var name = document.getElementById("myName").value;
//   alert("Name: "+ name);
// });
    
// function myFunction() {
//     let text;
//     let person = prompt("Please enter your name:", "Harry Potter");
//     if (person == null || person == "") {
//       text = "User cancelled the prompt.";
//     } else {
//       text = "Hello " + person + "! How are you today?";
//     }
//     document.getElementById("demo").innerHTML = text;
//   }

var tamagotchiName = prompt("Please, enter a name for your tamagotchi:", "");
document.querySelector("#name").innerHTML = tamagotchiName;
if (tamagotchiName == null || tamagotchiName.replace(/\s/g, '') == "") {
    tamagotchiName = "Tamagotchi";
    document.querySelector("#name").innerHTML = tamagotchiName;
}

//Start game
	core();
	let coreUpdate = setInterval(core, 100 * day);

	//Main function of tamagotchi
	function core() {
		// console.log(tmgch);
		sleepTamaCount = (tmgch.sleep / maxSleep * 100).toFixed(2);
		hungerTamaCount = (tmgch.hunger / maxHunger * 100).toFixed(2);
		playTamaCount = (tmgch.play / maxPlay * 100).toFixed(2);
    }

//Age increase
age++;
scoreBar.innerHTML = '' + age;

//Death ability
if ((playTamaCount <= 0) || (sleepTamaCount <= 0) || (hungerTamaCount <= 0)) {
    playTamaCount = 0;
    sleepTamaCount = 0;
    hungerTamaCount = 0;
    clearInterval(coreUpdate);
    alert('Your age is ' + age);
}

//Max health percentage (real)
//Little help for player
if (tmgch.sleep >= (maxSleep + (maxSleep / 100 * 20))) {
    tmgch.sleep = maxSleep + (maxSleep / 100 * 20);
}

if (tmgch.hunger >= (maxHunger + (maxHunger / 100 * 20))) {
    tmgch.hunger = maxHunger + (maxHunger / 100 * 20);
}

if (tmgch.play >= (maxPlay + (maxPlay / 100 * 20))) {
    tmgch.play = maxPlay + (maxPlay / 100 * 20);
}

//Max health percentage (for player)
if ((tmgch.sleep / maxSleep * 100) > 100) {
    sleepTamaCount = 100;
}
if ((tmgch.hunger / maxHunger * 100) > 100) {
    hungerTamaCount = 100;
}
if ((tmgch.play / maxPlay * 100) > 100) {
    playTamaCount = 100;
}

//Show Tama on screen
sleepTama.innerHTML = sleepTamaCount;
hungerTama.innerHTML = hungerTamaCount;
playTama.innerHTML = playTamaCount;

//Remove Tama every tick
tmgch.tick();