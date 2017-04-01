
var gameOverState = {
  create : function() {

    console.log("asdasfc");
    map = Nakama.game.add.sprite(0,0,'background');
    var playButton = this.game.add.button(1000,500,"button",this.playTheGame,this);
		    playButton.anchor.setTo(0.5,0.5);
    var winLabel = this.game.add.sprite(850,1000,"gameOver");

  },
  playTheGame: function(){
    this.game.state.start("play");
	}
}
