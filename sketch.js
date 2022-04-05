const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var player, playerBase, playerArcher;
var baseimage;

function preload() {
  backgroundImg = loadImage("./assets/background.png");
  baseimage = loadImage("./assets/base.png");
  playerimage = loadImage("./assets/player.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;

  angleMode(DEGREES);

  //crear el cuerpo base del jugador

 var options = {
 isStatic: true
 };

  //crear el cuerpo del jugador

  playerBase = Bodies.rectangle(200, 350, 180, 150, options);
  World.add(world, playerBase);

  player = Bodies.rectangle(250, playerBase.position.y - 160, 50, 180, options);
  World.add(world, player);
}

function draw() {
  background(backgroundImg);

  //mostrar la imagen del jugador utilizando la función image()

 Engine.update(engine);

  //mostrar la imagen de la base del jugador utilizando la función image()

  image(baseimage,playerBase.position.x, playerBase.y, 180, 150)
  image(baseimage,player.position.x, player.y, 180, 150)

  Engine.update(engine);

  // Título
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("TIRO CON ARCO ÉPICO", width / 2, 100);
}
