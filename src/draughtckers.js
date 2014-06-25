function Draughtckers () {
  this.$$board = null;
  this.$$currentPlayer = draughtckers.WHITE_PLAYER;
};

Draughtckers.prototype.getCurrentPlayer = function() {
  return this.$$currentPlayer;
};
