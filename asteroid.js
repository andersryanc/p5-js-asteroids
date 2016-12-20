function Asteroid(pos, r) {
  this.pos = (pos && pos.copy()) || createVector( random(width), random(height) );
  this.r = r / 2 || random(15, 50);
  this.points = floor(random(5, 15));
  this.offset = [];
  this.vel = p5.Vector.random2D();

  for ( var i = 0; i < this.points; i++ ) {
    this.offset[i] = random( this.r/3, -this.r/3 );
  }
}

Asteroid.prototype.render = function() {
  push();

  fill(0);
  stroke(255);
  translate(this.pos.x, this.pos.y);

  beginShape();
  for ( var i = 0; i < this.points; i++ ) {
    var angle = map(i, 0, this.points, 0, TWO_PI);
    var r = this.r + this.offset[i];
    var x = r * cos(angle);
    var y = r * sin(angle);
    vertex(x, y);
  }
  endShape(CLOSE);

  pop();
};

Asteroid.prototype.update = function() {
  this.edges();
  this.pos.add(this.vel);
};

Asteroid.prototype.breakup = function() {
  var newAsteroids = [];
  if ( this.r > 20 ) {
    newAsteroids.push(new Asteroid(this.pos, this.r));
    newAsteroids.push(new Asteroid(this.pos, this.r));
  }
  return newAsteroids;
};

Asteroid.prototype.edges = common.edges;
