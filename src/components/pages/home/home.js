import WordsLogic from './wordsLogic.js'
import React, { Component } from 'react'

var words = new WordsLogic()

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

class Home extends Component {
  
  lines = []

  state = {
    showWords: true
  }

  makeLines(arr) {
    var random = getRandomInt(arr.length)
    for (var i = 0; i < random; i++) {
      var line = arr[Math.floor(Math.random() * arr.length)] + " "
      this.lines.push(line)
    }
    console.log(this.lines)
  }

  render() {

    if (this.state.showWords) {
      this.makeLines(words.words)
      var wordList = (
        <div>{ this.lines }</div>
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
