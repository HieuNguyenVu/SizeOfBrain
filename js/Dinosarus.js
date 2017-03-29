class Dinosarus{
  constructor(sprite, configs){
      // this.sprite = Nakama.playerGroup.create(bot.x,y,'assets', spriteName[0]);
      this.sprite = Nakama.playerGroup.add(sprite);
      Nakama.game.physics.arcade.enable(this.sprite);
      this.configs = configs;
      this.sprite.anchor = new Phaser.Point(0.5,0.5);
      this.sprite.animations.add('run');
      //this about gravity
      this.sprite.body.collideWorldBounds = false;
      this.sprite.body.bounce.y = 0.8;
      //out bound kill
      this.sprite.body.checkWarBounds = true;
      this.sprite.body.outOfBoundsKill = true;
      this.sprite.body.bounce = new Phaser.Point(0,0);
  }
  update(){
    var hitFound=  Nakama.game.physics.arcade.collide(Nakama.playerGroup,Nakama.foundGroup);
    //Di chuyển lên xuống
    if(Nakama.keyboard.isDown(this.configs.up)&&this.sprite.body.touching.down && hitFound){
    //  console.log("UP button pressed");
      this.sprite.body.velocity.y = -Dinosarus.JUMP;

    }else{
      // this.sprite.body.velocity.y = Dinosarus.SPEED;
      this.sprite.body.gravity.y = 900;
    }
    //Di chuyển trái phải
    if(Nakama.keyboard.isDown(this.configs.left)){
      this.sprite.body.velocity.x = -Dinosarus.SPEED;
      this.sprite.scale.setTo(-1,1);
      this.move();
      Nakama.found.forEach(function(anyFound){
        anyFound.stop();
      })
    }
    else if(Nakama.keyboard.isDown(this.configs.right)){ //Nếu di chuyển xang bên phải
      if(this.sprite.position.x > 1023){ // Mà đi quá giữa map
        this.sprite.body.velocity.x = 0;
        Nakama.found.forEach(function(anyFound){
          anyFound.move();
        })
      }else {
        this.sprite.body.velocity.x = Dinosarus.SPEED;
      }
      this.sprite.scale.setTo(1,1);
      this.move();
    }else {
      this.sprite.body.velocity.x = 0;
      this.stop();
      Nakama.found.forEach(function(anyFound){
        anyFound.stop();
      })
    }
  }
  move(){
    this.sprite.animations.play('run', 10, true);
  }
  stop(){
    this.sprite.animations.stop('run');
  }
}

Dinosarus.SPEED = 400;
Dinosarus.JUMP =1100;
