class FoundationTrap6{
  constructor(x,y){
  this.spriteFound = Nakama.foundGroup.create(x,y,'Foundation','Foundation1.png');
  Nakama.game.physics.arcade.enable(this.spriteFound);
  this.spriteFound.body.allowGravity = false;
  this.spriteFound.body.immovable = true;
  this.spritePike=Nakama.trapGroup.create(x,1120,'Foundation','PikeBlack.png');
  Nakama.game.physics.arcade.enable(this.spritePike);
  this.spritePike.body.allowGravity = false;
  this.spritePike.body.immovable = true;
  this.spritePike.alpha=0;
  }
  update(){
    var hitTrap=  Nakama.game.physics.arcade.overlap(Nakama.playerGroup,Nakama.trapGroup);
    if(hitTrap){
      this.spritePike.alpha=3;
    }
  }
  move(){
    this.spriteFound.body.velocity.x = -Dinosarus.SPEED;
    this.spritePike.body.velocity.x = -Dinosarus.SPEED;

  }
  stop(){
    this.spriteFound.body.velocity.x = 0;
    this.spritePike.body.velocity.x = 0;
  }
}
