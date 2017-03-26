class Foundation{
  constructor(x, y,sprite){
    this.sprite = Nakama.foundGroup.create(x, y,'Foundation',sprite );
    // Nakama.game.add(this.sprite);
    Nakama.game.physics.arcade.enable(this.sprite);
    // this.sprite.body.collideWorldBounds = true;
    // this.configs = configs;
    this.sprite.body.allowGravity = false;
    this.sprite.body.immovable = true;
    this.sprite.body.setSize(x,y,0,-200);
  }
  update(){
  }
}
// Foundation.SPRITE = 'Foundation1.png';
