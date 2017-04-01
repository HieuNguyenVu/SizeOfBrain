class FoundationTrap2{
  constructor(x, y){
    this.spriteFound1 = Nakama.foundGroup.create(x, y, 'Foundation', 'Foundation1.png');
    Nakama.game.physics.arcade.enable(this.spriteFound1);
    this.spriteFound1.body.allowGravity = false;
    this.spriteFound1.body.immovable = true;

    this.spriteFoundTrap1 = Nakama.foundGroup.create(x+140, y, 'Foundation', 'Foundation1.png');
    Nakama.game.physics.arcade.enable(this.spriteFoundTrap1);
    this.spriteFoundTrap1.body.allowGravity = false;
    this.spriteFoundTrap1.body.immovable = true;

    this.spriteFound2 = Nakama.foundGroup.create(x+500, y+200, 'Foundation', 'Foundation1.png');
    Nakama.game.physics.arcade.enable(this.spriteFound2);
    this.spriteFound2.body.allowGravity = false;
    this.spriteFound2.body.immovable = true;

    this.spriteFound3 = Nakama.foundGroup.create(x+640, y, 'Foundation', 'Foundation1.png');
    Nakama.game.physics.arcade.enable(this.spriteFound3);
    this.spriteFound3.body.allowGravity = false;
    this.spriteFound3.body.immovable = true;
    this.spriteTrap1 = Nakama.trapGroup.create(x+640, y+3, 'Foundation', 'LongTrap.png');
    Nakama.game.physics.arcade.enable(this.spriteTrap1);
    this.spriteTrap1.body.allowGravity = false;
    this.spriteTrap1.body.immovable = true;


    this.spriteFound4 = Nakama.foundGroup.create(x+780, y, 'Foundation', 'Foundation1.png');
    Nakama.game.physics.arcade.enable(this.spriteFound4);
    this.spriteFound4.body.allowGravity = false;
    this.spriteFound4.body.immovable = true;

    this.spriteFoundTrap2 = Nakama.foundGroup.create(x+780, y-260, 'Foundation', 'Foundation1.png');
    Nakama.game.physics.arcade.enable(this.spriteFoundTrap2);
    this.spriteFoundTrap2.body.allowGravity = false;
    this.spriteFoundTrap2.body.immovable = true;
    this.spriteTrap2 = Nakama.trapGroup.create(x+780-9, y, 'Foundation', 'LongTrap.png');
    Nakama.game.physics.arcade.enable(this.spriteTrap2);
    this.spriteTrap2.body.allowGravity = false;
    this.spriteTrap2.body.immovable = true;


    //this.sprite.body.setSize(166.027,336.013-14,0,14);

  }
  update(){
    this.spriteTrap2.angle = -90;
    this.playerSprite = Nakama.playerGroup.getFirstAlive();

    if(this.spriteFoundTrap1.position.x-this.playerSprite.position.x<20){
      this.spriteFoundTrap1.body.velocity.y = FoundationTrap1.SPEED;
    }

    if(this.spriteFound2.position.x-this.playerSprite.position.x<10){
      this.spriteFound2.body.velocity.y = -FoundationTrap1.SPEED;
    }
    if (this.spriteFound2.position.y<1210){
      this.spriteFound2.body.velocity.y = 0;
    }

  }
  move(){
    this.spriteFound1.body.velocity.x = -Dinosarus.SPEED;
    this.spriteFoundTrap1.body.velocity.x = -Dinosarus.SPEED;
    this.spriteFound2.body.velocity.x = -Dinosarus.SPEED;
    this.spriteFound3.body.velocity.x = -Dinosarus.SPEED;
    this.spriteTrap1.body.velocity.x = -Dinosarus.SPEED;
    this.spriteFound4.body.velocity.x = -Dinosarus.SPEED;
    this.spriteFoundTrap2.body.velocity.x = -Dinosarus.SPEED;
    this.spriteTrap2.body.velocity.x = -Dinosarus.SPEED;
  }
  stop(){
    this.spriteFound1.body.velocity.x = 0;
    this.spriteFoundTrap1.body.velocity.x = 0;
    this.spriteFound2.body.velocity.x = 0;
    this.spriteFound3.body.velocity.x = 0;
    this.spriteTrap1.body.velocity.x = 0  ;
    this.spriteFound3.body.velocity.x = 0;
    this.spriteFound4.body.velocity.x = 0;
    this.spriteFoundTrap2.body.velocity.x = 0;
    this.spriteTrap2.body.velocity.x = 0;
  }
}
