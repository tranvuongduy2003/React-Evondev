import logo from "./logo.svg";
import "./App.css";
import Game from "./components/tictactoe/Game";
import Photos from "./components/Photos/Photos";
import Header from "./components/Header";
import HackerNews from "./components/news/HackerNews";
import HackerNewsClone from "./components/newsClone/HackerNewsClone";
import HackerNewsWithReducer from "./components/HackerNewsWithReducer/HackerNewsWithReducer";
import StopWatch from "./components/StopWatch/StopWatch";
import Input from "./components/AutoFocusInput/Input";
import TextareaAutoResize from "./components/TextareaAutoResize/TextareaAutoResize";

function App() {
  return (
    <div className="App">
      {/* <Game></Game> */}
      {/* <Photos></Photos> */}
      {/* <Header></Header> */}
      {/* <HackerNews></HackerNews> */}
      {/* <HackerNewsClone></HackerNewsClone> */}
      {/* <HackerNewsWithReducer></HackerNewsWithReducer> */}
      {/* <StopWatch></StopWatch> */}
      {/* <Input></Input> */}
      <TextareaAutoResize></TextareaAutoResize>
    </div>
  );
}

export default App;
