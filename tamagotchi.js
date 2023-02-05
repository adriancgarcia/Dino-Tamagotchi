// console.log("Tamagotchi!");

setInterval(() => {
  const x = Math.floor(Math.random()* 500)
  const y = Math.floor(Math.random() * -400)
  // myTamagotchi.style.transform = `translate(${x}px,${y}px)`;
},1000)

const sleep = document.getElementById("#sleep")
const feed = document.getElementById("#eat")
const play = document.getElementById("#play")
const start = document.querySelectorAll("#start")
const age = document.getElementById("#age")
const tamaName = document.getElementById("newname")


function startGame () {
  hello()
  Tamagotchi.ageIncrease()
    Tamagotchi.goToSleep()
    Tamagotchi.letsPlay()
    Tamagotchi.letsEat()
    increaseFun()
    increaseHunger()
    increaseSleep()
}

// start.addEventListener('click', startGame)

  function hello() {
    let tamaName=prompt("Give your tamagotchi a name.")
    tamaName=tamaName[0].toUpperCase() + tamaName.substring(1)
    if (tamaName != null) {
        document.querySelector('.newName').innerText = tamaName
  }

}

class Game {
  constructor(hungry, sleep, bored, age) {
    this.hungry=100
    this.sleep=100
    this.bored=100
    this.age=0
}
letsEat() {
  let interval = setInterval(() => {
      this.hungry-=10
      if (this.hungry<=0){
          clearInterval(interval)
          return gameOver()
      } else if ((this.hungry<=10)&&(this.sleep>1)&&(this.bored>1)) {
          alert("I'm starving!!!!")
      }
      document.querySelector('#hungry').innerHTML = this.hungry+'%'
  },7000);
  }
letsPlay() {
      let myInterval= setInterval(() => {
          this.bored-=10
          if (this.bored<=0) {
              clearInterval(myInterval)
              return gameOver()
          } else if ((this.bored <=10) && (this.sleep>1) && (this.hungry>1)) {
              alert("I'm sooo bored'! Let's do something fun!")
          }
          document.querySelector('#eat').innerHTML = this.bored+'%'
      },7000)
  }
goToSleep() {
      let intervalId= setInterval(() => {
           this.sleep-=10
           document.body.style.opacity=1
           if (this.sleep<=0) {
               clearInterval(intervalId)
               return gameOver()
           } else if ((this.sleep <=10) && (this.hungry>1) && (this.bored>1)) {
               alert("I'm tired!!!!")
           }
           document.querySelector('#sleep').innerHTML = this.sleep+'%'
       },7000)
   }
ageIncrease() {
      setInterval(() => {
      this.age++
      if(this.hungry<=10 || this.sleep<=10 || this.bored<=10) {
        adult.style.display='none'
      }
      document.querySelector('.edad').innerHTML = this.age
      }, 6000)
    }
  }

  const Tamagotchi = new Game ('Pet Tamagotchi')
    

  function increaseHunger() {
      if(Tamagotchi.hungry <=90) {
          Tamagotchi.hungry+=10
      }
  document.querySelector('#feed').innerHTML = Tamagotchi.hungry
  } 
  
  function increaseSleep() {
      if(Tamagotchi.sleep <=90) {
          Tamagotchi.sleep+=10
      }
  document.querySelector('#nap').innerHTML = Tamagotchi.sleep
  }

  function increaseFun() {
      if(Tamagotchi.bored <=90) {
          Tamagotchi.bored+=10
      }
  document.querySelector('#play-time').innerHTML = Tamagotchi.bored
  }

  feed.addEventListener('click', () => {
    increaseHunger()
    })
    
  sleep.addEventListener('click', () => {
    increaseSleep()
    
    })
        
  play.addEventListener('click', () => {
    increaseFun()
    })

    function gameOver() {
      feed.remove()
      sleep.remove()
      play.remove()
      age.remove()
  }
  

    setInterval(() => {
      const y =  Math.floor(Math.random()* 900)
      const z =  Math.floor(Math.random()* -300)
      // angel.style.transform = `translate(${y}px, ${z}px)`;
  },2000)


   




