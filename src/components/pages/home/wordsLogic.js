var data = require('./dictionary.json')

var keys = [];
for(var k in data) keys.push(k)

var randomWords = []

function getRandomWords(num) {
  for (var i = 0; i < num; i++) {
    var item = keys[Math.floor(Math.random() * keys.length)];
    randomWords.push(item)
  }
}

getRandomWords(40)

class WordsLogic {
  
  constructor() {
    this.words = randomWords
  }

}

export default WordsLogic;
