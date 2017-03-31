class Pike{
  constructor(x, y, type){
    if(type == 1){
      this.sprite = Nakama.trapGroup.create(x+2000, y-1500,'Foundation','PikeWhite.png');
    }else {
      this.sprite = Nakama.trapGroup.create(x+1500, y-1000,'Foundation','PikeBlack.png');
    }
    this.direction = new Phaser.Point(x,y);
    this.sprite.angle = Math.atan2(this.direction.x, this.direction.y) * (180/Math.PI);
    this.sprite.anchor = new Phaser.Point(0.5,0.5);
    this.sprite.checkWorldBounds = true;
    this.sprite.outOfBoundsKill = true;
    this.sprite.body.velocity = this.direction.setMagnitude(Pike.PIKE_SPEED);

    Nakama.trap.push(this);
    this.sprite.onKilled = this.onKilled;
    Nakama.game.physics.arcade.enable(this.sprite);
    this.sprite.body.allowGravity = false;
    this.sprite.body.immovable = true;
  }
  update(){
    this.move();
  }
  move(){
  // 1. Get a target if doesn't have target
  // if(!this.target || !this.target.alive){
  //   this.getNewTarget();
  // }
  // 2. If no target is available keep on going straight
  // if(!this.target) return;
  // 3. Get direction toward target
  var direction = Phaser.Point.subtract(this.target.position, this.sprite.position);
  // 4. Turn slowly if the angle is too large
  var currentAngle = Nakama.game.math.radToDeg(
    Nakama.game.math.angleBetween(
      0,
      0,
      this.sprite.body.velocity.x,
      this.sprite.body.velocity.y
    )
  );
  var directionAngle = Nakama.game.math.radToDeg(
    Nakama.game.math.angleBetween(
      0,
      0,
      direction.x,
      direction.y
    )
  );
  var deltaAngle = directionAngle - currentAngle;
  // Ensure deltaAngle is between -180 & 180
  if(deltaAngle > 180) deltaAngle -= 360;
  if(deltaAngle < -180) deltaAngle += 360;
  // Ensure deltaAngle does not exceed max turn rate
  var maxDelta = BulletType2Controller.TURN_RATE * Nakama.game.time.physicsElapsed;
  if(deltaAngle > maxDelta) deltaAngle = maxDelta;
  if(deltaAngle < -maxDelta) deltaAngle = -maxDelta;
  // Apply new direction based on new angle
  var newAngle = currentAngle + deltaAngle;
  var newDirection = new Phaser.Point(
    Math.cos(Nakama.game.math.degToRad(newAngle)),
    Math.sin(Nakama.game.math.degToRad(newAngle))
  );
  // 5. Set new velocity
  this.sprite.body.velocity = newDirection.setMagnitude(Pike.PIKE_SPEED = 1000);
  this.sprite.angle = Math.atan2(newDirection.x, -newDirection.y) * (180/Math.PI);
  }
}
Pike.PIKE_SPEED = 1000;
