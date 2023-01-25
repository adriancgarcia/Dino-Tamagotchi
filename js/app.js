console.log('Dino Tamagotchi')

// class Tamagotchi {
//     constructor (name, Hunger, Sleepiness, Boredom, Age ) {
//         // this.name = 'Arlo';
//         this.Hunger = 10;
//         this.Sleep = 20;
//         this.Play = 20;
//         this.Age = 5;
//     }
// }




 
// function buttonClick() {
//     let i = 0;
//     document.querySelector('hungry').value = ++i;
// }



// let hungry = document.querySelector('.hungry')
// let sleepy = document.querySelector('.sleepy')
// let bored = document.querySelector('.bored')

// hungry.addEventListener("click", buttonClick)
// sleepy.addEventListener("click", turnOffLights)
// bored.addEventListener("click", playTime)

// function buttonClick() {
// document.querySelector('.choices')

// create name text box //
// function myFunction(event) {
//     let x = document.getElementById("newName").value;
//     document.getElementById("newId").innerHTML = x;
//   }

    


// Age counter to 35 //
let i=1;
function increment() {
    document.querySelector('scoreBar').innerHTML ='Your age is ' + i;
   if (i<35) {
        i++;
console.log('You are '+ i + ' years old.' );
} else if (n === 35) {
console.log("You have lived a long life.")
}
}
setInterval(function() {increment()}, 5000);


function startgame() {
    let f = 200;
    document.getElementById("action-start-game").innerHTML = f;
  
    const intervalID = window.setInterval(() => {
      if (f === 0) return;
  
      f -= 5;
      document.getElementById("action-start-game").innerHTML = f;
    }, 500);
  }



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

Tamagotchi.prototype.actionEat = function() {
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
var tamagotchiName = prompt("Please, enter a name of your tamagotchi:", "");
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







let n=1;
function increment() {
    document.querySelector('.age').innerHTML ='Your age is ' + n;
   if (n<35) {
        n++;
console.log('You are '+ n + ' years old.' );
} else if (n === 0) {
alert("You have starved to death. Game over.")
}
}
setInterval(function() {increment()}, 5000);


let count = 10;
function decrement() {
let loop = 
setInterval(function(){
document.querySelector('.hunger').innerHTML = "Don't let it get to 0."
    if(count > 0) { // don't make it negative
count--;
} else {
clearInterval(loop)
}
})
}




//



    // function decNumber() {
    //     if (i > 0) {
    //         --i;
    //     } else if (i = 0) {
    //         i = 10;
    //     }
    //     document.getElementById("display").innerHTML = i;
    // }


// function clickMe () {
//     document.querySelectorgetElementByTag('.button').innerHTML = "Hello!";
// }


 
// const nameMe = document.querySelector('form')

// for (let i = 0; i < clickme.length; i+= 3){
//     console.log (i);
// }
// function clickme () {
//     document.getElementsByClassName("choices")[0].click();
// }

// function clicked() {
//     alert('Keep doing it!')
// }
  

setTimeout (start, 5000);
let counter = 0;
let div = document.getElementsByClass('.tama');
setTimeout (function(){   
function ageIncrease () {
    document.getElementsByClass('.age')
let st = setInterval(function() {
    ageIncrease.innerHTML = ++counter;
    if (counter > 35){
        clearInterval(st);
    }
}, 1000)
} 5000



// onload = "ageIncrease();"
// function ageIncrease () {
//     document.getElementsByClass('age')
//    }
// function ageIncrease () {
//     document.getElementByClass('.age')
// }
//     let n=0;
//     function increment() {
//         document.getElementById('age')
//        if (n<35) {
//             n++;
//     console.log('Age '+ n );
// }
//     }
// setInterval(function() {increment()}, 3000);
    



    // function calcIntervalValue(ratePerMinute, elapsedTimeInMilliseconds) {
    //     var elapsedTimeInMinutes = elapsedTimeInMilliseconds / 60000; //60000 miliseconds in a minute
    //     return ratePerMinute * elapsedTimeInMinutes
    // }
    
    // var oneSecond = 10000 //in milliseconds
    // alert( calcIntervalValue(1, oneSecond) )


// let i = 5;
// 	function increment() {
// 		i++;
// 		document.getElementById('age').innerHTML = i;
// 	}
// 	setInterval('increment()', 15000);
// })


// function age() {
//     console.log(1)
// }

// setTimeout(age, 30)
// function stopAge() {
//     console.log(1)
// }

// setTimeout(stopAge, 50)

    
