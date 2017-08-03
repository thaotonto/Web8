class ShipController {
  constructor(x, y, spriteName, configs) {
    this.sprite = Nakama.playerGroup.create(x, y, 'assets', spriteName);
    this.sprite.body.collideWorldBounds = true;
    this.configs = configs;
    this.sprite.anchor = new Phaser.Point(0.5, 0.5);
    this.nextShoot = 0;
    this.sprite.update = this.update.bind(this);
  }

  update() {
    //moment
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

    //shoot
    if (Nakama.keyboard.isDown(this.configs.fire)) {
      var timeNow = Nakama.game.time.time;

      if (this.nextShoot < timeNow) {
        this.fire();
        this.nextShoot = timeNow + this.configs.bulletDelay;
      }
    }
  }

  fire() {}
}
