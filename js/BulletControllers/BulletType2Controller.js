class BulletType2Controller extends BulletController {
  constructor(x, y, configs) {
    super(x, y, 'BulletType2.png', configs);
    this.SPEED = 300; // missile speed pixels/second
    this.TURN_RATE = 100; // turn rate in degrees/frame
    this.WOBBLE_LIMIT = 15; // degrees
    this.WOBBLE_SPEED = 250; // milliseconds
    this.wobble = this.WOBBLE_LIMIT;
    Nakama.game.add.tween(this).to({
        wobble: -this.WOBBLE_LIMIT
      },
      this.WOBBLE_SPEED, Phaser.Easing.Sinusoidal.InOut, true, 0,
      Number.POSITIVE_INFINITY, true
    );
    this.sprite.update = this.update.bind(this);
  }

  getAngle(x1, y1, x2, y2) {
    //I use the offset because the ship is pointing down
    //at the 6 o'clock position
    //set to 0 if your sprite is facing 3 o'clock
    //set to 180 if your sprite is facing 9 o'clock
    //set to 270 if your sprite is facing 12 o'clock
    //
    var offSet = 90;
    // angle in radians
    var angleRadians = Math.atan2(y2 - y1, x2 - x1);
    // angle in degrees
    var angleDeg = (Math.atan2(y2 - y1, x2 - x1) * 180 / Math.PI);
    //add the offset
    angleDeg += offSet;
    return angleDeg;
  }

  update() {
    var targetPoint = Nakama.enemyGroup.getFirstAlive();
    if (targetPoint == null) {
      targetPoint = {
        x: this.sprite.x + this.sprite.width * this.sprite.anchor.x,
        y: -500,
        width: 0,
        height: 0,
        anchor: {
          x: 0,
          y: 0
        }
      }
    }
    var targetAngle = Nakama.game.math.angleBetween(
      this.sprite.x + this.sprite.width * this.sprite.anchor.x, this.sprite.y,
      targetPoint.x + targetPoint.width * targetPoint.anchor.x, targetPoint.y - targetPoint.height * targetPoint.anchor.y
    );
    targetAngle += Nakama.game.math.degToRad(this.wobble);
    // targetAngle += Math.PI / 2;


    // Gradually (this.TURN_RATE) aim the missile towards the target angle
    if (this.sprite.rotation !== targetAngle) {
      // Calculate difference between the current angle and targetAngle
      var delta = targetAngle - this.sprite.rotation;
      // Keep it in range from -180 to 180 to make the most efficient turns.
      if (delta > Math.PI) delta -= Math.PI * 2;
      if (delta < -Math.PI) delta += Math.PI * 2;

      if (delta > 0) {
        // Turn clockwise
        this.sprite.angle += this.TURN_RATE;

      } else {
        // Turn counter-clockwise
        this.sprite.angle -= this.TURN_RATE;
      }
      // Just set angle to target angle if they are close
      if (Math.abs(delta) < Nakama.game.math.degToRad(this.TURN_RATE)) {
        this.sprite.rotation = targetAngle;
      }

    }

    // Calculate velocity vector based on this.rotation and this.SPEED
    this.sprite.body.velocity.x = Math.cos(this.sprite.rotation) * this.SPEED;
    this.sprite.body.velocity.y = Math.sin(this.sprite.rotation) * this.SPEED;

  }

}
