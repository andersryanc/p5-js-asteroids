var common = {

  edges: function() {
    if ( this.pos.x > width + this.r ) {
      this.pos.x = -this.r;
    } else if ( this.pos.x < -this.r ) {
      this.pos.x = width + this.r;
    }

    if ( this.pos.y > height + this.r ) {
      this.pos.y = -this.r;
    } else if ( this.pos.y < -this.r ) {
      this.pos.y = height + this.r;
    }
  },

};
