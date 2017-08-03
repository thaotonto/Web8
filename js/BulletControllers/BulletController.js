class BulletController {
  constructor(x, y, spriteName, configs) {
    if (spriteName != 'BulletType2.png') {
      this.sprite = Nakama.bulletGroup.create(x, y, 'assets', spriteName);
    } else {
      this.sprite = Nakama.bulletGroup.create(x, y, 'bulletType2');
    }

    this.sprite.checkWorldBounds = true;
    this.sprite.outOfBoundsKill = true;
    this.sprite.anchor = new Phaser.Point(0.5, 0.5);

  }
}
