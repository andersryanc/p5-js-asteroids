var ship;
var lasers = [];

var asteroids = [];
var asteroidsCount = 10;

function setup() {
  createCanvas(windowWidth, windowHeight);
  ship = new Ship();

  for ( var i = 0; i < asteroidsCount; i++ ) {
    asteroids.push(new Asteroid());
  }
}

function draw() {
  background(0);

  asteroids.forEach(function(a,i) {
    if ( ship.hits(a) ) {
      alert('Game Over!!!');
      window.location.reload();
    }

    a.render();
    a.update();
  });

  for ( var i = lasers.length - 1; i >= 0; i-- ) {
    var l = lasers[i];

    l.render();
    l.update();

    for ( var j = asteroids.length - 1; j >= 0; j-- ) {
      var a = asteroids[j];
      if ( l.hits( a ) ) {
        var newAsteroids = a.breakup();
        asteroids = asteroids.concat( newAsteroids );
        asteroids.splice( j, 1 );
        lasers.splice( i, 1 );
        break;
      }
    }

    if ( l.offscreen() ) {
      lasers.splice( i, 1 );
    }
  }

  ship.render();
  ship.update();
}

function keyReleased() {
  // TODO: If you release LEFT while also pressing RIGHT (after that), the ship stops turning

  if ( keyCode === UP_ARROW ) {
    ship.boosting(false);
  } else {
    ship.setRotation(0);
  }
}

function keyPressed() {
  if (key == ' ') {
    lasers.push(new Laser(ship.pos, ship.heading));
  } else if (keyCode === RIGHT_ARROW) {
    ship.setRotation(0.1);
  } else if (keyCode === LEFT_ARROW) {
    ship.setRotation(-0.1);
  } else if (keyCode === UP_ARROW) {
    ship.boosting(true);
  }
}
