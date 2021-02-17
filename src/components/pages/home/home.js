import WordsLogic from './wordsLogic.js'
import React, { Component } from 'react'
import './poem.css'

var words = new WordsLogic()
words.makeLines(words.words)

class Home extends Component {
  
  state = {
    showWords: true
  }

  render() {

    if (this.state.showWords) {
      var wordList = (
        <div>{ words.lines }</div>
      )
    }

    return (
      <div>
        {/* <div>{ wordList }</div> */}
        <div>{ words.lines[0] }</div>
        <div>{ words.lines[1] }</div>
        <div>{ words.lines[2] }</div>
        <div>{ words.lines[3] }</div>
        <div>{ words.lines[4] }</div>
      </div>
    );
  }
}

export default Home;
