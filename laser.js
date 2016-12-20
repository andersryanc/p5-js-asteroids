function Laser(pos, angle) {
  this.pos = createVector(pos.x, pos.y);
  this.vel = p5.Vector.fromAngle(angle);
  this.vel.mult(10);
  this.color = [random(0, 255), random(0,255), random(0,255)];
}

Laser.prototype.render = function() {
  push();
  stroke(this.color);
  strokeWeight(4);
  point(this.pos.x, this.pos.y);
  pop();
};

Laser.prototype.update = function() {
  this.pos.add(this.vel);
};

Laser.prototype.offscreen = function() {
  return ( this.pos.x > width || this.pos.x < 0 || this.pos.y > height || this.pos.y < 0 );
};

Laser.prototype.hits = function(asteroid) {
  return dist( this.pos.x, this.pos.y, asteroid.pos.x, asteroid.pos.y ) < asteroid.r;
};
