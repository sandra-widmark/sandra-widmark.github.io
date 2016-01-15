

//Generate the canvas element with phaser

var game = new Phaser.Game(480, 320, Phaser.AUTO, null, {preload: preload, create: create, update: update});

//a variable for creating the mine worker

var ball;
var paddle;

 //fix so that it scales to different screen sizes

function preload() {

    game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    game.scale.pageAlignHorizontally = true;
    game.scale.pageAlignVertically = true;
    game.stage.backgroundColor = '#eee';
    game.load.image('ball', 'img/ball.png');
    game.load.image('paddle', 'img/paddle.png');
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

    //Init the paddle
    paddle = game.add.sprite(game.world.width*0.5, game.world.height-5, 'paddle');
    //fix position of the paddle to be in the midddle of the canvas
    paddle.anchor.set(0.5,1);

    //enable physics for the paddle to make it collide with the ball
    game.physics.enable(paddle, Phaser.Physics.ARCADE);

    //make the paddle immovable so that the ball doesn't push it of the screen
    paddle.body.immovable = true;
}
function update() {
    //enable collision detection between the paddle and ball
    game.physics.arcade.collide(ball, paddle);
    //fix so that the paddle's x position will adjust accordingly to the input's x position
    paddle.x = game.input.x || game.world.width*0.5;
   
}


