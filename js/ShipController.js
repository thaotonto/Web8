class ShipController {
  constructor(x, y, spriteName, configs) {
    this.sprite = Nakama.game.add.sprite(x, y, 'assets', spriteName);
    Nakama.game.physics.arcade.enable(this.sprite);
    this.sprite.body.collideWorldBounds = true;
    this.configs = configs;

    this.nextShoot = 0;
    this.sprite.update = this.update.bind(this);
  }

  update() {
    if (Nakama.keyboard.isDown(this.configs.left)) {
      this.sprite.body.velocity.x = -this.configs.SPEED;
    } else
    if (Nakama.keyboard.isDown(this.configs.right)) {
      this.sprite.body.velocity.x = this.configs.SPEED;
    } else {
      this.sprite.body.velocity.x = 0;
    }

    if (Nakama.keyboard.isDown(this.configs.up)) {
      this.sprite.body.velocity.y = -this.configs.SPEED;
    } else
    if (Nakama.keyboard.isDown(this.configs.down)) {
      this.sprite.body.velocity.y = this.configs.SPEED;
    } else {
      this.sprite.body.velocity.y = 0;
    }

    if (Nakama.keyboard.isDown(this.configs.fire)) {
      var timeNow = Nakama.game.time.now;

      if (this.nextShoot < timeNow) {
        new BulletController(this.sprite.position.x + this.sprite.width / 2, this.sprite.position.y - this.sprite.height / 2, {
          spriteName: 'BulletType1.png',
          spriteWidth: 38,
          SPEED: 400
        });
        this.nextShoot = timeNow + this.configs.bulletDelay;
      }
    }

  }
}
