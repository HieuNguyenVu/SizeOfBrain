class Pike{
  constructor(x, y, type){
    if(type == 1){
      this.sprite = Nakama.trapGroup.create(x+2000, y-1500,'Foundation','PikeWhite.png');
    }else {
      this.sprite = Nakama.trapGroup.create(x+1500, y-1000,'Foundation','PikeBlack.png');
    }
    this.Xtarget = x;
    this.Ytarget = y;
    Nakama.game.physics.arcade.enable(this.sprite);
    this.sprite.body.allowGravity = false;
    this.sprite.body.immovable = true;
    this.sprite.body.collideWorldBounds = false;
    this.sprite.body.checkWarBounds = true;
    this.sprite.body.outOfBoundsKill = true;
    this.sprite.body.velocity = this.sprite.body.velocity.setMagnitude(Pike.PIKE_SPEED);
  }
  update(){
    this.move();
  }
  move(){
    this.sprite.body.velocity.y = Pike.PIKE_SPEED
    var b = this.Ytarget - this.sprite.position.y;
    var a = this.Xtarget - this.sprite.position.x  ;
    var da = Math.sqrt(b*b+a*a);
    var rad = Math.acos(a/da);
    var corner = rad*180/Math.PI + 180;
    // console.log(corner
    Nakama.game.physics.arcade.velocityFromAngle(this.sprite.angle, Pike.PIKE_SPEED, this.sprite.body.velocity);
    if(b>0){
        this.sprite.body.velocity = new Phaser.Point(
        Math.sin(-rad-Math.PI/2),
        Math.cos(-rad-Math.PI/2)
      ).setMagnitude(-Pike.PIKE_SPEED);
    }else {
      this.sprite.body.velocity = new Phaser.Point(
        Math.sin(rad+Math.PI/2),
        Math.cos(rad+Math.PI/2)
      ).setMagnitude(Pike.PIKE_SPEED);
    }
  }
}
Pike.PIKE_SPEED = 1000;
