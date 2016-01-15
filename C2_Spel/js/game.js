  

//Generate the canvas element with phaser

  var game = new Phaser.Game(480, 320, Phaser.AUTO, null, {
      preload: preload, create: create, update: update
    });


  //fix so that it scales to different screen sizes
    function preload() {
    game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    game.scale.pageAlignHorizontally = true;
    game.scale.pageAlignVertically = true;
    game.stage.backgroundColor = '#eee';
    }


    function create() {}
    function update() {}


