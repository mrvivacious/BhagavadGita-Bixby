const BHAGAVAD_GITA = require('lib/fullGita').BHAGAVAD_GITA;

module.exports.function = function lookupVerse(numChapter, numVerse) {
  let sloka = BHAGAVAD_GITA[numChapter][numVerse]
  let translation = sloka[1];
  let verse = sloka[1];

  return {
    SlokaSanskrit: sloka,
    SlokaMeaning: translation,
    chapter: numChapter,
    verse: numVerse
  }
}
