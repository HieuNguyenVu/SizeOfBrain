var leaderBoardState = {
  create : function() {
    Nakama.foundGroup = Nakama.game.add.physicsGroup();
    Nakama.playerGroup = Nakama.game.add.physicsGroup();
    Nakama.trapGroup = Nakama.game.add.physicsGroup();
    map = Nakama.game.add.sprite(0,0,'background');
    this.game.add.image(0,1200, "Foundation", "Foundation2.png");
    this.game.add.image(900,1200, "Foundation", "Foundation2.png");
    this.game.add.image(1800,1200, "Foundation", "Foundation2.png");
    this.game.add.text(1700,100, "Score : " +Nakama.count, {font: '50px Arial', fill: "#FFFFFF"});
  }
}
