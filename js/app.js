console.log('Dino Tamagotchi')

class Tamagotchi {
    constructor (name, Hunger, Sleepiness, Boredom, Age ) {
        // this.name = 'Arlo';
        this.Hunger = 10;
        this.Sleepiness = 20;
        this.Boredom = 20;
        this.Age = 5;
    }


}

// function feedDino () {
// // document.body.style.backgroundColor = 'red';
// }
 
// function buttonClick() {
//     let i = 0;
//     document.querySelector('hungry').value = ++i;
// }



// function turnOffLights() {
//     let i = 0;
//     document.querySelector('sleepy').value = ++i;

//     // document.body.style.backgroundColor = 'grey';
// }

// function playTime() {
//     let i = 0;

//     document.querySelector('bored').value = ++i;
//     // document.body.style.backgroundColor = 'purple';
// }



// let hungry = document.querySelector('.hungry')
// let sleepy = document.querySelector('.sleepy')
// let bored = document.querySelector('.bored')

// hungry.addEventListener("click", buttonClick)
// sleepy.addEventListener("click", turnOffLights)
// bored.addEventListener("click", playTime)

// function buttonClick() {
// document.querySelector('.choices')

// let $button = document.querySelector('.increment-btn');
// let $counter = document.querySelector('.hungry');


// $button.addEventListener('click', function(){
//   $counter.value = parseInt($counter.value) + 1; // `parseInt` converts the `value` from a string to a number
// }, false);
// }


// point counters for buttons //
    let i = 0;
    function incHunger() {
        if (i < 10) {
            i++;
        } else if (i = 10) {
            i = 0;
        }
        document.getElementById("hunger-display").innerHTML = i;
    }
    function incSleepy() {
        if (i < 20) {
            i++;
        } else if (i = 20) {
            i = 0;
        }
        document.getElementById("sleepy-display").innerHTML = i;
    }
    function incBored() {
        if (i < 20) {
            i++;
        } else if (i = 20) {
            i = 0;
        }
        document.getElementById("bored-display").innerHTML = i;
    }



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
  
function ageIncrease () {
    document.getElementsByClass('age')
   }
// setTimeout (start, 5000);
// let counter = 0;
// let div = document.getElementsById('number');
// setTimeout (function(){   
// function ageIncrease () {
//     document.getElementsByClass('.age')
// let st = setInterval(function() {
//     ageIncrease.innerHTML = ++counter;
//     if (counter > 35){
//         clearInterval(st);
//     }
// }, 1000)
// } 5000


// onload = "ageIncrease();"
// function increase () {
//     if (i<35) {
//         i++;
//         ageIncrease.innerText = i;
//     }
// }

//     let i=0;
//     function increment() {
//        if (i<35) {
//             i++;
//     console.log('Age '+ i );
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

    
