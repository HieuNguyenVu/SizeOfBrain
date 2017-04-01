class CheckPoint{
  constructor(x,y){
    this.spriteFound1 = Nakama.foundGroup.create(x, 1050, 'Foundation', 'Foundation1.png');
    Nakama.game.physics.arcade.enable(this.spriteFound1);
    this.spriteFound1.body.allowGravity = false;
    this.spriteFound1.body.immovable = true;
    this.spriteChick = Nakama.disfound.create(x, 850, 'Foundation2', 'Checkpoint.png');
    Nakama.game.physics.arcade.enable(this.spriteChick);
    this.spriteChick.body.allowGravity = false;
    this.spriteChick.body.immovable = true;
    this.spriteChick.scale=new Phaser.Point(0.5,0.5);
  }
  update(){
  var hitdis=Nakama.game.physics.arcade.collide(Nakama.playerGroup,Nakama.disfound);
  if(hitdis){
    this.spriteChick.body.setSize(-1,12,0,0);
    this.spriteChick.alpha=0;
  }
  }
  move(){
    this.spriteFound1.body.velocity.x = -Dinosarus.SPEED;
    this.spriteChick.body.velocity.x = -Dinosarus.SPEED;
  }
  stop(){
    this.spriteFound1.body.velocity.x = 0;
    this.spriteChick.body.velocity.x = 0;
  }
}
