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

    var title = words.lines[words.getRandomInt(4)].props.children[1].split(" ")[0]

    return (
      <div className="poem_body">
        <p id="title">{title}</p>

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
