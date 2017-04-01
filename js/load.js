var loadState = {
  preload: function() {
    Nakama.game.load.atlasJSONHash('Dino', 'Assets/assets.png', 'Assets/Dino.json');
    Nakama.game.load.atlasJSONHash('Foundation','Assets/assets.png', 'Assets/Foundation.json');
    Nakama.game.load.atlasJSONHash('Foundation2','Assets/assets2.png', 'Assets/Foundation2.json');
    Nakama.game.load.image('background', 'Assets/background.png');
    Nakama.game.load.image('button' , 'Assets/playButton.png');
    Nakama.game.load.image('gameOver' , 'Assets/gameOver.png');
    Nakama.game.load.image('gameTiles' , 'Assets/gameTiles.png');

    console.log("create");
    Nakama.player = [];
    Nakama.trap = [];
    Nakama.found = [];


  },
  create: function() {
    console.log("create2");


    Nakama.game.state.start("menu");
  }
}
