var Nakama = {};
Nakama.configs = {
  GAME_WIDTH  : 2046,
  GAME_HEIGHT : 1277,
  MIN_WIDTH   : 800,
  MIN_HEIGHT  : 500,
  MAX_WIDTH   : 2046,
  MAX_HEIGHT  : 1277,
};
 Nakama.game = new Phaser.Game(Nakama.configs.GAME_WIDTH,Nakama.configs.GAME_HEIGHT,Phaser.AUTO,'');

Nakama.game.state.add('boot', bootState);
Nakama.game.state.add('load', loadState);
Nakama.game.state.add('menu', menuState);
Nakama.game.state.add('play', playState);
Nakama.game.state.add('gameOver', gameOverState);

Nakama.game.state.start('boot');
var gameOver = function(){
  console.log("Em nó đã dính bẫy :'(")
}
function  dkm(){
  //this.cooldown = true;
}
