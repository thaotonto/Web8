class ShipType3Controller extends ShipController {
  constructor(x, y, spriteSuffix, configs) {
    super(x, y, `Spaceship3${spriteSuffix}.png`, configs);

    this.configs.SPEED = 300;
    this.configs.bulletDelay = 45;
  }

  fire() {
    new BulletType3Controller(
      this.sprite.x,
      this.sprite.y, {}
    );
  }
}
