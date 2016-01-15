

//Generate the canvas element with phaser

var game = new Phaser.Game(480, 320, Phaser.AUTO, null, {preload: preload, create: create, update: update});

//a variable for creating the mine worker

var ball;

 //fix so that it scales to different screen sizes

function preload() {
    game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    game.scale.pageAlignHorizontally = true;
    game.scale.pageAlignVertically = true;
    game.stage.backgroundColor = '#eee';
     game.load.image('ball', 'img/ball.png');
}
function create() {
    ball = game.add.sprite(50, 50, 'ball');
}
function update() {}


