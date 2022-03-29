var music
var mute_btn

var background
var bird
var pipe
var ground

var pregame = 1
var play = 2
var gameover = 3
var pause = 4
var win = 5

var Gamestate = pregame

var score

var reset


function preload()
{
  birdplaying = loadImage("Images/Birdplay1.png")
  birdidle = loadImage("Images/BirdIdel.png")
  birdfail = loadImage("Images/BirdFail.png")
  groundImage = loadImage("Images/Ground.png")
  backgroundImage = loadImage("Images/bg.png")

  music = loadSound("Music/background_song.wav")
}

function setup() {
    createCanvas(500,700);
 
    bird = createSprite(150,350,20,20)
    bird.addImage("pregame",birdidle)
    bird.scale = 0.07
    
    ground = createSprite(250,750,20,700)
    ground.addImage("Ground", groundImage)
    ground.scale = 1.7
    // ground.x = ground.width/2
    // ground.velocityX = -(6)



  frameRate(80);

  textSize(50)
  
}

function draw() 
{
  background(backgroundImage);
  // image(backgroundImage);
  //birdplaying.debug = false;

  // if (ground.x < 0){
  //   ground.x = ground.width/2;
  // }

  drawSprites();

  if (Gamestate === pregame)
  {
  //this is pregame stuff, text on screen that says "PRESS SPACE TO PLAY", no pipes, new project 4 bomb image
  text("Press Space To Start", 10, 100)
  birdidle
  score = 0

  if (keyDown("space"))
  {
    Gamestate = play
  }

  }

  if (Gamestate === play)
  {
    //the actual game stuff, new project 3 bomb image
        bird.destroy()
        music.play();
        music.setVolume(0.0005);
        birdPlay = createSprite(150,350,20,20)
        birdPlay.addImage("play",birdplaying)
        birdPlay.scale = 0.07

  }

  if (Gamestate === gameover)
  {
    //game over screen, sweetalert? new project 2 bomb image
  }
 
  if (Gamestate === pause)
  {
    //pause screen, mute button, change music type, maybe change bird type? like shrek and other stuff

  //mute_btn = createImg('mute.');
  //mute_btn.position(450,20);
  //mute_btn.size(50,50);
  //mute_btn.mouseClicked(mute);
  }

  if(Gamestate === win)
  {

  }

}


// function mute()
// {
//   if(music.isPlaying())
//      {
//       music.stop();
//      }
//      else{
//       music.play();
//      }
// }


