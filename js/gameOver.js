
var gameOverState = {
  create : function() {

    console.log("asdasfc");
    map = Nakama.game.add.sprite(0,0,'background');
    var playButtonCheckPoint = this.game.add.button(900,800,"button",this.playTheGameAtCheckPoint,this);
		    playButtonCheckPoint.anchor.setTo(0.5,0.5);
        playButtonCheckPoint.scale = new Phaser.Point(0.3,0.3)
    var playButtonNewGame = this.game.add.button(1100,800,"button",this.playTheGameAtNew,this);
    	  playButtonNewGame.anchor.setTo(0.5,0.5);
        playButtonNewGame.scale = new Phaser.Point(0.3,0.3)
    var winLabel = this.game.add.sprite(1023,500,"gameOver");
        winLabel.anchor.setTo(0.5,0.5);

  },
  playTheGameAtNew: function(){
    again = false;
    this.game.state.start("play",true,false,again);
	},
  playTheGameAtCheckPoint: function() {
    again = true;
    this.game.state.start("play",true,false,again);
  }
}
