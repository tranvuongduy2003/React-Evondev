import logo from "./logo.svg";
import "./App.css";
import Game from "./components/tictactoe/Game";
import Photos from "./components/Photos/Photos";
import Header from "./components/Header";
import HackerNews from "./components/news/HackerNews";

function App() {
  return (
    <div className="App">
      {/* <Game></Game> */}
      {/* <Photos></Photos> */}
      {/* <Header></Header> */}
      <HackerNews></HackerNews>
    </div>
  );
}

export default App;
