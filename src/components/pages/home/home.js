import WordsLogic from './words-logic.js'
import React, { Component } from 'react'

var words = new WordsLogic

class Home extends Component {
  
  state = {
    showWords: false
  }

  updateWords = () => {
    this.setState({
      wordList: words.getLotsOfWords(10),
      showWords: true,
      wordList: words.getLotsOfWords(1)
    });
  }

  render() {

    let wordList = words.words

    if (this.state.showWords) {
      wordList = (
          <p>{ words.words }</p>
      )
    }

    return (
      <div>
        <button onClick={ this.updateWords }> Get word </button>
        { wordList }
      </div>
    );
  }
}

export default Home;
