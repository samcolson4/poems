import WordsLogic from './wordsLogic.js'
import React, { Component } from 'react'

var words = new WordsLogic()

class Home extends Component {
  
  state = {
    showWords: true
  }

  render() {

    if (this.state.showWords) {
      var wordList = (
        <div>{ words.words }</div>
      )
    }

    return (
      <div>
        { wordList }
      </div>
    );
  }
}

export default Home;
