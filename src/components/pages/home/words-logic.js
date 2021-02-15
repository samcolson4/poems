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

    request(options, function (error, response, body) {
      if (error) throw new Error(error);

      console.log(body);
    });
  }

  sortwords(response) {
    this.words = []
    // const results = []
  }

  addWord(newWord) {
    this.words.push(newWord)
  }

}

export default WordsLogic;
