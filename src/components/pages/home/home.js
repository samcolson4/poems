import WordsLogic from './words-logic.js'
{/* {process.env.REACT_APP_WORDS_API_KEY} */}

var words = new WordsLogic()

const Home = () => {
  return (
    <div>
      { words.words[0] }
    </div>
  );
}

export default Home;
