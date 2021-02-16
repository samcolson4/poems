class WordsLogic {
  
  constructor() {
    this.words = []
    this.outputWords = []
  }
  
  getWord() {
    const request = require('request');

    const options = {
      method: 'GET',
      url: 'https://wordsapiv1.p.rapidapi.com/words/?random=true',
      headers: {
      'x-rapidapi-key': process.env.REACT_APP_WORDS_API_KEY,
      'x-rapidapi-host': 'wordsapiv1.p.rapidapi.com',
      useQueryString: true
      }
    }

    return new Promise(resolve => { 
      request(options, function (error, response, body) {
      if (error) throw new Error(error);
      
      resolve(response, body);
      })
      }).then( value => {        
        var data = JSON.parse(value.body)
        this.words.push(data.word)
      })
  }

  getLotsOfWords(num) {
   for (var i = 0; i < num; i++) {
      this.getWord()
    }
    this.ouputPoem()
  }

  ouputPoem() {
    var length = this.words.length
    
    for (var i = 0; i < length; i++) {
      this.outputWords.push(`<p> ${this.words[i]} </p>`)
      console.log(this.outputWords)
    }
  }
 
}

export default WordsLogic;
