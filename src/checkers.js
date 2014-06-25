function Checkers () {
  this.$$board = null;
  this.$$currentPlayer = checkers.WHITE_PLAYER;
};

Checkers.prototype.getCurrentPlayer = function() {
  return this.$$currentPlayer;
};
