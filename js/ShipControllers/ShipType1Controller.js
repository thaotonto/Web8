class ShipType1Controller extends ShipController {
  constructor(x, y, spriteSuffix, configs) {
    super(x, y, `Spaceship1${spriteSuffix}.png`, configs);

    this.configs.SPEED = 300;
    this.configs.bulletDelay = 200;
  }

  fire() {
    new BulletType1Controller(
      this.sprite.x,
      this.sprite.y, {}
    );
  }
}
