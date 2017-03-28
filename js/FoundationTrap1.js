class FoundationTrap1{
  constructor(x, y,sprite){
    this.sprite = Nakama.foundGroup.create(x, y,'Foundation',sprite );
    // Nakama.game.add(this.sprite);
    Nakama.game.physics.arcade.enable(this.sprite);
    //this.sprite.body.collideWorldBounds = true;
    // this.configs = configs;
    this.sprite.body.allowGravity = false;
    this.sprite.body.immovable = true;
  //  this.sprite.body.setSize(135.199,431.242-14,0,14);

  }
  update(){
    this.playerSprite=Nakama.playerGroup.getFirstAlive();
    if((this.sprite.position.x-50-this.playerSprite.position.x)<0){
      this.sprite.body.velocity.y = FoundationTrap1.SPEED;

}
  }
}
FoundationTrap1.SPEED=500;
