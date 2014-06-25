describe('draughtckers.js', function() {
  var game;

  beforeEach(function() {
    game = new Draughtckers();

    var WHITE_PLAYER = "white_player";
  });

  describe('the game', function() {

    it('should have a board', function() {
      expect(game.$$board).toBeDefined();
    });

    it("should respond who plays in the current turn", function() {
      expect(game.getCurrentPlayer()).toEqual(draughtckers.WHITE_PLAYER);
    });

  });
});
