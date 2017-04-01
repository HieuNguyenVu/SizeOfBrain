var menuState = {
  create : function() {
    map = Nakama.game.add.sprite(0,0,'background');
    var playButton = this.game.add.button(1000,900,"button",this.playTheGame,this);
		    playButton.anchor.setTo(0.5,0.5);
        playButton.scale = new Phaser.Point(0.5,0.5);
    var gameTiles = this.game.add.image(1050,500, "gameTiles");
        gameTiles.anchor.setTo(0.5,0.5);
        this.game.add.image(200,1200, "Foundation2");
        this.game.add.image(400,1200, "Foundation2");
        this.game.add.image(600,1200, "Foundation2");
        this.game.add.image(800,1200, "Foundation2");
        this.game.add.image(0,1200, "Foundation2");
        this.game.add.image(1000,1200, "Foundation2");
        this.game.add.image(1200,1200, "Foundation2");
        this.game.add.image(1400,1200, "Foundation2");
        this.game.add.image(1600,1200, "Foundation2");
        this.game.add.image(1800,1200, "Foundation2");
        this.game.add.image(2000,1200, "Foundation2");
        
      },
  playTheGame: function(){
		this.game.state.start("play");
	}
}
