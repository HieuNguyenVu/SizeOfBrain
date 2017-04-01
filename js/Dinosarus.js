class Dinosarus{
  constructor(sprite, configs){
      // this.sprite = Nakama.playerGroup.create(bot.x,y,'assets', spriteName[0]);
      this.sprite =  Nakama.playerGroup.add(sprite);
      Nakama.game.physics.arcade.enable(this.sprite);
      this.configs = configs;
      //this.sprite.body.setSize(,431.242-14,0,14);
      this.sprite.anchor = new Phaser.Point(0.5,0.5);
      //this about gravity
      this.sprite.body.collideWorldBounds = false;
      this.sprite.body.bounce.y = 0.8;
      //out bound kill
      this.sprite.checkWorldBounds = true;
      this.sprite.outOfBoundsKill = true;
      this.sprite.animations.add('run');
      this.sprite.body.bounce = new Phaser.Point(0,0);
      this.count=0;
      this.text = Nakama.game.add.text(Nakama.game.world.centerX, Nakama.game.world.centerY, "0 Mb", {
        font: "65px Arial",
        fill: "#ff0044",
        align: "center"
        });
        this.text.anchor.setTo(0.5, 0.5);
      }
  update(){
      var _this = this;
    var hitFound=  Nakama.game.physics.arcade.collide(Nakama.playerGroup,Nakama.foundGroup);
    //var hitTrap11=  Nakama.game.physics.arcade.collide(Nakama.playerGroup,Nakama.trap11);
    var hitInviFound=  Nakama.game.physics.arcade.collide(Nakama.playerGroup,Nakama.invifoundGroup);
    console.log(hitFound);
  //  var hitInviFound2=  Nakama.game.physics.arcade.collide(Nakama.playerGroup,Nakama.invifoundGroup2);
    //Di chuyển lên xuống
    if(Nakama.keyboard.isDown(this.configs.up)&&this.sprite.body.touching.down && (hitFound||hitInviFound)){
    //  console.log("UP button pressed");
      this.sprite.body.velocity.y = -Dinosarus.JUMP;
      console.log("jump");

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
          // if(anyFound.sprite.position.x < _this.sprite.position.x){
          //   _this.updateText(_this.count, _this.text);
          // }
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
  updateText(count, text) {
    count++;
    if(count <1024)  text.setText(count + "Mb");
    if(count >= 1024) text.setText(count/1024 + "Gb");
    if(count >= 1024000) text.setText((count/1024)/1024 + "Tb");
  }
}

Dinosarus.SPEED = 470;
Dinosarus.JUMP =1700;
