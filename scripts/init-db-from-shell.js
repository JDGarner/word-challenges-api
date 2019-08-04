db = connect("localhost:27017/words");
db.words.drop();
db.words.insert({
  list: {
    rhymes: [{ rhyme: "fist", score: 3, syllables: 1 }, { rhyme: "missed", score: 5, syllables: 1 }]
  },
  air: {
    rhymes: [{ rhyme: "fair", score: 3, syllables: 1 }, { rhyme: "scare", score: 5, syllables: 1 }]
  }
});
