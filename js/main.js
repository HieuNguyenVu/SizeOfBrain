var Nakama = {};
Nakama.configs = {
  GAME_WIDTH  : 2046,
  GAME_HEIGHT : 1277,
  MIN_WIDTH   : 800,
  MIN_HEIGHT  : 500,
  MAX_WIDTH   : 2046,
  MAX_HEIGHT  : 1277,
  PLAYER1_POS : {
    x: 200,
    y: 800
  },
  PLAYER2_POS : {
    x: 400,
    y: 800
  }
};

window.onload = function(){//Giống Onstart Android
  Nakama.game = new Phaser.Game(Nakama.configs.GAME_WIDTH,Nakama.configs.GAME_HEIGHT,Phaser.AUTO,'',
    {
      preload: preload,
      create: create,
      update: update,
      render: render
    }, false, false
  );
}

// preparations before game starts
var preload = function(){//Giống hàm OnAttach trong android ->Load vào trong ram
  Nakama.game.scale.minWidth = Nakama.configs.MIN_WIDTH;
  Nakama.game.scale.minHeight = Nakama.configs.MIN_HEIGHT;
  Nakama.game.scale.maxWidth = Nakama.configs.MAX_WIDTH;
  Nakama.game.scale.maxHeight = Nakama.configs.MAX_HEIGHT;
  Nakama.game.scale.pageAlignHorizontally = true;
  Nakama.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;

  Nakama.game.time.advancedTiming = true;

  Nakama.game.load.atlasJSONHash('Dino', 'Assets/assets.png', 'Assets/Dino.json');
  Nakama.game.load.atlasJSONHash('Foundation','Assets/assets.png', 'Assets/Foundation.json');
  Nakama.game.load.image('background', 'Assets/background.png');
}

// initialize the game
var create = function(){//Giống Oncreate
  Nakama.game.physics.startSystem(Phaser.Physics.ARCADE);

  Nakama.keyboard = Nakama.game.input.keyboard;


  map = Nakama.game.add.sprite(0,0,'background');
  Nakama.foundGroup = Nakama.game.add.physicsGroup();
  Nakama.playerGroup = Nakama.game.add.physicsGroup();
  Nakama.trapGroup = Nakama.game.add.physicsGroup();
  bot = Nakama.game.add.sprite(0, 1000, 'Dino');
    //  Set the world (global) gravity
  Nakama.game.physics.arcade.gravity.y = 3000;

  Nakama.player = [];
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

  Nakama.found = [];
  Nakama.found.push(
    new Foundation(0,1200,'Foundation2.png'),
    new Foundation(950, 1200, 'Foundation1.png')
  );

  Nakama.trap = [];
  Nakama.trap.push(
  new FoundationTrap1(200, 950, 'Foundation1.png'),
  new FoundationTrap2(400, 1200,'FoundationTrap2.png'),
  new FoundationTrap3(600, 950, 'FoundationTrap3.png'),
  new FoundationTrap4(800, 950, 'FoundationTrap4.png'),
  new FoundationTrap5(1100, 1300, 1300, 1200, 'Foundation1.png')
  )
}
function dkm(){
  //this.cooldown = true;
}
// update game state each frame
var update = function(){//Vòng lặp game
  Nakama.found.forEach(function(found){
    found.update();
  }

);
  Nakama.player.forEach(function(dino){
    dino.update();
    }
  );

  Nakama.trap.forEach(function(trap){
    trap.update();
    }
  );

  Nakama.game.physics.arcade.collide(Nakama.playerGroup,Nakama.foundGroup, dkm);
  Nakama.game.physics.arcade.collide(Nakama.playerGroup,Nakama.trapGroup, dkm);

  Nakama.game.physics.arcade.overlap(
    Nakama.playerGroup,
    Nakama.trapGroup,
    gameOver
  );
}

var gameOver = function(){
  console.log("Em nó đã dính bẫy :'(")
}
// before camera render (mostly for debug)
var render = function(){
}
