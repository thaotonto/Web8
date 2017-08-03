class ShipType3Controller extends ShipController {
  constructor(x, y, spriteSuffix, configs) {
    super(x, y, `Spaceship3${spriteSuffix}.png`, configs);

    this.configs.SPEED = 300;
    this.configs.bulletDelay = 45;
    this.sprite.anchor.setTo(0.5, 0.25);
    this.bullets = [];
  }


  shoot() {
    if (Nakama.keyboard.isDown(this.configs.fire)) {
      this.fire();
    } else {
      this.clearBullets();
    }
  }

  fire() {
    if (this.bullets.length < 1) {
      this.bullets.push(new BulletType3Controller(
        this.sprite.x,
        this.sprite.y, {},
        this
      ));
    }
  }

  clearBullets() {
    for (var bullet of this.bullets) {
      bullet.sprite.kill();
    }
    this.bullets = [];
  }
}
