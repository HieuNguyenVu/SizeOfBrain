class FoundationTrapWithPike{
  constructor(x, y){
    // this.spritePike = new Pike(x,y,1);
    // Nakama.trap.push(this.spritePike);
    // Nakama.trapGroup.add(this.spritePike);
    this.spriteFound = Nakama.foundGroup.create(x,y,'Foundation','Foundation2.png');
    Nakama.game.physics.arcade.enable(this.spriteFound);
    this.spritePlayer = Nakama.playerGroup.getFirstAlive();
    //set attribute spritePike

    //set attribute spriteFound
    this.spriteFound.body.allowGravity = false;
    this.spriteFound.body.immovable = true;
    this.spriteFound.body.setSize(976.199,431.242-14,0,14);
  }
  update(){
    // var hitThisFound =  Nakama.game.physics.arcade.collide(this.spritePlayer,this.spriteFound, this.dkm());
    // console.log(this.spritePlayer.body.position.x);
    // console.log(this.spriteFound.body.position.x);
    // this.move();
    // this.spritePike.sprite.body.velocity.x = 1000;
  }
  dkm(){
    console.log("phi");
    this.spritePike.move();
  }
  move(){
    this.spriteFound.body.velocity.x = -Dinosarus.SPEED;
  }
  stop(){
    this.spriteFound.body.velocity.x = 0;
  }
}
FoundationTrapWithPike.PIKE_SPEED = 1000;
// Foundation.SPRITE = 'Foundation1.png';
