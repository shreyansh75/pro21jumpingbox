var canvas;
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
    ball=createSprite(random(20,750),100,40,40);
    ball.shapeColor="white";
    ball.velocityX=4;
    ball.velocityY=9;
    block1=createSprite(100,580,190,20);
    block1.shapeColor="blue";
    block2=createSprite(300,580,190,20);
    block2.shapeColor="yellow";
    block3=createSprite(500,580,190,20);
    block3.shapeColor="green";
    block4=createSprite(700,580,190,20);
    block4.shapeColor="orange";




    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    edges=createEdgeSprites();
    ball.bounceOff(edges);
   // ball.bounceOff(block1);
   // ball.bounceOff(block2);
   // ball.bounceOff(block3);
   // ball.bounceOff(block4);

    if (block1.isTouching(ball) && ball.bounceOff(block1)){

        ball.shapeColor="blue";
        music.play();
    }

    if (block2.isTouching(ball) && ball.bounceOff(block2)){

        ball.shapeColor="yellow";
        ball.velocityX=0;
        ball.velocityY=0;
        music.stop();
    }

    if (block3.isTouching(ball) && ball.bounceOff(block3)){

        ball.shapeColor="green";
    }

    if (block4.isTouching(ball) && ball.bounceOff(block4)){

        ball.shapeColor="orange ";
    }




    //add condition to check if box touching surface and make it box
    drawSprites();
}