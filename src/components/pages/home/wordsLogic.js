var data = require('./dictionary.json')

var keys = [];
for(var k in data) keys.push(k)

var randomWords = []

function getRandomWords(num) {
  randomWords = []
  var isOverTen = false
  while(isOverTen === false){
    for (var i = 0; i < num; i++) {
      var item = `${keys[Math.floor(Math.random() * keys.length)]}`
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
    this.lines = []
  }

  makeLines(arr) {
    var random = this.getRandomInt(arr.length)
    for (var i = 0; i < random; i++) {
      var line = arr[Math.floor(Math.random() * arr.length)] + " "
      this.lines.push(line)
    }
  }

  getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

}

export default WordsLogic;
