var leaderBoardState = {
  create : function() {
    Nakama.foundGroup = Nakama.game.add.physicsGroup();
    Nakama.playerGroup = Nakama.game.add.physicsGroup();
    Nakama.trapGroup = Nakama.game.add.physicsGroup();
    listPropertyNames = Object.keys(leaderPlayer);
    map = Nakama.game.add.sprite(0,0,'background');
    this.game.add.image(0,1200, "Foundation", "Foundation2.png");
    this.game.add.image(900,1200, "Foundation", "Foundation2.png");
    this.game.add.image(1800,1200, "Foundation", "Foundation2.png");
    this.game.add.text(250,100, "PEOPLE WANT TO DIE SO HARDDD", {font: '100px Arial', fill: "#000000"});
    for (var j = 0; j <10; j ++) {
      if(listPropertyNames[j] != undefined) {
        this.game.add.text(750,250+(100*j), listPropertyNames[j] , {font: '50px Arial', fill: "#000000"});
        this.game.add.text(1050,250+(100*j), leaderPlayer[listPropertyNames[j]] , {font: '50px Arial', fill: "#000000"});
      }
    }
  }
}
