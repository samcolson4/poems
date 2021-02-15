import WordsLogic from './words-logic.js'

var words = new WordsLogic

const Home = () => {
  return (
    <div>
      { words.words[0] }
      {/* {process.env.REACT_APP_WORDS_API_KEY} */}
    </div>
  );
}

export default Home;
