class FoundationTrap2{
  constructor(x, y, sprite){
    this.sprite = Nakama.trapGroup.create(x, y, 'Foundation', sprite);
    Nakama.game.physics.arcade.enable(this.sprite);
    this.sprite.body.allowGravity = false;
    //this.sprite.body.collideWorldBounds = true;
    this.sprite.body.immovable = true;
    this.sprite.body.setSize(166.027,336.013-14,0,14);
  }
  update(){
    this.sprite.body.velocity.x=-FoundationTrap2.SPEED;
    this.playerSprite=Nakama.playerGroup.getFirstAlive();
    if((this.sprite.position.x - this.playerSprite.position.x)<100){
        this.sprite.body.velocity.y = -FoundationTrap2.SPEED;
    }
    if (this.sprite.position.y < 950){
      this.sprite.body.velocity.y = 0;
    }
  }
}

FoundationTrap2.SPEED = 500;
FoundationTrap2.XSPEED=100;
