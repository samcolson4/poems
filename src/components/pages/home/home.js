import WordsLogic from './words-logic.js'

var words = new WordsLogic()
words.getWord()

const Home = () => {
  return (
    <div>
      { words.words } {' '}
      { words.words.length }
    </div>
  );
}

export default Home;
