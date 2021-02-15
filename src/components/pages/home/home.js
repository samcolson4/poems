import WordsLogic from './words-logic.js'

var words = new WordsLogic

const Home = () => {
  return (
    <div>
      { words.words[0] }
      { words.words.length }
      { words.words[1] }
    </div>
  );
}

export default Home;
