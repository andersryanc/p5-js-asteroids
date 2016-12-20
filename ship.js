function Ship() {
  this.pos = createVector( width / 2, height / 2 );
  this.vel = createVector( 0, 0 );
  this.r = 20;
  this.heading = 0;
  this.rotation = 0;
  this.isBoosting = false;
}

Ship.prototype.render = function() {
  push();
  translate(this.pos.x, this.pos.y);
  rotate(this.heading + PI / 2);
  fill(0);
  stroke(255);
  triangle(-this.r, this.r, this.r, this.r, 0, -this.r);
  pop();
};

Ship.prototype.update = function() {
  this.turn();
  this.edges();

  if ( this.isBoosting ) {
    this.boost();
  }
  this.pos.add(this.vel);
  this.vel.mult(0.99);
};

Ship.prototype.setRotation = function(a) {
  this.rotation = a;
};

Ship.prototype.turn = function() {
  this.heading += this.rotation;
};

Ship.prototype.boosting = function(b) {
  this.isBoosting = b;
}

Ship.prototype.boost = function() {
  var force = p5.Vector.fromAngle(this.heading);
  force.mult(0.1);
  this.vel.add(force);
};

Ship.prototype.edges = common.edges;

Ship.prototype.hits = function(asteroid) {
  return dist( this.pos.x, this.pos.y, asteroid.pos.x, asteroid.pos.y ) < this.r + asteroid.r;
};
