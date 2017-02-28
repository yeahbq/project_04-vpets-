console.log('hello')

let teddy = document.querySelector('.monzaemon-walk');
let monster = document.querySelector('#monster');

// teddy.addEventListener('click', function(evt) {
//   console.log('clicked')
//   this.classList.toggle('monzaemon-walk')
//   this.classList.toggle('monzaemon-happy');
// })



function setup() {
  createCanvas(40, 40);
}

function draw() {
  if (mouseIsPressed) {
    fill(0);
  } else {
    fill(255);
  }
  ellipse(mouseX, mouseY, 80, 80);
}

class Monster {
  constructor(name, nickname) {
    this.name = '';
    this.nickname = '';
    this.birthday = '';
    this.stats = {};
  }
}

let defaultMonster = (element) => {
  element.style.height = "16px";
  element.style.width = "16px";
  element.style.imageRendering = "pixelated";
  element.style.zoom = "5";
}

//element refers to div name to target
//aniName refers to @keyFrame name to match css
let flip = () => {
  setInterval(function loopWalk () {
    monster.classList.toggle('flipped')
    // teddy.classList.toggle('flipped')
  }, 3000)
}

let sayNo = () => {
    let counter = 0;
    setInterval(function no() {
    monster.classList.toggle('flipped')
    counter += 1;
    console.log(counter)
    if (counter > 3) {
      return console.log('times up')
    }
  }, 500)
    myStopFunction();
}

let eventTimer = () => {
  setInterval(function foodTimer() {
    console.log('time to eat!')
    $.put('/action?action=feedsubtract', {times: 1}, function(result){
     console.log(result);
  })
  }, 10000)
  setInterval(function pooTimer() {
    console.log('💩')
  }, 50000)
}

let babyWalk = (element) => {
  flip();
  defaultMonster(element);
  element.style.background = "url(../digimon-sprites.png) 0px 0px";
  element.style.animation = `babyWalk 3s steps(3) infinite`
}


let babySleep = (element) => {
  myStopFunction('flip');
  element.style.background = "url(../digimon-sprites.png) 0px -60px";
  element.style.animation = `babySleep 3s steps(2) infinite`
}

//bugged after I took the function scope out
let babyNo = (element) => {
  myStopFunction();
  element.style.background = "url(../digimon-sprites.png) 0px -100px";
  element.style.animation = `babyNo`
  // sayNo();
  // babyWalk(monster);
}


function myStopFunction() {
  clearInterval(flip);
  clearInterval(sayNo);
}
//calling baby walk to start game
babyWalk(monster);
eventTimer();

