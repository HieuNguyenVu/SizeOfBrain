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

var gameOver = function(){
  Nakama.playerGroup.getFirstAlive().kill();
}
var createMap = function(arr, soluong){
  var kieu = 0;
  arr.push(new Foundation(0,1200));
  var x = 549;
  for(let i=0; i<soluong ;i++){
    kieu = Math.floor(Math.random() * 18) + 1;
    switch (kieu) {
      case 1:
        arr.push(new FoundationTrap1(x,1200));
        x += 1023;
        break;
      case 2:
        arr.push(new FoundationTrap2(x,1200));
        x += 1023;
        break;
      case 3:
        arr.push(new FoundationTrap3(x,1200));
        x += 1023;
        break;
      case 4:
        arr.push(new FoundationTrap4(x,1200));
        x += 1023;
        break;
      case 5:
        arr.push(new FoundationTrap5(x,1200));
        x += 1023;
        break;
      case 6:
        arr.push(new FoundationTrap6(x,1200));
        x += 1023;
        break;
      case 7:
        arr.push(new FoundationTrap7(x,1200));
        x += 1023;
        break;
      case 8:
        arr.push(new FoundationTrap8(x,1200));
        x += 1023;
        break;
      case 9:
        arr.push(new FoundationTrap9(x,1200));
        x += 1023;
        break;
      case 10:
        arr.push(new FoundationTrap10(x,1200));
        x += 1023;
        break;
      case 11:
        arr.push(new FoundationTrap11(x,1200));
        x += 1023;
        break;
      case 12:
        arr.push(new FoundationTrap12(x,1200));
        x += 1023;
        break;
      case 13:
        arr.push(new FoundationTrap13(x,1200));
        x += 1023;
        break;
      case 14:
        arr.push(new FoundationTrap14(x,1200));
        x += 1023;
        break;
      case 15:
        arr.push(new FoundationTrap15(x,1200));
        x += 1023;
        break;
      case 16:
        arr.push(new FoundationTrap16(x,1200));
        x += 1023;
        break;
      case 17:
        arr.push(new FoundationTrap17(x,1200));
        x += 1023;
        break;
      case 18:
        arr.push(new FoundationTrap18(x,1200));
        x += 1023;
        break;
      default:

    }
  }
}
