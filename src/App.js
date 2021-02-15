import './App.css';
import Main from './components/main.js'
import NavBar from './components/navbar.js'
// console.log(process.env.REACT_APP_WORDS_API_KEY)

function App() {
  return (
    <div className="App">
      <NavBar />
      <Main />
    </div>
  );
}

export default App;
