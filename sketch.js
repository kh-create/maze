    var ball, wall1, wall2, wall3, wall4, wall5, wall6, wall7, wall8, wall9, wall10, wall11,
      wall12, wall13, wall14, wall15, wall16, wall17, wall18, wall19, wall20, wall21, wall22, wall23, wall24, wall25, wall26, wall27, wall28, wall29;
    var path1, path2, path3, path4, edges;
    var home;
var hanu,rams;
function preload(){
  hanu= loadImage("fly.png");
  rams=loadImage("ef.png");
  
}

    function setup() {
      
      createCanvas(400, 400);
      edges = createEdgeSprites();
      ball = createSprite(200, 200, 10, 10);
      ball.x = 200;
      ball.y = 200;
      ball.velocityX = 0;
      ball.velocityY = 0
      
 
       //home= createSprite(360,370,20,20);
      //home.shapeColor="blue";
      ball.shapeColor = 'blue';

      wall16 = createSprite(2, 10, 900, 20);
      wall16.shapeColor = "green";
      wall15 = createSprite(7, 10, 30, 900);
      wall15.shapeColor = "green";
      wall14 = createSprite(390, 10, 30, 900);
      wall14.shapeColor = "green";
      wall12 = createSprite(0, 390, 900, 20);
      wall12.shapeColor = "green";
      wall11 = createSprite(20, 70, 10, 100);
      wall11.shapeColor = 'red';

      wall10 = createSprite(50, 50, 20, 100);
      wall10.shapeColor = 'green';
      wall9 = createSprite(355, 200, 15, 100);
      wall9.shapeColor = 'green';
      wall8 = createSprite(250, 100, 20, 70);
      wall8.shapeColor = 'green';
      wall7 = createSprite(50, 50, 20, 100);
      wall7.shapeColor = 'green';
      wall6 = createSprite(100, 210, 20, 100);
      wall6.shapeColor = 'green';
      wall5 = createSprite(279, 300, 20, 50);
      wall5.shapeColor = 'green';
      wall4 = createSprite(260, 390, 20, 50);
      wall4.shapeColor = 'green';
      wall3 = createSprite(210, 100, 100, 10);
      wall3.shapeColor = 'green';
      wall2 = createSprite(50, 130, 100, 20);
      wall2.shapeColor = 'brown';
      wall1 = createSprite(150, 270, 40, 20);
      wall1.shapeColor = 'brown';
      wall13 = createSprite(200, 350, 100, 20);
      wall13.shapeColor = 'brown';
      wall19 = createSprite(50, 280, 100, 20);
      wall19.shapeColor = 'brown';
      wall17 = createSprite(110, 60, 100, 20);
      wall17.shapeColor = 'brown';
      wall18 = createSprite(270, 270, 100, 20);
      wall18.shapeColor = 'brown';
      wall26 = createSprite(170, 55, 20, 70);
      wall26.shapeColor = 'red';
      wall27 = createSprite(100, 345, 20, 70);
      wall27.shapeColor = 'red';
      wall28 = createSprite(230, 330, 20, 70);
      wall28.shapeColor = 'red';
      wall29 = createSprite(300, 70, 20, 100);
      wall29.shapeColor = 'red';
      wall20 = createSprite(360, 70, 20, 100);
      wall20.shapeColor = 'red';
      wall21 = createSprite(130, 100, 20, 70);
      wall21.shapeColor = 'red';
      wall22 = createSprite(110, 200, 70, 20);
      wall22.shapeColor = 'brown';
      wall23 = createSprite(350, 200, 70, 20);
      wall23.shapeColor = 'brown';
      wall24 = createSprite(290, 70, 50, 20);
      wall24.shapeColor = 'brown';
      wall25 = createSprite(360, 320, 100, 20);
      wall25.shapeColor = 'brown';
    }

    function draw() {
      background(0, 244, 200); 
      drawSprites();
      
       textSize(10);
      text("use Arrow keys to               move the square to its            home",60,40);
      textSize(10);
      text("Home",300,370);
      path1 = createSprite(140, 200, 40, 40);
      path1.shapeColor = "red";

      path2 = createSprite(260, 200, 40, 40);
      path2.shapeColor = "red";

      path3 = createSprite(200, 136, 30, 30);
      path3.shapeColor = "red";

      path4 = createSprite(200, 260, 30, 30);
      path4.shapeColor = "red";

      noFill();
      ellipse(200, 200, 100, 100);
      ball.bounceOff(edges);

      if (ball.isTouching(wall1) || ball.isTouching(wall2) ||
        ball.isTouching(wall3) ||
        ball.isTouching(wall4) ||
        ball.isTouching(wall5) ||
        ball.isTouching(wall6) ||
        ball.isTouching(wall7) ||
        ball.isTouching(wall8) ||
        ball.isTouching(wall9) ||
        ball.isTouching(wall10) ||
        ball.isTouching(wall11) ||
        ball.isTouching(wall12) ||
        ball.isTouching(wall13) ||
        ball.isTouching(wall14) ||
        ball.isTouching(wall15) ||
        ball.isTouching(wall16) ||
        ball.isTouching(wall17) ||
        ball.isTouching(wall18) ||
        ball.isTouching(wall19) ||
        ball.isTouching(wall20) ||
        ball.isTouching(wall21)) 
       {
        ball.x = 200;
        ball.y = 200;
        
      }

        if (ball.isTouching(wall22))
          {ball.bounceOff(wall22);
          }
          
          if(ball.isTouching(wall23)){
            ball.bounceOff(wall23);
          }
      
           if( ball.isTouching(wall24))  
           { ball.bounceOff(wall24);}
      
             if(ball.isTouching(wall25)){
          ball.bounceOff(wall25);
        }
      if (keyIsDown(UP_ARROW)) {
        console.log("you are moving upwards");
        ball.velocityX = 0;
        ball.velocityY = -2;
      }

      if (keyIsDown(DOWN_ARROW)) {
        console.log("you are moving downwards");
        ball.velocityX = 0;
        ball.velocityY = 2;
        console.log(ball.y);
      }

      if (keyIsDown(LEFT_ARROW)) {
        console.log("you are moving   leftdirection");
        ball.velocityX = -2;
        ball.velocityY = 0;
      }

      if (keyIsDown(RIGHT_ARROW)) {
        console.log("you are moving rightdirection");
        ball.velocityX = 2;
        ball.velocityY = 0;
      }

       if(ball.x>=360 && ball.y>=360)
       {
       textSize(50);
      stroke("red");
      text("You win!!",170,180);
      ball.x=200;
      ball.y=200;
      ball.velocityX=0;
      ball.velocityY=0; 
      text("You win!!",170,180);
       }
     
      image(hanu,180,200,30,30);
      image(rams,330,330,50,50);
      
    }