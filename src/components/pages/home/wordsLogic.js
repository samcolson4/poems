var data = require('./dictionary.json')

var keys = [];
for(var k in data) keys.push(k)

var randomWords = []

function getRandomWords(num) {
  randomWords = []
  var isOverTen = false
  while(isOverTen === false){
    for (var i = 0; i < num; i++) {
      let item = keys[Math.floor(Math.random() * keys.length)]
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

      // let line = <p className={this.getRandomInt(5)}> {arr[Math.floor(Math.random() * arr.length)]} </p>

      let line = <p className={this.getRandomInt(5)}> {this.getSlices(arr)} </p>
      
      this.lines.push(line)
    }
  }

  getSlices(arr) {
    var random = this.getRandomInt(arr.length / 7)
    let slice = arr.splice(0, random)
    return slice
  }

  getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

}

export default WordsLogic;
