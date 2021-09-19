
var gamestate = "home"
var Firstcard = "none"
var Secondcard = "None"
var score = 0





function preload(){

  umbrellaimg1 = loadImage("umbrella1.png")
  umbrellaimg2 = loadImage("umbrella2.png")
  ballimg1= loadImage("ball1.png")
  ballimg2 = loadImage("ball2.png")
  popcicleimg1 = loadImage("popcicle1.png")
  popcicleimg2 = loadImage("popcicle2.png")
  watermelonimg1 = loadImage("watermelon1.png")
  watermelonimg2 = loadImage("watermelon2.png")
  cardimg1 = loadImage("card1.png")
  cardimg2 = loadImage("card2.png")
  cardimg3 = loadImage("card3.png")
  cardimg4 = loadImage("card4.png")
  cardimg5 = loadImage("card5.png")
  cardimg6 = loadImage("card6.png")
  cardimg7 = loadImage("card7.png")
  cardimg8 = loadImage("card8.png")
  playimg = loadImage("play.png")








}

	


function setup() {
	createCanvas(500, 700);
  
  
  umbrella1 = createSprite(-100,-50,30,30);
  umbrella1.addImage(umbrellaimg1)
  umbrella1.scale = 2
  umbrella1.visible = false

  watermelon2 = createSprite(250,-53,30,30);
  watermelon2.addImage(watermelonimg2)
  watermelon2.scale = 2
  watermelon2.visible = false

  ball1 = createSprite(370,58,30,30);
  ball1.addImage(ballimg1)
  ball1.scale = 2
  ball1.visible = false

  popcicle2 = createSprite(490,162,30,30);
  popcicle2.addImage(popcicleimg2)
  popcicle2.scale = 2
  popcicle2.visible = false

  popcicle1 = createSprite(117,300,30,30);
  popcicle1.addImage(popcicleimg1)
  popcicle1.scale = 2
  popcicle1.visible = false

  ball2 = createSprite(250,195,30,30);
  ball2.addImage(ballimg2)
  ball2.scale = 2
  ball2.visible = false

  watermelon1 = createSprite(370,79,30,30);
  watermelon1.addImage(watermelonimg1)
  watermelon1.scale = 2
  watermelon1.visible = false

  umbrella2 = createSprite(275,79,30,30);
  umbrella2.addImage(umbrellaimg2)
  umbrella2.scale = 2
  umbrella2.visible = false



  card1 = createSprite(-10,-10,30,30);
  card1.addImage(cardimg1)
  card1.scale = 2
  //card1.visible = false
  card1.debug =false
  card1.setCollider("rectangle",40,50,45,50 )

  card2 = createSprite(130,-10,30,30);
  card2.addImage(cardimg2)
  card2.scale = 2
  //card2.visible = false
  card2.debug = false
  card2.setCollider("rectangle",40,50,45,50 )

  card3 = createSprite(250,-10,30,30);
  card3.addImage(cardimg3)
  card3.scale = 2
  //card3.visible = false
  card3.debug = false
  card3.setCollider("rectangle",40,50,45,50 )

  card4 = createSprite(370,-10,30,30);
  card4.addImage(cardimg2)
  card4.scale = 2
  //card4.visible = false
  card4.debug = false
  card4.setCollider("rectangle",40,50,45,50 )

  card5 = createSprite(-10,125,30,30);
  card5.addImage(cardimg2)
  card5.scale = 2
  //card5.visible = false
  card5.debug = false
  card5.setCollider("rectangle",40,50,45,50 )

  card6 = createSprite(130,125,30,30);
  card6.addImage(cardimg2)
  card6.scale = 2
  //card6.visible = false
  card6.debug = false
  card6.setCollider("rectangle",40,50,45,50 )

  card7 = createSprite(250,125,30,30);
  card7.addImage(cardimg2)
  card7.scale = 2
  //card7.visible = false
  card7.debug = false
  card7.setCollider("rectangle",40,50,45,50 )

  card8 = createSprite(370,125,30,30);
  card8.addImage(cardimg2)
  card8.scale = 2
  //card8.visible = false
  card8.debug = false
card8.setCollider("rectangle",40,50,45,50 )

play = createSprite(250,500,30,30);
  play.addImage(playimg)
  play.scale = 0.5
  
  


	
}


function draw() {
 background(0);
 textSize(25)
 text("Score:" + score ,200,650)
 
 if(mousePressedOver(play)){
   gamestate = "firstcard"
   play.visible = false
 }


 if (gamestate = "firstcard"){
  
  if(mousePressedOver(card1)){
    card1.visible = false
    umbrella1.visible = true
    Firstcard = card1
  
  }
  
  if(mousePressedOver(card2)){
    card2.visible = false
    watermelon2.visible = true
    Firstcard = card2
    
  }
  
  if(mousePressedOver(card3)){
    card3.visible = false
    ball1.visible = true
    Firstcard = card3
  
  }
  
  if(mousePressedOver(card4)){
    card4.visible = false
    popcicle2.visible = true
    Firstcard = card4
  
  }
  
  if(mousePressedOver(card5)){
    card5.visible = false
    popcicle1.visible = true
    Firstcard = card5
  
  }
  if(mousePressedOver(card6)){
    card6.visible = false
    ball2.visible = true
    Firstcard = card6
  }
  if(mousePressedOver(card7)){
    card7.visible = false
    watermelon1.visible = true
    Firstcard = card7
  
  }
  if(mousePressedOver(card8)){
    card8.visible = false
    umbrella2.visible = true
    Firstcard = card8
  }
  gamestate = "secondcard"
}

if (gamestate = "secondcard"){
  
  if(mousePressedOver(card1)){
    card1.visible = false
    umbrella1.visible = true
    Secondcard = card1
  
  }
  
  if(mousePressedOver(card2)){
    card2.visible = false
    watermelon2.visible = true
    Secondcard = card2
    
  }
  
  if(mousePressedOver(card3)){
    card3.visible = false
    ball1.visible = true
    Secondcard = card3
  
  }
  
  if(mousePressedOver(card4)){
    card4.visible = false
    popcicle2.visible = true
    Secondcard = card4
  }
  
  if(mousePressedOver(card5)){
    card5.visible = false
    popcicle1.visible = true
    Secondcard = card5
  }
  if(mousePressedOver(card6)){
    card6.visible = false
    ball2.visible = true
    Secondcard = card6
  }
  if(mousePressedOver(card7)){
    card7.visible = false
    watermelon1.visible = true
    Secondcard = card7
  }
  if(mousePressedOver(card8)){
    card8.visible = false
    umbrella2.visible = true
    Secondcard = card8
  }
}

  if(Firstcard === Secondcard){
      score += 1
  }






  
  
 drawSprites()
}



