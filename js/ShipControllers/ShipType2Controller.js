class ShipType2Controller extends ShipController {
  constructor(x, y, spriteSuffix, configs) {
    super(x, y, `Spaceship2${spriteSuffix}.png`, configs);

    this.configs.SPEED = 300;
    this.configs.bulletDelay = 400;
  }

  fire() {
    new BulletType2Controller(
      this.sprite.x,
      this.sprite.y, {}
    );
  }
}
