

//Generate the canvas element with phaser

var game = new Phaser.Game(480, 320, Phaser.AUTO, null, {preload: preload, create: create, update: update});

//Defining variables

var ball;
var paddle;
var bricks;
var newBrick;
var brickInfo;

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

    ball.checkWorldBounds = true;
    ball.events.onOutOfBounds.add(function(){
    alert('Game over!');
    location.reload();
    }, this);

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
}

