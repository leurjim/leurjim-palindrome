let assert = require("assert");
let Phrase = require("../index.js");

describe("Phrase", function() {

  describe("#palindrome", function() {

    it("debería devolver falso para un no-palíndrome", function() {
      let nonPalindrome = new Phrase("apple");
      assert(!nonPalindrome.palindrome());
    });

    it("debería devolver verdadero para un palíndrome simple", function() {
      let plainPalindrome = new Phrase("racecar");
      assert(plainPalindrome.palindrome());
    });

    it("debería devolver verdadero para un palíndrome de mayúsculas y minúsculas", function() {
      let mixedCase = new Phrase("RaceCar");
      assert(mixedCase.palindrome());
    });

    it("debería devolver verdadero para un palíndrome con puntuación", function() {
      let punctuatedPalindrome = new Phrase("Madam, I'm Adam.");
      assert(punctuatedPalindrome.palindrome());
    });

    it("debería devolver falso para una cadena vacía", function() {
      let emptyPhrase = new Phrase("");
      assert(!emptyPhrase.palindrome());
    });

    describe("#letters", function() {
      it("debería devolver solo letters", function() {
        let punctuatedPalindrome = new Phrase("Madam, I'm Adam.");
        assert.strictEqual(punctuatedPalindrome.letters(), "MadamImAdam");
      });
      it("debería devolver la cadena vacía si no coincide", function() {
        let noLetters = new Phrase("1234.56");
        assert.strictEqual(noLetters.letters(), "");
      });
    });
  });
});
