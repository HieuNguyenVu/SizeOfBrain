
var playState = {
  create : function() {
    console.log("play1");
    Nakama.keyboard = Nakama.game.input.keyboard;
    map = Nakama.game.add.sprite(0,0,'background');
    Nakama.foundGroup = Nakama.game.add.physicsGroup();
    Nakama.playerGroup = Nakama.game.add.physicsGroup();
    Nakama.trapGroup = Nakama.game.add.physicsGroup();
    bot = Nakama.game.add.sprite(0, 1000, 'Dino');
    var count = 0;
    var scoreDisplay = this.game.add.text(1800,100, "Score : " +count, {font: '50px Arial', fill: "#00FF00"});
      //  Set the world (global) gravity
    Nakama.player.push(
      new Dinosarus(
        bot,
        {
          up    : Phaser.Keyboard.UP,
          down  : Phaser.Keyboard.DOWN,
          left  : Phaser.Keyboard.LEFT,
          right : Phaser.Keyboard.RIGHT,
          cooldown: this.cooldown
        }
      )
    );
    Nakama.found.push(
      new Foundation(0,1200,'Foundation2.png'),
      new Foundation(2500,1200,'Foundation2.png'),
      // new FoundationTrap2(900,1200,'Foundation2.png'),
      new Foundation(1300,1200,'Foundation2.png')
      // new FoundationTrap5(2107,1400,'Foundation1.png')

    //  new FoundationTrapWithPike(1800, 1200)
      // new Foundation(1800, 1200, 'Foundation2.png'),
      // new Foundation(2700, 1200, 'Foundation2.png'),
      // new Foundation(3600, 1200, 'Foundation2.png')

    );
  },
  // console.log("play2");
  update : function() {
    if(Nakama.playerGroup.getFirstAlive() == null ) {
      this.game.world.removeAll();
      this.game.state.restart();
      this.game.state.start("gameOver");
      Nakama.player.length = 0;
      console.log("kill")
    };
    if()
    Nakama.found.forEach(function(found){
      found.update();
      }
    );
    Nakama.player.forEach(function(dino){
      dino.update();
      }
    );
    Nakama.found.forEach(function(dino){
      dino.update();
      }
    );
    // Nakama.trap.forEach(function(trap){
    //   trap.update();
    //   }
    // );
    Nakama.game.physics.arcade.collide(Nakama.playerGroup,Nakama.foundGroup, dkm);
    Nakama.game.physics.arcade.collide(Nakama.playerGroup,Nakama.trapGroup, dkm);
    Nakama.game.physics.arcade.overlap(
      Nakama.playerGroup,
      Nakama.trapGroup,
      gameOver
    );
  }
}
