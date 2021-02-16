import WordsLogic from './words-logic.js'
import React, { Component } from 'react'

var words = new WordsLogic()

class Home extends Component {

  state = {
    showWords: false
  }

  updateWords = (data) => {
    this.setState({
      showWords: true
    });
  }

  generatePoem = async () => {
    var num = 40
    let data = await words.getLotsOfWords(num)
    while (words.outputWords.length < num){
      console.log(words.outputWords)
      return true
    }
    this.updateWords(data)
  }

  render() {

    if (this.state.showWords) {
      var wordList = (
        <div>{ words.outputWords }</div>
      )
    }

    return (
      <div>
        <button onClick={ this.generatePoem }> Get words </button>
        { wordList }
      </div>
    );
  }
}

export default Home;
