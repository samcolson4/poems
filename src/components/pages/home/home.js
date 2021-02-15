import WordsLogic from './words-logic.js'

var words = new WordsLogic()
words.getWord()

const Home = () => {
  
  return (
    <div>
      <button onClick={words.getWord.bind(words) }> Get word </button>
      { words.words }
    </div>
  );
}

export default Home;
