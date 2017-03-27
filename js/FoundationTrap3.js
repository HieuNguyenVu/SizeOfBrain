class FoundationTrap3{
  constructor(x, y, sprite){
    this.sprite = Nakama.trapGroup.create(x, y, 'Foundation', sprite);
    Nakama.game.physics.arcade.enable(this.sprite);
    this.sprite.body.allowGravity = false;
    this.sprite.body.collideWorldBounds = true;
    this.sprite.body.immovable = true;
    this.sprite.body.setSize(166.027,336.013-14,0,14);
  }
  update(){

  }
}
