class Foundation{
  constructor(sprite){
    this.sprite = Nakama.foundGroup.create(400, 400,'Foundation',sprite );
    // Nakama.game.add(this.sprite);
    Nakama.game.physics.arcade.enable(this.sprite);
    this.sprite.body.collideWorldBounds = true;
    // this.configs = configs;
  }
  update(){

  }
}
// Foundation.SPRITE = 'Foundation1.png';
