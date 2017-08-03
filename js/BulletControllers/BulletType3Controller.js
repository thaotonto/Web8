class BulletType3Controller extends BulletController {
  constructor(x, y, configs, ship) {
    super(x, y, 'BulletType3.png', configs);
    this.sprite.anchor.setTo(0.5, 1);
    this.sprite.update = this.update.bind(this);
    this.ship = ship;
  }

  update() {
    this.sprite.position = this.ship.sprite.position;
  }
}
