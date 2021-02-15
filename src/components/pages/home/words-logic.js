class WordsLogic {
  
  constructor() {
    this.words = ["test_hello"]
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

        if (this.words == ["test_hello"]) {
          this.words.length = 0
        } 
        
        var data = JSON.parse(value.body)
        this.words.push(data.word)
        
        // console.log(this.words)
    })
  }

  getLotsOfWords(num) {
    for (var i = 1; i <= num; ++i) {
      this.getWord()
    }
    console.log(this.words)
  }
 

}

export default WordsLogic;
