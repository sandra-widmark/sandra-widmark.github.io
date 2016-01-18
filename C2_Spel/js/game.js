

//Generate the canvas element with phaser

var game = new Phaser.Game(480, 320, Phaser.AUTO, null, {preload: preload, create: create, update: update});

//Defining variables

var ball;
var paddle;


//variables for bricks
var bricks;
var newBrick;
var brickInfo;

//variables for score
var scoreText;
var score = 0;

//variables for lives: 
var lives = 3;
var livesText;
var lifeLostText;

 //fix so that it scales to different screen sizes

function preload() {

    game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    game.scale.pageAlignHorizontally = true;
    game.scale.pageAlignVertically = true;
    game.stage.backgroundColor = '#eee';
    game.load.image('ball', 'img/ball.png');
    game.load.image('paddle', 'img/paddle.png');
    game.load.image('brick', 'img/brick.png');
}
function create() {
    //initialize the Arcade Physics engine
    game.physics.startSystem(Phaser.Physics.ARCADE);
    //set the balls start position (in the bottom, middle)
    ball = game.add.sprite(game.world.width*0.5, game.world.height-25, 'ball');
    ball.anchor.set(0.5);

    game.physics.enable(ball, Phaser.Physics.ARCADE);
    //This makes the ball start from the bottom and go up
    ball.body.velocity.set(150, -150);
    
    //make the ball feel the walls of the canvas
    ball.body.collideWorldBounds = true;
    //make the ball bounce
    ball.body.bounce.set(1);

    //make the ball go through the bottom of the canvas, "game over" when it does!
    game.physics.arcade.checkCollision.down = false;

    //make the ball feel the walls of the canvas
    ball.checkWorldBounds = true;

    //handler for when the ball leaves the screen and a life is lost: 
    ball.events.onOutOfBounds.add(ballLeaveScreen, this);

    //Init the paddle
    paddle = game.add.sprite(game.world.width*0.5, game.world.height-5, 'paddle');
    //fix position of the paddle to be in the midddle of the canvas
    paddle.anchor.set(0.5,1);

    //enable physics for the paddle to make it collide with the ball
    game.physics.enable(paddle, Phaser.Physics.ARCADE);

    //make the paddle immovable so that the ball doesn't push it of the screen
    paddle.body.immovable = true;

    //init bricks
    initBricks();

    //Display score text
    scoreText = game.add.text(5, 5, 'Points: 0', { font: '18px Arial', fill: '#0095DD' });

    //Defining the text about lost lives and how many lives the player have left
    livesText = game.add.text(game.world.width-5, 5, 'Lives: '+lives, { font: '18px Arial', fill: '#0095DD' });
    livesText.anchor.set(1,0);
    lifeLostText = game.add.text(game.world.width*0.5, game.world.height*0.5, 'Life lost, click to continue', { font: '18px Arial', fill: '#0095DD' });
    lifeLostText.anchor.set(0.5);
    lifeLostText.visible = false;
}


function update() {
    //enable collision detection between the paddle and ball
    game.physics.arcade.collide(ball, paddle);
    //check for collision detection between the ball and the bricks
    game.physics.arcade.collide(ball, bricks, ballHitBrick);
    //fix so that the paddle's x position will adjust accordingly to the input's x position
    paddle.x = game.input.x || game.world.width*0.5;
   
}



function initBricks() {
    brickInfo = {
        width: 50,
        height: 20,
        count: {
            row: 7,
            col: 3
        },
        offset: {
            top: 50,
            left: 60
        },
        padding: 10
    }
    //A group to contain the bricks. 
    bricks = game.add.group();

    // loop through the rows and columns to create new brick on each iteration
    for(c=0; c<brickInfo.count.col; c++) {
    for(r=0; r<brickInfo.count.row; r++) {
    // create new brick and add it to the group

        var brickX = (r*(brickInfo.width+brickInfo.padding))+brickInfo.offset.left;
        var brickY = (c*(brickInfo.height+brickInfo.padding))+brickInfo.offset.top;
        
        newBrick = game.add.sprite(brickX, brickY, 'brick');
        game.physics.enable(newBrick, Phaser.Physics.ARCADE);
        newBrick.body.immovable = true;
        newBrick.anchor.set(0.5);
        bricks.add(newBrick);
    }
  }
}

//Make the bricks dissapear when the ball hits them! the kill method removes the brick from the screen, 
//when colliding with the ball. 
function ballHitBrick(ball, brick) {
    brick.kill();
    //Update the score when the ball hits a brick
    score += 10;
    scoreText.setText('Points: '+score);
    //show an alert message when the player has destroyed all bricks and won the game: 
    if(score === brickInfo.count.row*brickInfo.count.col*10) {
        alert('You won the game, congratulations!');
        //restart the game when the alert is closed
        location.reload();
    }
}

//the function that handles the players lives and displays either the life 
//lost text or game over text depending on how many lives are left. 
function ballLeaveScreen() {

    //subtract one life from the current number and check if it's a non-zero value
    lives--;


    if(lives) {
        livesText.setText('Lives: '+lives);

        //display the life lost text
        lifeLostText.visible = true;
        //reset the ball and paddles position
        ball.reset(game.world.width*0.5, game.world.height-25);
        paddle.reset(game.world.width*0.5, game.world.height-5);
        //remove the message from the screen
        game.input.onDown.addOnce(function(){
            lifeLostText.visible = false;
            ball.body.velocity.set(150, -150);
        }, this);
    }
    else {
        alert('You lost, game over!');
        location.reload();
    }
}



