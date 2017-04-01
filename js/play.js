
var playState = {
  create : function() {
    console.log("play1");
    Nakama.keyboard = Nakama.game.input.keyboard;
    map = Nakama.game.add.sprite(0,0,'background');
    Nakama.foundGroup = Nakama.game.add.physicsGroup();
    Nakama.playerGroup = Nakama.game.add.physicsGroup();
    Nakama.invifoundGroup = Nakama.game.add.physicsGroup();
    Nakama.invifoundGroup2 = Nakama.game.add.physicsGroup();
    Nakama.trap11 = Nakama.game.add.physicsGroup();
    Nakama.trapGroup = Nakama.game.add.physicsGroup();
    bot = Nakama.game.add.sprite(0, 1000, 'Dino');
    Nakama.count = 0;
    this.scoreDisplay = this.game.add.text(1700,100, "Score : " +Nakama.count, {font: '50px Arial', fill: "#FFFFFF"});
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
    // createMap()
    Nakama.found.push(
      new Foundation(0,1200),
      new FoundationTrap5(549,1200),
      new FoundationTrap6(549+1023,1200),
      new FoundationTrap4(549+1023*7,1200),
      new FoundationTrap5(549+1023*2,1200),
      new FoundationTrap1(549+1023*13,1200),
      new FoundationTrap2(549+1023*12,1200),
      new FoundationTrap3(549+1023*3,1200),
      new FoundationTrap8(549+1023*4,1200),
      new FoundationTrap9(549+1023*5,1200),
      new FoundationTrap10(549+1023*6,1200),
      new FoundationTrap13(549+1023*8,1200),
      new FoundationTrap11(549+1023*9,1200),
      new FoundationTrap12(549+1023*10,1200),
      new FoundationTrap14(549+1023*11,1200)
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
    this.scoreDisplay.setText("Score : "+Nakama.count)
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
    // Nakama.game.physics.arcade.collide(Nakama.playerGroup,Nakama.trapGroup, dkm);
    Nakama.game.physics.arcade.collide(Nakama.playerGroup,Nakama.invifoundGroup, dkm);
    Nakama.game.physics.arcade.collide(Nakama.playerGroup,Nakama.invifoundGroup2, dkm);
    Nakama.game.physics.arcade.collide(Nakama.playerGroup,Nakama.trapGroup, gameOver);

    Nakama.game.physics.arcade.overlap(
      Nakama.playerGroup,
      Nakama.trapGroup,
      gameOver
    );
  }
}
