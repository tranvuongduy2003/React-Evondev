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
import Dropdown from "./components/Dropdown/Dropdown";
import HackerNewsWithHook from "./components/HackerNewsWithHook/HackerNewsWithHook";
import Form from "./components/form/Form";
import MovieSearchApp from "./components/MovieSearchApp/MovieSearchApp";
import SignUpForm from "./components/form/SignUpForm";
import SignUpFormV2 from "./components/form/SignUpFormV2";
import SignUpFormFinal from "./components/form/SignUpFormFinal";

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
      {/* <div className="p-5">
        <Dropdown></Dropdown>
      </div> */}
      {/* <HackerNewsWithHook></HackerNewsWithHook> */}
      {/* <MovieSearchApp></MovieSearchApp> */}
      {/* <Form></Form> */}
      {/* <SignUpForm></SignUpForm> */}
      {/* <SignUpFormV2></SignUpFormV2> */}
      <SignUpFormFinal></SignUpFormFinal>
    </div>
  );
}

export default App;
