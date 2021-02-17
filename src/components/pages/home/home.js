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

    var title = words.lines[words.getRandomInt(4)].props.children[1].split(" ")[0]

    return (
      <div className="poem_body">
        <h2 id="title">{title}</h2>

        <div>{ words.lines[0] }</div>
        <div>{ words.lines[1] }</div>
        <div>{ words.lines[2] }</div>
        <div>{ words.lines[3] }</div>
        <div>{ words.lines[4] }</div>
        <div>{ words.lines[5] }</div>
        <div>{ words.lines[6] }</div>
        <div>{ words.lines[7] }</div>
      </div>
    );
  }
}

export default Home;
