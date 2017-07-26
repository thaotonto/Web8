class BulletController {
  constructor(x, y, configs) {
    this.configs = configs;
    this.sprite = Nakama.game.add.sprite(x - this.configs.spriteWidth / 2, y, 'assets', this.configs.spriteName);
    Nakama.game.physics.arcade.enable(this.sprite);
    this.sprite.body.checkWorldBounds = true;
    this.sprite.body.outOfBoundsKill = true;
    this.sprite.update = this.update.bind(this);
  }

  update() {
    this.sprite.body.velocity.y = -this.configs.SPEED;
  }
}
