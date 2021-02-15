import config from './config.js'

class WordsLogic {
  
  constructor() {
    this.words = ["test_hello"]
  }
  
  getWords() {
  }

  sortwords(response) {
    this.words = []
    const results = []
  }

  addWord(newWord) {
    this.words.push(newWord)
  }

}

export default WordsLogic;
