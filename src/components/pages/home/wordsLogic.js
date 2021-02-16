var data = require('./dictionary.json')


var keys = [];
for(var k in data) keys.push(k)
console.log(keys)

class WordsLogic {
  
  constructor() {
    this.words = ["This is a test"]
    this.outputWords = []
  }
  
  printThree() {
    return keys[2]
  }
 
}

export default WordsLogic;
