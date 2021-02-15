import WordsLogic from './words-logic.js'

var words = new WordsLogic

const Home = () => {
  return (
    <div>
      { words.words[0] }
    </div>
  );
}

export default Home;
