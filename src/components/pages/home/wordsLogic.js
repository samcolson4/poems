var data = require('./dictionary.json')

var keys = [];
for(var k in data) keys.push(k)

var randomWords = []

function getRandomWords(num) {
  randomWords = []
  var isOverTen = false
  while(isOverTen === false){
    for (var i = 0; i < num; i++) {
      var item = keys[Math.floor(Math.random() * keys.length)]
      randomWords.push(item)
      keys.splice(item, 1)
    }
    if(randomWords.length > 10){
      isOverTen = true
    }
  }
}

getRandomWords(50)

class WordsLogic {
  
  constructor() {
    this.words = randomWords
  }

}

export default WordsLogic;
